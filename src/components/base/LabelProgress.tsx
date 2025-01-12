"use client";
import { FC, PropsWithChildren, ReactNode, useMemo, useState } from "react";
import Title, { TitleProps } from "./Title";
import { Progress } from "@arco-design/web-react";
import InputBase, { InputBaseProps } from "./Input";
import { useMemoizedFn } from "ahooks";
import { Input as AntInput } from "antd";
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
            className={"!w-160 h-8"}
            showText={false}
          />
        </div>
      </div>

      {type === "input" ? (
        <InputBase
          placeholder={placeholder}
          value={text || value}
          onChange={handleChange}
        />
      ) : (
        <AntInput.TextArea
          placeholder={placeholder}
          value={text || value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(e.target.value)
          }
          className={"!resize-none  !min-h-100"}
        />
      )}
    </div>
  );
};
export default LabelProgress;
