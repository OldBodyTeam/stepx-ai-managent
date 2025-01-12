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
  validateEmpty,
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
          field={"username"}
          required
          rules={[
            {
              validator: validateEmpty,
            },
          ]}
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
          field={"company_name"}
          rules={[
            {
              validator: validateCompanyEmpty,
            },
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
          />
        </Form.Item>
        <Form.Item
          field={"password"}
          rules={[
            {
              validator: validatePassword,
            },
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
          />
        </Form.Item>
        <Form.Item
          field={"confirm_password"}
          rules={[
            {
              validator: validatePassword,
            },
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
          field={"email"}
          rules={[
            {
              validator: validateEmail,
            },
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
