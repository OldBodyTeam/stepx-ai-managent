"use server";

import { tokenApi } from "@/utils/server-service";

export const adminInfoCreate = async () => {
  const response = await tokenApi.adminInfoCreate({});
  return response.data;
};
