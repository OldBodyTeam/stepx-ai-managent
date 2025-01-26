"use client";
import { FC, PropsWithChildren, ReactNode, useMemo, useState } from "react";
import Title, { TitleProps } from "./Title";
import { Progress, Select } from "antd";
import InputBase, { InputBaseProps } from "./Input";
import { useMemoizedFn } from "ahooks";
import { Input as AntInput } from "antd";
import Image from "next/image";
export type LabelProgressProps = {
  title?: ReactNode;
  base: number;
  type?: string;
} & TitleProps &
  InputBaseProps;
const LabelProgress: FC<PropsWithChildren<LabelProgressProps>> = (props) => {
  const {
    title,
    explain,
    value = "",
    onChange,
    placeholder,
    base = 60,
    type = "input",
  } = props;
  const [text, setText] = useState(value);
  const handleChange = useMemoizedFn((str: string) => {
    setText(str);
    onChange?.(str);
  });
  const percent = useMemo(() => {
    return Math.floor((text.length / base) * 100);
  }, [base, text.length]);
  return (
    <div className="flex flex-1  flex-col w-full space-y-10">
      <div className="w-full flex items-center flex-1 justify-between">
        <Title explain={explain}>{title}</Title>
        <div className="flex items-center">
          <div className="text-o16 text-xs14 mr-8">
            {text.length}/{base}
          </div>
          <Progress
            percent={percent}
            className={"!w-160"}
            showInfo={false}
            trailColor={"#F5F5F5"}
            strokeColor={{ from: "#FADB14", to: "#D0FF71" }}
          />
        </div>
      </div>

      {type === "input" ? (
        <InputBase
          placeholder={placeholder}
          value={text || value}
          onChange={handleChange}
        />
      ) : null}
      {type === "textarea" ? (
        <AntInput.TextArea
          placeholder={placeholder}
          value={text || value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(e.target.value)
          }
          className={"!resize-none  !min-h-100"}
        />
      ) : null}
      {type === "select" ? (
        <Select
          options={[]}
          mode="tags"
          defaultOpen={false}
          tagRender={(props) => {
            return (
              <div className="bg-D0FF71 px-10 py-4 rounded-25 text-xs12 text-101010 font-medium flex items-center mx-2">
                {props.value}
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/rate/close.png`}
                  width={10}
                  height={10}
                  alt="close"
                  className="ml-2"
                />
              </div>
            );
          }}
          dropdownStyle={{ display: "none" }}
          suffixIcon={null}
          maxTagCount="responsive"
          onChange={handleChange}
          size="large"
          value={
            Array.isArray(value) ? (value as string) : ([] as unknown as string)
          }
        />
      ) : null}
    </div>
  );
};
export default LabelProgress;
