import type { Metadata } from "next";
import "./dashboard.css";

export const metadata: Metadata = {
  title: "Holder dashboard | ai swim",
  description: "Your space for ai swim network updates, shows, community, and creative opportunities.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="holder-app">{children}</div>;
}
