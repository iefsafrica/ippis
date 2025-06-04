import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "testing ",
  description:
    "testing",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="relative w-full">{children}</div>;
}
