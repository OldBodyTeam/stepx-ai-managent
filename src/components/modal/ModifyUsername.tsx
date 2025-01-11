"use client";
import { Form, Input } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import BaseModal from "./BaseModal";
import { useAtomValue } from "jotai";
import { userInfoAtom } from "@/stores/userInfo";
import { uploadUsername } from "@/app/(home)/[userId]/settings/actions";
export type ModifyUsernameProps = {
  visible?: boolean;
};
const ModifyUsername: FC<PropsWithChildren<ModifyUsernameProps>> = (props) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const userInfo = useAtomValue(userInfoAtom);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      console.log(values);
      const data = await uploadUsername({
        ...values,
        role_id: userInfo?.id,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        <Form form={form}>
          <Form.Item name="username">
            <Input placeholder="Please enter the username to be modified" />
          </Form.Item>
        </Form>
      </BaseModal>
    </>
  );
};
export default ModifyUsername;
