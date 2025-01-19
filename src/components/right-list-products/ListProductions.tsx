"use client";
import { StatsPopularCreate200ResponseDataItemsInner } from "@/services";
import { FC, useMemo, useState } from "react";
import ProductItem from "./ProductItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider, List, Skeleton } from "antd";
import { useRequest } from "ahooks";
import { statsPopularCreate } from "@/app/(home)/[userId]/actions";
import { unionBy } from "lodash";
export interface ListProductionsProps {
  list: StatsPopularCreate200ResponseDataItemsInner[];
  hasMore: boolean;
  page: number;
  pageSize: number;
}
const ListProductions: FC<ListProductionsProps> = (props) => {
  const { list, hasMore, page, pageSize } = props;
  const [rows, setRows] = useState(pageSize);
  const [limit, setLimit] = useState(page + 1);
  // const [list, setList] = useState<StatsPopularCreate200ResponseDataItemsInner[]>(
  const { run: loadMoreData, data } = useRequest(
    () => statsPopularCreate({ page: limit, page_size: rows }),
    {
      manual: true,
      onSuccess: () => {
        setLimit((prev) => prev + 1);
        setRows(pageSize);
      },
    }
  );
  const listData = useMemo(() => {
    return unionBy(list.concat(data?.items ?? []), "id");
  }, [data?.items, list]);

  return (
    <div
      className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-none mb-16 rounded-16 bg-FFFFFF [&_div]:overflow-hidden"
      id="scrollableDiv"
    >
      <InfiniteScroll
        dataLength={listData.length}
        hasMore={data?.has_more ?? hasMore}
        scrollableTarget="scrollableDiv"
        next={loadMoreData}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
      >
        <List
          dataSource={listData}
          renderItem={(item, index) => {
            return (
              <List.Item key={item.id + ""} className="!p-0 !mx-16">
                <ProductItem {...item} poi={index} />
              </List.Item>
            );
          }}
        ></List>
      </InfiniteScroll>
    </div>
  );
};
export default ListProductions;
