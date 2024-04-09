import "./globals.css";
import { montserrat } from "@/assets/fonts";

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
