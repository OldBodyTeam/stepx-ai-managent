"use server";

import { ProductCreateCreateRequest } from "@/services";
import { tokenApi } from "@/utils/server-service";

const createTodo = async (params: ProductCreateCreateRequest) => {
  tokenApi.productCreateCreate(params).then((response) => {
    console.log(response.data);
  });
};
const getList = async () => {
  return tokenApi.categoryListCreate({}).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
export { createTodo, getList };
