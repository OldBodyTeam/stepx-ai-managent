/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect, useMemo, useState } from "react";
import cls from "classnames";
import { Upload as UploadArco, UploadProps } from "@arco-design/web-react";
import Image from "next/image";
import { UploadItem } from "@arco-design/web-react/es/Upload";
import { Spin } from "antd";
import { uploadNoLimitCreateAction } from "@/app/(home)/[userId]/settings/actions";
import { useDebounceFn } from "ahooks";
const AntdUpload: FC<
  UploadProps & {
    text: string;
    value?: string[];
    onChange?: (v?: string[]) => void;
    showErrorMessage?: (response: any) => boolean;
    id?: string;
  } & { showClassName?: string }
> = (props) => {
  const {
    className,
    style,
    text,
    value = [] as string[],
    onChange,
    showClassName,
    showErrorMessage,
    id,
    ...rest
  } = props;
  const [urlList, setUrlList] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const { run: handleFileUpload } = useDebounceFn(
    (fileList: UploadItem[], file: UploadItem) => {
      setLoading(true);
      uploadNoLimitCreateAction(file.originFile as File)
        .then((data) => {
          const isValid = showErrorMessage?.(data);
          if (!isValid) {
            setLoading(false);
            return;
          }
          setUrlList((prev) => new Set([...prev, data?.data?.url ?? ""]));
          onChange?.(
            Array.from(new Set([...value, data?.data?.path ?? ""])) as string[]
          );
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  );

  const list = useMemo(() => {
    return Array.from(urlList);
  }, [urlList]);

  useEffect(() => {
    if (urlList.size === 0 && value.length !== 0) {
      setUrlList(new Set([...value]));
    }
  }, [urlList.size, value]);

  return (
    <div
      className="w-full h-full overflow-x-auto overflow-y-hidden space-x-12 flex items-center [&_.arco-upload-list]:!hidden"
      id={id}
    >
      {(list?.length ?? 0) > 0
        ? list?.map((item, index) => {
            return (
              <div
                className="!w-104 !h-104 min-w-104 overflow-hidden rounded-12 relative"
                key={item + "-" + index}
              >
                <img
                  src={item}
                  alt="add"
                  className="object-cover w-full h-full inline-block"
                />
              </div>
            );
          })
        : null}
      <UploadArco
        {...rest}
        className={cls(
          "!w-180 !h-full border-dashed rounded-12 !border-[1px] border-F0F0F0 flex items-center justify-center",
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
        multiple
      >
        <Spin
          spinning={loading}
          className="w-full h-full"
          rootClassName="w-full h-full"
        >
          <div
            className={cls(
              "flex items-center justify-center space-y-8 flex-col h-full w-full min-w-104",
              showClassName
            )}
          >
            <Image src={"/add-yellow.png"} width={24} height={24} alt="add" />
            <div className="text-xs12 text-101010">{text}</div>
          </div>
        </Spin>
      </UploadArco>
    </div>
  );
};
export default AntdUpload;
