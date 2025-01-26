"use client";
import { FC, useEffect, useState } from "react";
import ListEmpty from "../empty/ListEmpty";
import FilterTitle from "./FilterTitle";
import List from "./List";
import { ProductListCreate200ResponseDataItemsInner } from "@/services";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "antd";
import { unionBy } from "lodash";
import { useMemoizedFn, useRequest } from "ahooks";
import { getProductList } from "@/app/(home)/[userId]/product/actions";
export interface ProductListProps {
  userId?: string;
  list?: ProductListCreate200ResponseDataItemsInner[];
  hasMore: boolean;
  page: number;
  pageSize: number;
}
const ProductList: FC<ProductListProps> = (props) => {
  const { list = [], hasMore, page, pageSize, userId } = props;
  const [rows, setRows] = useState(pageSize);
  const [limit, setLimit] = useState(page + 1);
  // const [list, setList] = useState<StatsPopularCreate200ResponseDataItemsInner[]>(
  const { run: loadMoreData, data } = useRequest(
    (page = limit, page_size = rows) => getProductList({ page, page_size }),
    {
      manual: true,
      onSuccess: () => {
        setLimit((prev) => prev + 1);
        setRows(pageSize);
      },
    }
  );
  const [listData, setListData] =
    useState<ProductListCreate200ResponseDataItemsInner[]>(list);
  useEffect(() => {
    setListData((prev) => unionBy(prev.concat(data?.items ?? []), "id"));
  }, [data?.items]);
  const refresh = useMemoizedFn(() => {
    setListData([]);
    loadMoreData(1, pageSize);
  });
  return listData.length > 0 ? (
    <div className="pb-16 flex flex-col flex-1 overflow-hidden">
      <FilterTitle />
      <div
        id="scrollableDiv"
        className="overflow-y-auto overflow-x-hidden scrollbar-none flex-1"
      >
        <InfiniteScroll
          dataLength={listData.length}
          hasMore={data?.has_more ?? hasMore}
          scrollableTarget="scrollableDiv"
          next={loadMoreData}
          loader={
            <Skeleton avatar paragraph={{ rows: 1 }} active className="mt-16" />
          }
          endMessage={<></>}
        >
          <div className="grid desktop12:grid-cols-2 desktop14:grid-cols-3 desktop19:grid-cols-4 gap-16">
            {listData.map((item) => {
              return (
                <div key={item.id}>
                  <List item={item} refresh={refresh} />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center w-full h-full flex-1">
      <ListEmpty userId={userId} />
    </div>
  );
};
export default ProductList;
