"use client";

import { Form, Input } from "@arco-design/web-react";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
const Reset = () => {
  return (
    <div className="w-480 mt-48">
      <div className="mb-32 text-222222 font-medium text-xs14">
        Please fill in the following information to facilitate registration
      </div>
      <Form className="space-y-16" wrapperCol={{ span: 24 }}>
        <Form.Item>
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

        <Form.Item>
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
        <Form.Item>
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
        <Form.Item>
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
              <div className="font-medium text-xs12 text-101010 decoration-solid underline cursor-pointer">
                Resend
              </div>
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
      <div className="space-y-16 mt-44">
        <Button>Confirm</Button>
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
