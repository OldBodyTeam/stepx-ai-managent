"use server";
import { tokenApi } from "@/utils/server-service";

const uploadFileAction = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return tokenApi
    .uploadCreate(file)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
};
export { uploadFileAction };
