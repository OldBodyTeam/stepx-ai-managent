import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
const DocsLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-full flex items-center justify-between px-24 py-16">
        <Image src={"/adv/logi.png"} width={100} height={24} alt="logo" />
        <div className="space-x-8 flex items-center">
          <Link href={"/register"}>
            <div className="px-16 py-8 border-1 border-solid border-222222 text-xs14 font-medium text-222222 rounded-16 cursor-pointer">
              Log Up
            </div>
          </Link>
          <Link href={"/login"}>
            <div className="px-16 py-9 text-xs14 font-medium text-222222 rounded-16 bg-D0FF71 cursor-pointer">
              Log In
            </div>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};
export default DocsLayout;
