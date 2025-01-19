"use client";
import { FC, PropsWithChildren, useState } from "react";
import BaseModal from "./BaseModal";
import { useHandleResponse } from "@/hooks/useHandleResponse";
import { deleteProductItem } from "@/app/(home)/[userId]/product/actions";
export type ProductDeleteProps = {
  visible?: boolean;
  id?: number;
};
const ProductDelete: FC<PropsWithChildren<ProductDeleteProps>> = (props) => {
  const { id } = props;
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
        title="Change Email"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <div>111</div>
      </BaseModal>
    </>
  );
};
export default ProductDelete;
