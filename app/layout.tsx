import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Theme from "@/lib/Providers/Theme";
import { AuthProvider } from "@/lib/Providers/Kinde";

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};
const inter = Inter({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Theme attribute={"class"} defaultTheme="dark" enableSystem>
            <main>{children}</main>
          </Theme>
        </body>
      </html>
    </AuthProvider>
  );
}
