"use client";
import { FC, PropsWithChildren, ReactNode } from "react";
import cls from "classnames";
import { Tooltip } from "@arco-design/web-react";
export type TitleProps = {
  className?: string;
  explain?: ReactNode;
};
const Title: FC<PropsWithChildren<TitleProps>> = (props) => {
  const { children, className, explain } = props;
  return (
    <div
      className={cls(
        "text-xs12 font-bold text-101010 flex items-center",
        className
      )}
    >
      {children}
      {explain ? (
        <div className="ml-6">
          <Tooltip content={explain}>tips</Tooltip>
        </div>
      ) : null}
    </div>
  );
};
export default Title;
