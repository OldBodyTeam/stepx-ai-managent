"use client";
import { Form, Input } from "@arco-design/web-react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { get } from "lodash";
import { restPassword } from "./actions";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { useRouter } from "next/navigation";
import {
  validateEmail,
  validateEmpty,
  validatePassword,
} from "@/utils/validate";
import { useMemoizedFn } from "ahooks";
import { message } from "antd";
const Reset = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { contextHolder, showErrorMessage, messageApi } = useHandleResponse();
  const handleReset = async () => {
    try {
      await form.validate();
      const userInput = form.getFields();
      const data = await restPassword(userInput);
      const isValid = showErrorMessage(data as any);
      if (!isValid) {
        return;
      }
      router.push("/login");
      message.info("Reset password successfully");
    } catch (e) {
      console.log(e);
      const list = get(e, "errors", {});
      const keys = Object.values(list);
      const error = get(keys, "0.message", "");
      messageApi.error("校验失败:" + error);
    }
  };
  const handleSendCode = useMemoizedFn(() => {
    console.log("send code");
  });
  return (
    <div className="w-480 mt-48">
      {contextHolder}
      <div className="mb-32 text-222222 font-medium text-xs14">
        Please fill in the following information to facilitate registration
      </div>
      <Form className="space-y-16" wrapperCol={{ span: 24 }} form={form}>
        <Form.Item rules={[{ validator: validateEmpty }]} field={"username"}>
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

        <Form.Item rules={[{ validator: validatePassword }]} field={"password"}>
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
        <Form.Item
          field={"confirm_password"}
          rules={[{ validator: validatePassword }]}
        >
          <Input.Password
            placeholder="Please confirm password"
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
        <Form.Item field={"email"} rules={[{ validator: validateEmail }]}>
          <Input
            placeholder="Please enter your email address"
            prefix={
              <Image
                src="/register/sms.png"
                alt="user"
                width={16}
                height={16}
              />
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Please enter the verification code"
            suffix={
              <div
                className="font-medium text-xs12 text-101010 decoration-solid underline cursor-pointer"
                onClick={handleSendCode}
              >
                Resend
              </div>
            }
            prefix={
              <Image
                src="/register/tick.png"
                alt="user"
                width={16}
                height={16}
              />
            }
          />
        </Form.Item>
      </Form>
      <div className="space-y-16 mt-44">
        <Button onClick={handleReset}>Confirm</Button>
        <Link href={"/login"} className="block">
          <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
            Previous Step
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Reset;
