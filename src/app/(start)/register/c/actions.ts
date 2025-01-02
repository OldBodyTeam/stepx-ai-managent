"use server";

import { AdminCreateCreateRequest } from "@/services";
import api from "@/utils/service";

const createCUser = async (params: Partial<AdminCreateCreateRequest>) => {
  console.log(params);
  return api
    .adminCreateCreate({ ...params, mobile: "123" } as AdminCreateCreateRequest)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export { createCUser };
