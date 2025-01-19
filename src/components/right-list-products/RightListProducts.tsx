import { statsPopularCreate } from "@/app/(home)/[userId]/actions";
import ListProductions from "./ListProductions";

const RightListProducts = async () => {
  const list = await statsPopularCreate({ page: 1, page_size: 20 });
  return (
    <ListProductions
      list={list?.items ?? []}
      hasMore={list?.has_more ?? false}
      page={1}
      pageSize={20}
    />
  );
};
export default RightListProducts;
