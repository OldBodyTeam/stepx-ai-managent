import ProductList from "@/components/content/Content";
import { getProductList } from "./actions";

const Page = async ({ params }: any) => {
  const { userId } = await params;
  const page = 1;
  const page_size = 20;
  const data = await getProductList({ page, page_size });
  return (
    <ProductList
      userId={userId}
      list={data?.items ?? []}
      hasMore={data?.has_more ?? false}
      page={page}
      pageSize={page_size}
    />
  );
};
export default Page;
