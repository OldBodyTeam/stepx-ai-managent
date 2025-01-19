import { cookies } from "next/headers";
import { Configuration, DefaultApi } from "@/services";
import axios from "axios";
import { redirect } from "next/navigation";
// import { message } from "antd";
// import { cookies } from "next/headers";
const axiosInstance = axios.create({
  timeout: 10000,
});
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.code === 500 && response.data.msg.includes("API")) {
      console.log("service", response.data);
      // message.error(response.data.msg);
      redirect("/login");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const tokenApi = new DefaultApi(
  new Configuration({
    basePath: "http://47.251.83.181:8084",
    apiKey: async () => {
      if (typeof window !== "undefined") {
        return window.localStorage.getItem("token") || "";
      } else {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        console.log("token", token);
        return token!;
      }
    },
  }),
  "http://47.251.83.181:8084",
  axiosInstance
);
export { tokenApi };
