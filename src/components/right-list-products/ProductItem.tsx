import { StatsPopularCreate200ResponseDataItemsInner } from "@/services";
import { formatNumber } from "@/utils/format";
import { Typography } from "antd";
import Image from "next/image";
import { FC } from "react";
const ProductItem: FC<
  StatsPopularCreate200ResponseDataItemsInner & { poi: number }
> = (props) => {
  const { product_name, subtitle, logo, total_views, poi } = props ?? {};
  return (
    <div className="space-y-8 bg-FFFFFF py-16 w-full">
      <div className="flex items-center justify-between">
        <div className="space-x-10 flex items-center">
          <div className="w-40 h-40 rounded-8 bg-D0FF71">
            <Image
              src={encodeURI(logo as unknown as string)}
              width={18}
              height={18}
              alt="logo"
            />
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4 items-center">
              <div className="text-222222 text-xs14 font-medium">
                {product_name as unknown as string}
              </div>
              <Image
                src="/yes-yellow.png"
                alt="yellow"
                width={14}
                height={14}
                className="ml-8"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <Image src="/adv/eye.png" alt="yellow" width={14} height={14} />
              <div className="text-xs12 text-222222 opacity-65">
                {formatNumber(total_views as unknown as number)}
              </div>
            </div>
          </div>
        </div>
        <div className="w-18 h-18 rounded-18 flex items-center justify-center border-1 border-solid bg-FAFAFB border-F0F0F0 font-medium text-6F6F6F text-9">
          {poi + 1}
        </div>
      </div>
      <div className="bg-E8E8E9 px-10 py-6 rounded-6 flex items-center">
        <Typography.Title
          className="!text-222222 opacity-80 !text-xs12 !my-0"
          ellipsis={{ rows: 1 }}
        >
          {subtitle as unknown as string}
        </Typography.Title>
      </div>
    </div>
  );
};
export default ProductItem;
