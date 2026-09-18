import type { Metadata } from "next";
import "./dashboard.css";

export const metadata: Metadata = {
  title: "Holder dashboard | ai swim",
  description: "Follow the development of the ai swim network. Holder access is in development.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="holder-app">{children}</div>;
}
