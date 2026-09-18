import { redirect } from "next/navigation";
import { currentHolder } from "@/lib/holders/server";
import { HolderDashboard } from "@/components/dashboard/holder-dashboard";
import { HolderSession } from "@/components/dashboard/holder-session";

export const dynamic = "force-dynamic";
export default async function MemberDashboard() {
  const result = await currentHolder();
  if (result.status !== "verified") redirect("/dashboard");
  return <HolderSession><HolderDashboard wallet={result.wallet} /></HolderSession>;
}
