import { FC, PropsWithChildren } from "react";
import SwiperClient from "./components/SwiperClient";
import Image from "next/image";
const RegisterLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className="p-48 flex w-full h-full bg-EDEDED justify-center items-center">
      <div className="w-[1280px] flex space-x-164">
        <div className="flex flex-col">
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
            <div className="font-medium text-40 leading-60 text-FFFFFF mb-80">
              Real user Reviews of StepxAi.
            </div>
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
