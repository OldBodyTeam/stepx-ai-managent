"use server";

import { tokenApi } from "@/utils/server-service";

const getProductDetailCreate = async (id: number) => {
  return tokenApi.productDetailCreate({ id }).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
const getCategoryList = async () => {
  return tokenApi.categoryListCreate({}).then((response) => {
    return response.data;
  });
};
const getColorList = async () => {
  return tokenApi.coverColorListCreate({}).then((response) => {
    return response.data;
  });
};
const getPaymentPlanListCreate = async () => {
  return tokenApi.paymentPlanListCreate({}).then((response) => {
    return response.data;
  });
};
export {
  getProductDetailCreate,
  getCategoryList,
  getColorList,
  getPaymentPlanListCreate,
};
