"use client";

import Button from "../../components/Button";
import Link from "next/link";
import Image from "next/image";
import { validateEmail, validatePassword } from "@/utils/validate";
import { useMemoizedFn } from "ahooks";
import { createCUser } from "./actions";
import { get } from "lodash";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { useRouter } from "next/navigation";
import { Form, Input } from "antd";
const CClient = () => {
  const [form] = Form.useForm<{
    username: string;
    password: string;
    confirm_password: string;
    email: string;
  }>();
  const router = useRouter();
  const { contextHolder, showErrorMessage, messageApi } = useHandleResponse();
  const handleRegisterCUser = useMemoizedFn(async () => {
    try {
      await form.validateFields();
      const userInput = form.getFieldsValue();
      if (userInput.password !== userInput.confirm_password) {
        messageApi.error("Passwords do not match");
      }
      const data = await createCUser({ ...form.getFieldsValue(), role_id: 1 });
      const isValid = showErrorMessage(data as any);
      if (!isValid) {
        return;
      }
      router.push("/login");
      messageApi.info("Registration successful");
    } catch (e) {
      console.log(e);
      const list = get(e, "errors", {});
      const keys = Object.values(list);
      const error = get(keys, "0.message", "");
      messageApi.error("校验失败:" + error);
    }
  });
  return (
    <div className="w-480 mt-48">
      {contextHolder}
      <div className="mb-32 text-222222 font-medium text-xs14">
        Please fill in the following information to facilitate registration
      </div>
      <Form
        className="space-y-16"
        wrapperCol={{ span: 24 }}
        form={form}
        autoComplete="off"
      >
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
          />
        </Form.Item>
        <Form.Item
          name={"confirm_password"}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
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
        <Form.Item
          name={"email"}
          rules={[
            {
              required: true,
            },
            () => ({
              validator(_, value) {
                const data = validateEmail(value);
                if (!data) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(data));
              },
            }),
          ]}
        >
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
      </Form>
      <div className="space-y-16 mt-44">
        <Button onClick={handleRegisterCUser}>Confirm</Button>
        <Link href={"/register"} className="block">
          <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
            Previous Step
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default CClient;
