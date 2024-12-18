"use client";
import { FC, CSSProperties } from "react";
import cls from "classnames";
import { Upload as UploadArco, UploadProps } from "@arco-design/web-react";
import Image from "next/image";
export interface InputProps {}
const Upload: FC<UploadProps & { text: string }> = (props) => {
  const { className, style, text, ...rest } = props;
  return (
    <UploadArco
      {...rest}
      className={cls(
        "!w-180 !h-136 border-dashed rounded-12 !border-[1px] border-F0F0F0",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-center space-y-8 flex-col h-136 ">
        <Image src={"/add-yellow.png"} width={24} height={24} alt="add" />
        <div className="text-xs12 text-101010">{text}</div>
      </div>
    </UploadArco>
  );
};
export default Upload;
