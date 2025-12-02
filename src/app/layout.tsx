import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divergentes Media Lab",
  description: "Historias visuales que conectan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}
