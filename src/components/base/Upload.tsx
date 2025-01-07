/* eslint-disable @next/next/no-img-element */
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
        "flex-1 !w-180 !h-full border-dashed rounded-12 !border-[1px] border-F0F0F0 flex items-center justify-center",
        "[&_.arco-upload-trigger]:!h-full",
        "[&_.arco-upload-trigger>div]:!h-full",
        "[&_.arco-upload-trigger>div>div]:!h-full",
        "[&_.arco-upload-trigger>div>div>div]:!h-full",
        className
      )}
      style={style}
      fileList={fileList}
      onChange={handleFileUpload}
      renderUploadList={() => null}
    >
      <Spin spinning={loading} className="h-full" rootClassName="h-full">
        {previewUrl ? (
          <div className="!w-180 !h-full overflow-hidden rounded-12 relative">
            <img
              src={previewUrl}
              alt="add"
              className="object-cover w-full h-full inline-block"
            />
            <div className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center text-101010 text-xs12 font-medium bg-D0FF71">
              Re-upload
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center space-y-8 flex-col h-full ">
            <Image src={"/add-yellow.png"} width={24} height={24} alt="add" />
            <div className="text-xs12 text-101010">{text}</div>
          </div>
        )}
      </Spin>
    </UploadArco>
  );
};
export default Upload;
