import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
export interface ListEmptyProps {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  userId?: string;
}
const ListEmpty: FC<PropsWithChildren<ListEmptyProps>> = (props) => {
  const { className, style, width = 120, height = 120 } = props;
  return (
    <div
      className={classNames("flex items-center flex-col", className)}
      style={style}
    >
      <Image width={width} height={height} alt="empty" src={"/adv/empty.png"} />
      <div className="mt-16 text-xs14 font-semibold text-161B22">
        No Products Available
      </div>
      <div className="mt-6 text-xs12 text-4F5357">
        You haven&apos;t released a new product yet
      </div>
      <div className="mt-24 !bg-D0FF71 py-10 px-38 rounded-40 flex items-center justify-center cursor-pointer">
        <Link
          href={`product/create`}
          className="text-xs14 text-222222 font-medium"
        >
          Create Product
        </Link>
      </div>
    </div>
  );
};
export default ListEmpty;
