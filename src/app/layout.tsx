import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Instagram Clone",
  description: "A layout clone of Instagram using Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <main>{children}</main>
      </body>
    </html>
  );
}
