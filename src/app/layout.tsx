import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./_components/navs/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "FullStack App",
  description: "Full Stack JS",
  icons: [{ rel: "icon", url: "/favicon-windows-32.ico", sizes: "60x60" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`font-sans ${inter.variable} bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`}
    >
      <body>
        <TRPCReactProvider>
          <NavBar />
          <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {children}
            {/* <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
              {children}
            </div> */}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
