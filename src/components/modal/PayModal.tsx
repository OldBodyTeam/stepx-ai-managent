"use client";
import "@ant-design/v5-patch-for-react-19";
import { Form, Input, Modal } from "antd";
import { FC, useState } from "react";
import PayRadio from "../base/PayRadio";
export interface PayModalProps {
  handleSubmit?: () => void;
}
const PayModal: FC<PayModalProps> = (props) => {
  const { handleSubmit } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      handleSubmit?.();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="border-1 border-E8E8E9 py-14 flex items-center justify-center text-101010 text-xs14 font-medium rounded-48 bg-FFFFFF my-16"
        onClick={showModal}
      >
        Submit For Review
      </div>
      <Modal
        closeIcon={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={
          <div className="font-bold text-[#000000] text-xs18 flex items-center w-full justify-center">
            Please choose a product package
          </div>
        }
        width={692}
        footer={null}
        centered
      >
        <Form form={form} className="!mt-24">
          <Form.Item name="pay">
            <PayRadio />
          </Form.Item>

          <Form.Item shouldUpdate>
            {({ getFieldValue }) => {
              const pay: string = getFieldValue("pay") || "";
              console.log(pay);
              return pay ? (
                <>
                  <div className="mt-16 mb-8 text-101010 text-xs12">
                    Friendship link
                  </div>
                  <Form.Item name="a">
                    <Input placeholder="Please add our friendly link on your website, otherwise there may be a risk of delisting" />
                  </Form.Item>
                </>
              ) : null;
            }}
          </Form.Item>
        </Form>
        <div className="flex items-center justify-center mt-16">
          <div className="px-56 py-10 cursor-pointer text-xs12 font-medium text-101010 bg-D0FF71 rounded-20">
            Confirm
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PayModal;
