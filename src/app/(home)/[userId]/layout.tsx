import { FC, PropsWithChildren } from "react";
import Menu from "@/components/menu/Menu";
import Nav from "@/components/nav/Nav";
import RightListProducts from "@/components/right-list-products/RightListProducts";
import RightLogo from "@/components/right-logo/RightLogo";
import Image from "next/image";

import Operation from "@/components/operation/operation";

const Layout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="w-screen h-screen box-border px-16 pt-16 flex bg-EDEDED relative">
      <div
        className="bg-no-repeat bg-left-top bg-[length:370px_370px] absolute top-0 right-0 w-370 h-370"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/bg.png)`,
        }}
      ></div>

      <div className="w-full h-full flex relative z-10">
        <div className="w-192 bg-222222 rounded-16 p-16 flex flex-col relative mb-16">
          <div className="absolute top-0 right-0 z-50">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/menu-top.png`}
              alt="logo-menu"
              width={124}
              height={32}
              className="w-auto h-auto aspect-square"
              priority={false}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="mb-24">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo-menu.png`}
              alt="logo-menu"
              width={124}
              height={32}
            />
          </div>
          <Menu />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 px-24 flex flex-col">
            <Nav />
            {children}
          </div>
          <div className="w-250 flex flex-col">
            <div className="w-[250px] flex justify-end items-center mb-20 mt-15 h-55 ">
              <Operation />
            </div>
            <RightLogo />
            <div className="font-bold text-12 text-101010 leading-27 mb-16 mt-24">
              Popular
            </div>
            <RightListProducts />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
