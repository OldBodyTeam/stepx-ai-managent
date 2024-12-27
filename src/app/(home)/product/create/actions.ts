"use server";

import {
  DefaultApi,
  Configuration,
  AdminCreateCreateRequest,
} from "@/services";

const api = new DefaultApi(
  new Configuration({ basePath: "http://47.100.116.254:8084" })
);
const createTodo = async (params: AdminCreateCreateRequest) => {
  console.log(params);
  api.adminCreateCreate(params).then((response) => {
    console.log(response.data);
  });
};
export { createTodo };
