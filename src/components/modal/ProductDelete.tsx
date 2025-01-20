"use client";
import { FC, PropsWithChildren, useState } from "react";
import BaseModal from "./BaseModal";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { deleteProductItem } from "@/app/(home)/[userId]/product/actions";
import { Button } from "antd";
export type ProductDeleteProps = {
  visible?: boolean;
  id?: number;
  name?: string;
  refresh?: () => void;
};
const ProductDelete: FC<PropsWithChildren<ProductDeleteProps>> = (props) => {
  const { id, name, refresh } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { contextHolder, showErrorMessage } = useHandleResponse();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const data = await deleteProductItem({
        id: id ?? 0,
      });
      showErrorMessage(data);
      setIsModalOpen(false);
      refresh?.();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {contextHolder}
      <div className="text-xs12 text-o34" onClick={showModal}>
        Delete
      </div>

      <BaseModal
        title={`Are you sure to delete ${name}?`}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
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
            className="text-[#FA3100] !font-medium"
          >
            Delete
          </Button>,
        ]}
      >
        <div className="text-xs12 text-101010">
          After deletion, the product cannot be restored
        </div>
      </BaseModal>
    </>
  );
};
export default ProductDelete;
