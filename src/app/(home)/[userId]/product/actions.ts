"use server";

import {
  FrontProductDetailCreateRequest,
  ProductListCreateRequest,
} from "@/services";
import { tokenApi } from "@/utils/server-service";

const getProductList = async (params: ProductListCreateRequest) => {
  return tokenApi.productListCreate(params).then((response) => {
    console.log(response.data);
    return response.data.data;
  });
};
const deleteProductItem = async (params: FrontProductDetailCreateRequest) => {
  return tokenApi.productDeleteCreate(params).then((response) => {
    console.log(response.data);
    return response.data.data;
  });
};
export { getProductList, deleteProductItem };
