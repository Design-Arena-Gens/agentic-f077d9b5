import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "GRUPO MAYIN | Express 24/7",
  description:
    "MAYIN EXPRESS: entregas a domicilio 24/7 en Zaragoza, Puebla y alrededores. Tu aliado local para recibir cualquier producto cuando lo necesites.",
  metadataBase: new URL("https://agentic-f077d9b5.vercel.app"),
  openGraph: {
    title: "MAYIN EXPRESS | Entregas 24/7 en Zaragoza",
    description:
      "El servicio de entregas a domicilio 24/7 de GRUPO MAYIN para Zaragoza y municipios cercanos.",
    url: "https://agentic-f077d9b5.vercel.app",
    siteName: "Grupo Mayin",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAYIN EXPRESS | Entregas 24/7",
    description:
      "Tus pedidos de cualquier tienda de Zaragoza y municipios cercanos, en minutos y a cualquier hora.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
