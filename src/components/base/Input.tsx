"use client";
import { FC, CSSProperties } from "react";
import cls from "classnames";
import {
  Input as InputArco,
  InputProps as InputArcoProps,
} from "@arco-design/web-react";
export interface InputProps extends InputArcoProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: CSSProperties;
}
const Input: FC<InputProps> = (props) => {
  const { value, onChange, className, style, ...rest } = props;
  return (
    <InputArco
      {...rest}
      value={value}
      onChange={onChange}
      className={cls(
        "!py-10 !px-12 !text-xs12 !text-101010 !border-1 !border-F0F0F0 !rounded-12",
        className
      )}
      style={style}
    />
  );
};
export default Input;
