import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: {
      default: "Oscar Gaviria | Desarrollador .NET",
      template: "%s | Oscar Gaviria",
    },
    description:
      "Portafolio de Oscar David Gaviria Martínez, desarrollador .NET con experiencia en backend, datos y soluciones empresariales.",
    keywords: [
      "Oscar Gaviria",
      "Desarrollador .NET",
      "ASP.NET Core",
      "C#",
      "Backend",
      "PostgreSQL",
      "Colombia",
    ],
    authors: [{ name: "Oscar David Gaviria Martínez" }],
    openGraph: {
      type: "website",
      locale: "es_CO",
      title: "Oscar Gaviria | Desarrollador .NET",
      description: "Software con propósito, datos bien estructurados y visión de negocio.",
      images: [{ url: socialImage, width: 1733, height: 907, alt: "Oscar Gaviria, desarrollador .NET" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Oscar Gaviria | Desarrollador .NET",
      description: "Software con propósito, datos bien estructurados y visión de negocio.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
