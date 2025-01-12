import { FC, PropsWithChildren } from "react";
import SwiperClient from "./components/SwiperClient";
import Image from "next/image";
const RegisterLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="p-48 flex w-full h-full bg-EDEDED justify-center items-center relative">
      <div
        className="absolute left-0 top-0 w-373 h-370 bg-no-repeat z-0"
        style={{
          backgroundImage: "url(/register/left-bg.png)",
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className="w-504 h-504 rounded-504 bg-[rgba(208,255,113,0.3)] opacity-60 blur-[50px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-0"></div>
      <div className="w-[1280px] flex space-x-164 z-10">
        <div className="flex flex-col ">
          <Image
            src={"/login/login-logo.png"}
            alt="logo"
            width={156}
            height={40}
            className="mt-8"
          />
          {children}
        </div>

        <div
          className="w-540 p-48 bg-no-repeat"
          style={{
            backgroundImage: "url(/register/bg.png)",
            backgroundSize: "100% 100%",
          }}
        >
          <div>
            <div className="font-medium text-40 leading-60 text-FFFFFF">
              Real user
            </div>
            <div className="font-medium text-40 leading-60 text-FFFFFF">
              Reviews of StepxAi.
            </div>
            <div className="font-medium text-56 leading-80 text-FFFFFF">"</div>
            <SwiperClient />
          </div>
          <div
            className="w-full h-120 bg-no-repeat flex flex-col p-24 justify-end"
            style={{
              backgroundImage: "url(/register/bg-logo.png)",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="font-bold text-xs12 text-101010">
              You can put a relatively long advertisement area here, and it can
              display up to two lines of text at most.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterLayout;
