"use client";

import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validatePassword } from "@/utils/validate";
import { loginAction } from "./actions";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { get } from "lodash";
import RadioVar from "../components/RadioVar";
import { useState } from "react";
import axios from "axios";
import { useSetAtom } from "jotai";
import { userIdAtom, userInfoCacheAtom } from "@/stores/userInfo";
import { Form, Input } from "antd";
const Login = () => {
  const [match, setMatch] = useState(false);
  const setUserId = useSetAtom(userIdAtom);
  const setUserInfo = useSetAtom(userInfoCacheAtom);
  const router = useRouter();
  const [form] = Form.useForm();
  const { contextHolder, showErrorMessage, messageApi } = useHandleResponse();
  const handleLogin = async () => {
    if (!match) {
      messageApi.open({
        type: "error",
        content: "Please agree to the terms of service and privacy policy",
      });
      return;
    }
    try {
      await form.validateFields();
      const userInput = form.getFieldsValue();
      const data = await loginAction(userInput);
      setUserId(data.data?.user_info?.id);
      setUserInfo({
        [get(data, "data.user_info.id", "")]: data.data?.user_info,
      });
      await axios.post("/api/token", { token: data.data?.api_key });
      const isValid = showErrorMessage(data as any);
      if (!isValid) {
        return;
      }
      messageApi.info("Login successful");
      router.push(
        `/${get(data, "data.user_info.id", "")}/product?user_id=${get(
          data,
          "data.user_info.id",
          ""
        )}`
      );
    } catch (e) {
      console.log(e);
      const list = get(e, "errors", {});
      const keys = Object.values(list);
      const error = get(keys, "0.message", "");
      messageApi.error("校验失败:" + error);
    }
  };
  return (
    <div className="w-480 mt-48">
      {contextHolder}
      <div className="mb-32 text-222222 font-medium text-xs14">
        Please fill in the following information to facilitate registration
      </div>
      <Form className="space-y-16" wrapperCol={{ span: 24 }} form={form}>
        <Form.Item
          rules={[{ required: true, message: "Please input your name" }]}
          name={"username"}
        >
          <Input
            placeholder="Enter one user name"
            prefix={
              <Image
                src="/register/user.png"
                alt="user"
                width={16}
                height={16}
              />
            }
            style={{ height: 48 }}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
            () => ({
              validator(_, value) {
                const data = validatePassword(value);
                if (!data) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(data));
              },
            }),
          ]}
          name={"password"}
        >
          <Input.Password
            placeholder="Please input a password"
            prefix={
              <Image
                src="/register/lock.png"
                alt="user"
                width={16}
                height={16}
              />
            }
            style={{ height: 48 }}
          />
        </Form.Item>
        <Link href={"/reset"}>
          <div className="flex justify-end mt-8 text-xs12 text-101010 cursor-pointer">
            Forgot Password
          </div>
        </Link>
      </Form>
      <RadioVar onChange={(e) => setMatch(e)} value={match} />
      <div className="space-y-16 mt-44">
        <Button onClick={handleLogin}>Sign In</Button>
        <Link href={"/register"} className="block">
          <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
