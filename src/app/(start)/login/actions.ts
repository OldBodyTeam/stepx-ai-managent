import { AdminLoginCreateRequest } from "@/services";
import api from "@/utils/service";
// import { cookies } from "next/headers";

const loginAction = async (params: Partial<AdminLoginCreateRequest>) => {
  return api
    .adminLoginCreate(params as AdminLoginCreateRequest)
    .then(async (response) => {
      window.localStorage.setItem("token", response.data.data?.api_key ?? "");
      // const cookieStore = await cookies();
      // console.log(response.data.data?.api_key);
      // await cookieStore.set("token", response.data.data?.api_key ?? "");

      return response.data;
    });
};
export { loginAction };
