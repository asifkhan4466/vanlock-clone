import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VanLock Security | Protect What Moves You",
  description: "Expert van locks, alarms and trackers fitted around you. Smart, reliable van security across London and beyond.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
