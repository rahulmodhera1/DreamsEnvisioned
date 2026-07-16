import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/chrome/GrainOverlay";
import { ViewfinderFrame } from "@/components/chrome/ViewfinderFrame";
import { Nav } from "@/components/chrome/Nav";
import { MotionProvider } from "@/components/chrome/MotionProvider";
import { getOgImage } from "@/lib/assets";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const ogImage = getOgImage();

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamsenvisioned.ca"),
  title: {
    default: "DreamsEnvisioned — Toronto & GTA Wedding Cinematography",
    template: "%s — DreamsEnvisioned",
  },
  description:
    "DreamsEnvisioned is a Toronto & GTA wedding cinematographer specializing in South Asian weddings — documentary storytelling shot for the way you'll actually remember the day.",
  keywords: [
    "Toronto wedding cinematographer",
    "GTA wedding videographer",
    "South Asian wedding film",
    "Indian wedding videography Toronto",
    "Punjabi wedding film",
    "cinematic wedding video",
  ],
  authors: [{ name: "DreamsEnvisioned" }],
  openGraph: {
    title: "DreamsEnvisioned — Toronto & GTA Wedding Cinematography",
    description:
      "Documentary-driven wedding films for South Asian weddings across the Greater Toronto Area.",
    url: "https://dreamsenvisioned.ca",
    siteName: "DreamsEnvisioned",
    locale: "en_CA",
    type: "website",
    ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ivory font-sans antialiased selection:bg-gold selection:text-ink">
        <MotionProvider>
          <GrainOverlay />
          <ViewfinderFrame />
          <Nav />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
