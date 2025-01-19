"use server";

import { tokenApi } from "@/utils/server-service";

const getAgreementListCreate = async () => {
  return tokenApi.agreementGetLevelsCreate({}).then((res) => res.data);
};
export { getAgreementListCreate };
