import { Configuration, DefaultApi } from "@/services";
import axios from "axios";
// import { cookies } from "next/headers";
const axiosInstance = axios.create({
  timeout: 10000,
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const api = new DefaultApi(
  new Configuration({
    basePath: "http://47.251.83.181:8084",
  })
  // "http://47.100.116.254:8084",
  // axiosInstance
);
// const tokenApi = new DefaultApi(
//   new Configuration({
//     basePath: "http://47.100.116.254:8084",
//     apiKey: async () => {
//       const cookieStore = await cookies();
//       const token = cookieStore.get("token")?.value;
//       console.log("token", token);
//       return token!;
//     },
//   })
// );
export default api;
// export { tokenApi };
