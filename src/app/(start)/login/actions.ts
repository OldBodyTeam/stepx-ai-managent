"use server";

import { AdminLoginCreateRequest } from "@/services";
import api from "@/utils/service";
import { cookies } from "next/headers";

const loginAction = async (params: Partial<AdminLoginCreateRequest>) => {
  return api
    .adminLoginCreate(params as AdminLoginCreateRequest)
    .then(async (response) => {
      const cookieStore = await cookies();
      await cookieStore.set("token", response.data.data?.token ?? "");
      return response.data;
    });
};
export { loginAction };
