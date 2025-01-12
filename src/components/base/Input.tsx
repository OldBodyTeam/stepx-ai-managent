"use client";
import { FC, CSSProperties } from "react";
import cls from "classnames";
import { Input, InputProps } from "antd";
export interface InputBaseProps extends Omit<InputProps, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: CSSProperties;
}
const InputBase: FC<InputBaseProps> = (props) => {
  const { value, onChange, className, style, ...rest } = props;
  return (
    <Input
      {...rest}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange?.(e.target.value)
      }
      className={cls(className)}
      style={style}
    />
  );
};
export default InputBase;
