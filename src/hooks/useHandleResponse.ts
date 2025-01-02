import { message } from "antd";
export interface ResponseErrorData {
  code: number;
  msg: string;
  data: any;
}
const useHandleResponse = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const showErrorMessage = (response: ResponseErrorData) => {
    if (response.code === 500) {
      messageApi.error(response.msg);
      return false;
    }
    return true;
  };

  return { contextHolder, showErrorMessage, messageApi };
};
export { useHandleResponse };
