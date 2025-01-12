import ProductCreate from "@/server-components/proction-create/create-proction";
import { getColorList, getCategoryList } from "./actions";
import { Suspense } from "react";

const ProductCreateEntry = async () => {
  const { data } = await getColorList();
  const { data: categoryListData } = await getCategoryList();
  return (
    <Suspense fallback="loading">
      <ProductCreate
        colorList={data?.items ?? []}
        categoryList={categoryListData?.items ?? []}
      />
    </Suspense>
  );
};
export default ProductCreateEntry;
