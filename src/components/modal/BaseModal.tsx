"use client";

import { Button, Modal, ModalProps } from "antd";
import { FC, PropsWithChildren } from "react";
export type BaseModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
} & ModalProps;
const BaseModal: FC<PropsWithChildren<BaseModalProps>> = (props) => {
  const { children, isModalOpen, handleCancel, handleOk, title } = props;
  return (
    <Modal
      title={<div className="font-bold text-[#000000] text-xs18">{title}</div>}
      closeIcon={null}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button
          key="cancel"
          onClick={handleCancel}
          type="text"
          className="text-[#000000] opacity-65"
        >
          Cancel
        </Button>,
        <Button
          key="confirm"
          onClick={handleOk}
          type="text"
          className="text-[#000000] !font-medium"
        >
          Confirm
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};
export default BaseModal;
