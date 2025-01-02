"use server";

import { AdminCreateCreateRequest } from "@/services";
import api from "@/utils/service";

const createBUser = async (params: Partial<AdminCreateCreateRequest>) => {
  console.log(params);
  return api
    .adminCreateCreate(params as AdminCreateCreateRequest)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export { createBUser };
