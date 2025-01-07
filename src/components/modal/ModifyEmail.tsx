"use client";
import { Form, Input } from "antd";
import { FC, PropsWithChildren, useState } from "react";
import BaseModal from "./BaseModal";
import { useAtomValue } from "jotai";
import { userInfoAtom } from "@/stores/userInfo";
import { uploadUsername } from "@/app/(home)/settings/actions";
export type ModifyPasswordProps = {
  visible?: boolean;
};
const ModifyPassword: FC<PropsWithChildren<ModifyPasswordProps>> = (props) => {
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
        title="Change Email"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <Form>
          <Form.Item name="email">
            <Input placeholder="Please enter a new email address" />
          </Form.Item>
        </Form>
      </BaseModal>
    </>
  );
};
export default ModifyPassword;
