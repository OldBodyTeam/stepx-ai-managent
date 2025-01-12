"use client";

import Button from "../../components/Button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemoizedFn } from "ahooks";
import { createBUser } from "./actions";
import {
  validateCompanyEmpty,
  validateEmail,
  validatePassword,
} from "@/utils/validate";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { get } from "lodash";
import { Form, Input } from "antd";
const BClient = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { contextHolder, showErrorMessage, messageApi } = useHandleResponse();
  const handleRegisterBUser = useMemoizedFn(async () => {
    try {
      await form.validateFields();
      const userInput = form.getFieldsValue();
      if (userInput.password !== userInput.confirm_password) {
        messageApi.error("Passwords do not match");
      }
      const data = await createBUser({ ...form.getFieldsValue(), role_id: 2 });
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
            style={{ height: 48 }}
          />
        </Form.Item>
        <Form.Item
          name={"company_name"}
          rules={[
            {
              required: true,
            },
            () => ({
              validator(_, value) {
                const data = validateCompanyEmpty(value);
                if (!data) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(data));
              },
            }),
          ]}
        >
          <Input
            placeholder="Please enter the company"
            prefix={
              <Image
                src="/register/company.png"
                alt="user"
                width={16}
                height={16}
              />
            }
            style={{ height: 48 }}
          />
        </Form.Item>
        <Form.Item
          name={"password"}
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
            style={{ height: 48 }}
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
            style={{ height: 48 }}
          />
        </Form.Item>
      </Form>
      <div className="space-y-16 mt-44">
        <Button onClick={handleRegisterBUser}>Confirm</Button>
        <Link href={"/register"} className="block">
          <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
            Previous Step
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default BClient;
