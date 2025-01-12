"use server";

import { ProductCreateCreateRequest } from "@/services";
import { tokenApi } from "@/utils/server-service";

const createTodo = async (params: ProductCreateCreateRequest) => {
  tokenApi.productCreateCreate(params).then((response) => {
    console.log(response.data);
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
export { createTodo, getCategoryList, getColorList };
