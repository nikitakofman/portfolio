import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nikita Kofman - Web Developer based in France",
  description:
    "Experience the charm of the French Riviera at Villa Palmire, an exquisite guest house nestled in the village of La Turbie. Enjoy luxurious amenities, breathtaking views, and a tranquil escape.",
  openGraph: {
    title: "Villa Palmire - Elegant Guest House in La Turbie, France",
    description:
      "Discover Villa Palmire in La Turbie, France. Our guest house offers a serene retreat with stunning views, elegant rooms, and easy access to Monaco and the Riviera.",
    url: "https://www.villadepalmire.com",
    images: [
      {
        url: "https://www.villadepalmire.com/vpweb.webp",
        width: 800,
        height: 600,
        alt: "Villa Palmire Home Page",
      },
    ],
    siteName: "Villa Palmire - Luxurious Stay in La Turbie",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" style={{ fontFamily: "Jost" }}>
      <body className="">{children}</body>
    </html>
  );
}
