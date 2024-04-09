import { Sidebar } from "@/components";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ezequiel Perez Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${inter.className} antialiased`}>{children}</main>
      </body>
    </html>
  );
}
