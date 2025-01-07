import { cookies } from "next/headers";
import { Configuration, DefaultApi } from "@/services";

const tokenApi = new DefaultApi(
  new Configuration({
    basePath: "http://47.100.116.254:8084",
    apiKey: async () => {
      if (typeof window !== "undefined") {
        return window.localStorage.getItem("token") || "";
      } else {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        return token!;
      }
    },
  })
);
export { tokenApi };
