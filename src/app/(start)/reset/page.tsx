"use client";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { get } from "lodash";
import { restPassword } from "./actions";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/utils/validate";
import { useMemoizedFn } from "ahooks";
import { Form, Input } from "antd";
const Reset = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { contextHolder, showErrorMessage, messageApi } = useHandleResponse();
  const handleReset = async () => {
    try {
      await form.validateFields();
      const userInput = form.getFieldsValue();
      const data = await restPassword(userInput);
      const isValid = showErrorMessage(data as any);
      if (!isValid) {
        return;
      }
      router.push("/login");
      messageApi.info("Reset password successfully");
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
        <Form.Item
          rules={[{ required: true, message: "Please input your name" }]}
          name={"username"}
        >
          <Input
            placeholder="Enter one user name"
            prefix={
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/register/user.png`}
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
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/register/lock.png`}
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
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/register/lock.png`}
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
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/register/sms.png`}
                alt="user"
                width={16}
                height={16}
              />
            }
            style={{ height: 48 }}
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
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/register/tick.png`}
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
