"use client";
import { validatePassword, validateEmail } from "@/utils/validate";
import { Button, Form, Input } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import Image from "next/image";
import useSendCode from "@/hooks/useSendCode";
import BaseModal from "./BaseModal";
import { userInfoAtom } from "@/stores/userInfo";
import { useAtomValue } from "jotai";
import { uploadUsername } from "@/app/(home)/[userId]/settings/actions";
export type ModifyEmailProps = {
  visible?: boolean;
};
const ModifyEmail: FC<PropsWithChildren<ModifyEmailProps>> = (props) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userInfo = useAtomValue(userInfoAtom);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      console.log(values);
      const data = await uploadUsername({
        ...values,
        role_id: userInfo?.id,
      });
      setIsModalOpen(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { countdown, isDisabled, startCountdown } = useSendCode();
  const handleSendCode = async () => {
    try {
      await form.validateFields(["email"]);
      startCountdown();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div onClick={showModal}>{children}</div>
      <BaseModal
        title="Change Username"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
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
          <Form.Item>
            <Input
              placeholder="Please enter the verification code"
              suffix={
                <Button
                  disabled={isDisabled}
                  className="font-medium text-xs12 text-101010 decoration-solid underline cursor-pointer"
                  onClick={handleSendCode}
                  type="text"
                  size="small"
                >
                  {countdown !== null ? `${countdown}s` : "Send"}
                </Button>
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
      </BaseModal>
    </>
  );
};
export default ModifyEmail;
