import "./globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });

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
        <main className={`${montserrat.className} antialiased`}>
          {children}
        </main>
      </body>
    </html>
  );
}
