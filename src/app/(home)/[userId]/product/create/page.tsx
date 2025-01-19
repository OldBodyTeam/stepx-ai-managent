import ProductCreate from "@/server-components/proction-create/create-proction";
import {
  getColorList,
  getCategoryList,
  getPaymentPlanListCreate,
} from "./actions";
import { Suspense } from "react";
export const dynamic = "force-static";
const ProductCreateEntry = async () => {
  const { data } = await getColorList();
  const { data: categoryListData } = await getCategoryList();
  const { data: paymentPlanListData } = await getPaymentPlanListCreate();
  console.log("********", data);
  return (
    <Suspense fallback="loading">
      <ProductCreate
        colorList={data?.items ?? []}
        categoryList={categoryListData?.items ?? []}
        paymentPlanListData={paymentPlanListData?.items ?? []}
      />
    </Suspense>
  );
};
export default ProductCreateEntry;
