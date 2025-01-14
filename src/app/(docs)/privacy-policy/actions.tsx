"use server";

import { tokenApi } from "@/utils/server-service";

const getPrivacyListCreate = async () => {
  return tokenApi
    .privacyListCreate({ page: 0, page_size: 200 })
    .then((res) => res.data);
};
export { getPrivacyListCreate };
