/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect, useState } from "react";
import cls from "classnames";
import { Upload as UploadArco, UploadProps } from "@arco-design/web-react";
import Image from "next/image";
import { UploadItem } from "@arco-design/web-react/es/Upload";
import { Spin } from "antd";
import { uploadFileAction } from "@/app/(home)/[userId]/settings/actions";
import { useDebounceFn } from "ahooks";
const Upload: FC<
  UploadProps & {
    text: string;
    value?: string;
    onChange?: (v?: string) => void;
    showErrorMessage?: (response: any) => boolean;
    bgColor?: string;
  } & { showClassName?: string }
> = (props) => {
  const {
    className,
    style,
    text,
    onChange,
    showClassName,
    showErrorMessage,
    bgColor,
    value,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string>("");
  const { run: handleFileUpload } = useDebounceFn(
    (fileList: UploadItem[], file: UploadItem) => {
      setLoading(true);
      uploadFileAction(file.originFile as File)
        .then((data) => {
          const isValid = showErrorMessage?.(data);
          if (!isValid) {
            setLoading(false);
            return;
          }
          setUrl(data?.data?.url ?? "");
          onChange?.(data?.data?.path ?? "");
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  );

  useEffect(() => {
    if (!url && value) {
      setUrl(value);
    }
  }, [url, value]);

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
      showUploadList={false}
      onChange={handleFileUpload}
      renderUploadList={() => null}
      accept=".png"
      // beforeUpload={(file) => {
      //   const reader = new FileReader();
      //   // reader.onload = function fileReadCompleted() {
      //   //   const img = new (Image as any)(); // creates an <img> element
      //   //   img.src = reader.result; // loads the data URL as the image source
      //   //   img.onLoad = (e: any) => {
      //   //     console.log(e.target);
      //   //   };
      //   // };
      //   reader.readAsDataURL(file);
      //   return true;
      // }}
    >
      <Spin spinning={loading} className="h-full" rootClassName="h-full">
        {url ? (
          <div
            className="!w-180 !h-full overflow-hidden rounded-12 relative"
            style={{ backgroundColor: bgColor }}
          >
            <img
              src={url}
              alt="add"
              className="object-cover w-full h-full inline-block"
            />
            <div className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center text-101010 text-xs12 font-medium bg-D0FF71">
              Re-upload
            </div>
          </div>
        ) : (
          <div
            className={cls(
              "flex items-center justify-center space-y-8 flex-col h-full ",
              showClassName
            )}
          >
            <Image src={"/add-yellow.png"} width={24} height={24} alt="add" />
            <div className="text-xs12 text-101010">{text}</div>
          </div>
        )}
      </Spin>
    </UploadArco>
  );
};
export default Upload;
