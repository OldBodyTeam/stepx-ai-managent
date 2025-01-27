import { PaypalCancelPaymentCreateRequest } from "@/services";
import { paypalApi } from "@/utils/server-service";

const payFail = async (params: PaypalCancelPaymentCreateRequest) => {
  return paypalApi.paypalCancelPaymentCreate(params).then((res) => {
    return res.data.data;
  });
};
export { payFail };
