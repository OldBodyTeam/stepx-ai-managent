"use client";

import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { useMemoizedFn } from "ahooks";
import {
  ProductListCreateRequestSortFieldEnum,
  ProductListCreateRequestSortOrderEnum,
} from "@/services";
const items: MenuProps["items"] = [
  {
    key: `${ProductListCreateRequestSortFieldEnum.CreateTime}-${ProductListCreateRequestSortOrderEnum.Asc}`,
    label: "创建时间升序",
  },
  {
    key: `${ProductListCreateRequestSortFieldEnum.CreateTime}-${ProductListCreateRequestSortOrderEnum.Desc}`,
    label: "创建时间降序",
  },
  {
    key: `${ProductListCreateRequestSortFieldEnum.UpdateTime}-${ProductListCreateRequestSortOrderEnum.Asc}`,
    label: "更新时间升序",
  },
  {
    key: `${ProductListCreateRequestSortFieldEnum.UpdateTime}-${ProductListCreateRequestSortOrderEnum.Desc}`,
    label: "更新时间降序",
  },
];
const FilterTitle: FC<{
  onChange?: (
    sort_field: ProductListCreateRequestSortFieldEnum,
    sort_order: ProductListCreateRequestSortOrderEnum
  ) => void;
}> = (props) => {
  const { onChange } = props;
  const [text, setText] = useState("Sort Order");
  const handleSelected = useMemoizedFn((a) => {
    const item = items.find((i) => i?.key === a.key) as unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [sort_field, sort_order] = a.key.split("-");
    onChange?.(sort_field, sort_order);
    console.log(item);
    setText((item as any).label);
  });
  return (
    <div className="flex items-start justify-between w-full mb-16">
      <div className="font-bold leading-27 text-18 text-101010">
        Product List
      </div>
      <div className="text-o16">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: [
              `${ProductListCreateRequestSortFieldEnum.UpdateTime}-${ProductListCreateRequestSortOrderEnum.Desc}`,
            ],
            onClick: handleSelected,
          }}
        >
          <div className="flex items-center space-x-8">
            <div className="text-xs14 text-101010">{text}</div>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
export default FilterTitle;
