"use server";

import { AdminResetPasswordCreateRequest } from "@/services";
import api from "@/utils/service";

const restPassword = async (
  params: Partial<AdminResetPasswordCreateRequest>
) => {
  return api
    .adminResetPasswordCreate(params as AdminResetPasswordCreateRequest)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { restPassword };
