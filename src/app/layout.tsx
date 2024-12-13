import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "./components/menu/Menu";
import Nav from "./components/nav/Nav";
import RightLogo from "./components/right-logo/RightLogo";
import RightListProducts from "./components/right-list-products/RightListProducts";

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-bold",
  weight: "700",
});
const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
  weight: "500",
});
const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppinsBold.variable} ${poppinsMedium.variable} ${poppinsRegular.variable}`}
    >
      <body>
        <div className="w-screen h-screen box-border p-16 flex bg-EDEDED">
          <div className="w-192 bg-222222 rounded-16 h-full p-16 flex flex-col">
            <div>logo</div>
            <Menu />
          </div>
          <div className="flex-1">
            <Nav />
            <div className="flex h-full">
              <div className="flex-1 px-40">{children}</div>
              <div className="w-250 flex flex-col">
                <RightLogo />
                <div className="font-bold text-18 text-101010 leading-27 mb-24 mt-40">
                  Like Products
                </div>
                <RightListProducts />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
