/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import AnimationButton from "../animation-button/AnimationButton";
import { FC } from "react";
import { ProductListCreate200ResponseDataItemsInner } from "@/services";
import Link from "next/link";
import ProductDelete from "../modal/ProductDelete";
const List: FC<{
  item: ProductListCreate200ResponseDataItemsInner;
  refresh: () => void;
}> = (props) => {
  const { item, refresh } = props;
  return (
    <div className="bg-FFFFFF border-1 border-E8E8E9 p-16 rounded-16">
      <div className="mb-16 flex items-center">
        <div
          className=" w-44 h-44 mr-8 rounded-11"
          style={{ backgroundColor: item.background_color }}
        >
          <img src={item.logo} alt="yellow" width={44} height={44} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="text-xs16 text-222222 font-medium flex items-center">
              {item.title}
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/yes-yellow.png`}
                alt="yellow"
                width={14}
                height={14}
                className="ml-4"
              />
            </div>
            <div className="flex items-center space-x-6 cursor-pointer">
              <ProductDelete
                id={item.id}
                name={item.product_name}
                refresh={refresh}
              />
              <Link href={`product/${item.id}/edit`}>
                <div className="text-xs12 text-o34">Edit</div>
              </Link>
            </div>
          </div>
          <div className="line-clamp-1 text-xs12 text-o34">
            {item.description}
          </div>
        </div>
      </div>
      <div className="rounded-8 bg-o232 p-12 mb-16">
        <div className="flex items-center">
          <div className="border-r-[1px] border-F0F0F0 border-b-[1px] flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-o34 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
          <div className="border-F0F0F0 border-b-[1px] flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-o34 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="border-r-[1px] border-F0F0F0 flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-o34 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center py-12">
            <div className="text-xs12 text-o34 mb-2">Release</div>
            <div className="text-xs14 font-medium text-222222">2024.12.03</div>
          </div>
        </div>
      </div>
      <AnimationButton className="h-44 rounded-44 w-full bg-D0FF71 flex items-center justify-center py-12 font-medium  text-222222 text-xs14 cursor-pointer overflow-hidden flex-col relative">
        ReNew
      </AnimationButton>
    </div>
  );
};
export default List;
