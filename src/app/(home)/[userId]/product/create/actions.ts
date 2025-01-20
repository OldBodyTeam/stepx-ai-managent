"use server";

import {
  ProductCreateCreateRequest,
  ProductUpdateCreateRequest,
} from "@/services";
import { tokenApi } from "@/utils/server-service";

const createProductList = async (params: ProductCreateCreateRequest) => {
  return tokenApi.productCreateCreate(params).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
const updateProductList = async (params: ProductUpdateCreateRequest) => {
  return tokenApi.productUpdateCreate(params).then((response) => {
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
    console.log(response.data);
    return response.data;
  });
};
const getPaymentPlanListCreate = async () => {
  return tokenApi.paymentPlanListCreate({}).then((response) => {
    return response.data;
  });
};
export {
  createProductList,
  getCategoryList,
  getColorList,
  getPaymentPlanListCreate,
  updateProductList,
};
