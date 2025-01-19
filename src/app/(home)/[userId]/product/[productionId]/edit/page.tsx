import ProductEdit from "@/server-components/proction-edit/edit-proction";
import {
  getColorList,
  getCategoryList,
  getPaymentPlanListCreate,
  getProductDetailCreate,
} from "./actions";
import {
  CategoryListCreate200ResponseData,
  CoverColorListCreate200ResponseData,
  PaymentPlanListCreate200ResponseData,
  ProductDetailCreate200ResponseData,
} from "@/services";
import { Suspense } from "react";

const ProductEditEntry = async ({ params }: any) => {
  const { productionId } = await params;
  const data = await Promise.all([
    getColorList(),
    getCategoryList(),
    getPaymentPlanListCreate(),
    getProductDetailCreate(productionId),
  ]);
  const [colorList, categoryList, paymentPlanListData, editFormData] = data.map(
    (v) => {
      return v.data;
    }
  );
  console.log(editFormData);
  return (
    <Suspense>
      <ProductEdit
        colorList={(colorList as CoverColorListCreate200ResponseData).items}
        paymentPlanListData={
          (paymentPlanListData as CategoryListCreate200ResponseData).items
        }
        categoryList={
          (categoryList as PaymentPlanListCreate200ResponseData).items
        }
        editFormData={editFormData as ProductDetailCreate200ResponseData}
      />
    </Suspense>
  );
};
export default ProductEditEntry;
