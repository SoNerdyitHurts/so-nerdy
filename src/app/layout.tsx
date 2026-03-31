import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "so-nerdy.dev — The Lab",
    template: "%s | The Lab",
  },
  description: "The lab is always running. Stability not guaranteed.",
};

const navItems = [
  { href: "/", label: "home" },
  { href: "/lab", label: "lab" },
  { href: "/completed", label: "completed" },
  { href: "/graveyard", label: "graveyard" },
  { href: "/this-site", label: "this-site" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#121417] text-[#E8E8EC]">
        <div className="min-h-screen relative overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ffffff 1px, transparent 1px),
                  linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at 20% 0%, rgba(0,229,255,0.08), transparent 28%), radial-gradient(circle at 100% 20%, rgba(255,138,0,0.08), transparent 24%), radial-gradient(circle at 60% 100%, rgba(122,92,255,0.08), transparent 30%)",
              }}
            />
          </div>

          <header className="sticky top-0 z-50 border-b border-white/10 bg-[#15181C]/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
              <div className="min-w-0">
                <Link
                  href="/"
                  className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D9D9E2]"
                >
                  so-nerdy.dev
                </Link>
              </div>

              <nav className="hidden items-center gap-2 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#B8B8C7] transition hover:border-[#7A5CFF]/40 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden text-right text-[11px] uppercase tracking-[0.22em] text-[#9AA0AE] lg:block">
                <div>status: live</div>
                <div>stability: questionable</div>
              </div>
            </div>

            <div className="border-t border-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#8E94A3] md:hidden">
              <div className="flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </header>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}