import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nikita Kofman - Web Developer based in France",
  description:
    "I'm Nikita Kofman, a Web Developer in France. Passionate about building digital solutions. Check out my portfolio and let's collaborate on your next project!",
  openGraph: {
    title: "Nikita Kofman - Web Developer based in France",
    description:
      "I'm Nikita Kofman, a Web Developer in France. Passionate about building digital solutions. Check out my portfolio and let's collaborate on your next project!",
    url: "https://www.nikitakofman.com",
    images: [
      {
        url: "https://www.nikitakofman.com/nkweb.webp",
        width: 800,
        height: 600,
        alt: "Nikita Kofman Home Page",
      },
    ],
    siteName: "Nikita Kofman - Web Developer based in France",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" style={{ fontFamily: "Jost" }}>
      <body className="">{children}</body>
    </html>
  );
}
