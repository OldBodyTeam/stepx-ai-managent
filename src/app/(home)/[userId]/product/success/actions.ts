import { PaypalCompletePaymentCreateRequest } from "@/services";
import { paypalApi } from "@/utils/server-service";

const paySuccess = async (params: PaypalCompletePaymentCreateRequest) => {
  return paypalApi.paypalCompletePaymentCreate(params).then((res) => {
    return res.data.data;
  });
};
export { paySuccess };
