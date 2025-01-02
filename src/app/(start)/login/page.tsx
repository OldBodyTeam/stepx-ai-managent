"use client";

import { Form, Input } from "@arco-design/web-react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validateEmpty, validatePassword } from "@/utils/validate";
import { loginAction } from "./actions";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { get } from "lodash";
import RadioVar from "../components/RadioVar";
import { useState } from "react";
import { message } from "antd";
const Login = () => {
  const [match, setMatch] = useState(false);
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
      await form.validate();
      const userInput = form.getFields();
      const data = await loginAction(userInput);
      const isValid = showErrorMessage(data as any);
      if (!isValid) {
        return;
      }
      router.push("/production");
      message.info("Login successful");
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
          field={"username"}
          required
          rules={[{ validator: validateEmpty }]}
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
          />
        </Form.Item>
        <Form.Item
          field={"password"}
          required
          rules={[{ validator: validatePassword }]}
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
          />
        </Form.Item>
        <div className="flex justify-end mt-8 text-xs12 text-101010 cursor-pointer">
          <Link href={"/reset"}>Forgot Password</Link>
        </div>
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
