"use server";

import { tokenApi } from "@/utils/server-service";

const getAgreementListCreate = async () => {
  return tokenApi
    .agreementListCreate({ page: 0, page_size: 200 })
    .then((res) => res.data);
};
export { getAgreementListCreate };
