import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Renewal Reminder — Never Miss a Deadline",
  description: "AI-powered contract renewal tracking. Upload contracts, get email and SMS alerts before auto-renewal deadlines."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2305738e-6ff2-4e65-af20-3a56c7a998ef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
