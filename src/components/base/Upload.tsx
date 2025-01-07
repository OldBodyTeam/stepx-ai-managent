"use client";
import { FC, useEffect, useState } from "react";
import cls from "classnames";
import { Upload as UploadArco, UploadProps } from "@arco-design/web-react";
import Image from "next/image";
import { UploadItem } from "@arco-design/web-react/es/Upload";
import { uploadFileAction } from "@/app/(home)/settings/actions";
import { Spin } from "antd";
const Upload: FC<
  UploadProps & {
    text: string;
    value?: string;
    onChange?: (v?: string) => void;
  }
> = (props) => {
  const { className, style, text, value, onChange, ...rest } = props;
  const [fileList, setFileList] = useState<UploadItem[]>([]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFileUpload = (fileList: UploadItem[], file: UploadItem) => {
    setFileList(fileList);
    setLoading(true);
    uploadFileAction(file.originFile as File)
      .then((data) => {
        setPreviewUrl(data.data?.url ?? "");
        onChange?.(data.data?.url ?? "");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (value) {
      setPreviewUrl(value);
    }
  }, [value]);
  return (
    <UploadArco
      {...rest}
      className={cls(
        "!w-180 !h-136 border-dashed rounded-12 !border-[1px] border-F0F0F0",
        className
      )}
      style={style}
      fileList={fileList}
      onChange={handleFileUpload}
      renderUploadList={() => null}
    >
      <Spin spinning={loading}>
        {previewUrl ? (
          <div className="!w-180 !h-136 overflow-hidden rounded-12 relative">
            <Image
              src={previewUrl}
              alt="add"
              width={180}
              height={136}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center text-101010 text-xs12 font-medium bg-D0FF71">
              Re-upload
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center space-y-8 flex-col h-136 ">
            <Image src={"/add-yellow.png"} width={24} height={24} alt="add" />
            <div className="text-xs12 text-101010">{text}</div>
          </div>
        )}
      </Spin>
    </UploadArco>
  );
};
export default Upload;
