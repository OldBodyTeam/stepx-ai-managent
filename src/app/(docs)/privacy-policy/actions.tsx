"use server";

import { tokenApi } from "@/utils/server-service";

const getPrivacyListCreate = async () => {
  return tokenApi.privacyGetLevelsCreate({}).then((res) => res.data);
};
export { getPrivacyListCreate };
