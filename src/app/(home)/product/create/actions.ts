"use server";

import {
  DefaultApi,
  Configuration,
  ProductCreateCreateRequest,
} from "@/services";

const api = new DefaultApi(
  new Configuration({ basePath: "http://47.100.116.254:8084" })
);
const createTodo = async (params: ProductCreateCreateRequest) => {
  console.log(params);
  api.productCreateCreate(params).then((response) => {
    console.log(response.data);
  });
};
export { createTodo };
