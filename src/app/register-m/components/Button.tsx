import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
export interface ButtonProps {
  className?: string;
  textClassName?: string;
}
const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={classNames(
        "py-20 rounded-63 w-480 flex items-center justify-center font-bold text-FFFFFF text-xs16 bg-222222 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Button;
