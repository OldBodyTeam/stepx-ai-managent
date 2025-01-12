import { FC, PropsWithChildren, ReactNode } from "react";
import cls from "classnames";
import { Tooltip } from "antd";
import Image from "next/image";
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
        <div className="ml-6 cursor-pointer">
          <Tooltip title={explain}>
            <Image src="/rate/hover.png" width={14} height={14} alt="logo" />
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
};
export default Title;
