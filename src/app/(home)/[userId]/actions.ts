"use server";

import { StatsPopularCreateRequest } from "@/services";
import { tokenApi } from "@/utils/server-service";

const adminInfoCreate = async () => {
  const response = await tokenApi.adminInfoCreate({});
  return response.data;
};
const statsPopularCreate = async (params: StatsPopularCreateRequest) => {
  const response = await tokenApi.statsPopularCreate(params);
  return response.data.data;
};
export { adminInfoCreate, statsPopularCreate };
