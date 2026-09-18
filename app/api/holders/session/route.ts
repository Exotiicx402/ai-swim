import { cookies } from "next/headers";
import { currentHolder, HOLDER_COOKIE, holderConfig, verifyHolder } from "@/lib/holders/server";

export const runtime = "nodejs";
const headers = { "Cache-Control": "no-store, private" };
function sameOrigin(request: Request) {
  return request.headers.get("origin") === new URL(request.url).origin;
}
export async function POST(request: Request) {
  if (!sameOrigin(request)) return Response.json({ error: "Request origin not allowed." }, { status: 403, headers });
  if (!holderConfig().configured) return Response.json({ error: "Holder verification is not available yet." }, { status: 503, headers });
  const auth = request.headers.get("authorization");
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : undefined;
  const result = await verifyHolder(token);
  const jar = await cookies();
  if (result.status !== "verified") {
    jar.delete(HOLDER_COOKIE);
    return Response.json({ error: result.status === "not-holder" ? "This wallet does not meet the SWIM holding requirement." : result.status === "unauthenticated" ? "Wallet sign-in could not be verified. Please sign in again." : "Balance verification is temporarily unavailable. Please try again." }, { status: result.status === "unavailable" ? 503 : 403, headers });
  }
  jar.set(HOLDER_COOKIE, token!, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 600 });
  return Response.json({ verified: true }, { headers });
}
export async function GET() {
  const result = await currentHolder();
  return Response.json({ status: result.status }, { status: result.status === "verified" ? 200 : result.status === "unavailable" ? 503 : 401, headers });
}
export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return Response.json({ error: "Request origin not allowed." }, { status: 403, headers });
  (await cookies()).delete(HOLDER_COOKIE);
  return Response.json({ signedOut: true }, { headers });
}
