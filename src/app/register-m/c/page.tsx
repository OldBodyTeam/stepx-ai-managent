"use client";

import { Form, Input } from "@arco-design/web-react";
import Button from "../components/Button";

const CClient = () => {
  return (
    <div className="w-480 mt-48">
      <div className="mb-32 text-222222 font-medium text-xs14">
        Please fill in the following information to facilitate registration
      </div>
      <Form className="space-y-16" wrapperCol={{ span: 24 }}>
        <Form.Item>
          <Input placeholder="Enter one user name" />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Please input a password" />
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Please confirm password" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Please enter your email address" />
        </Form.Item>
      </Form>
      <div className="space-y-16 mt-44">
        <Button>Next Step</Button>
        <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default CClient;
