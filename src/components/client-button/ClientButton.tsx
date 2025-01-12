"use client";

// import { useRouter } from "next/navigation";
import AnimationButton from "../animation-button/AnimationButton";
import { FC, PropsWithChildren } from "react";
export interface ClientButtonProps {
  path?: string;
}
const ClientButton: FC<PropsWithChildren<ClientButtonProps>> = (props) => {
  const { children } = props;
  // const router = useRouter();
  return (
    <AnimationButton className="font-medium text-222222 text-12 ml-4 flex-1 h-full">
      {/* <div onClick={() => router.push("/product/create")}>New Product</div> */}
      {children}
    </AnimationButton>
  );
};
export default ClientButton;
