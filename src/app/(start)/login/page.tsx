"use client";

import { Form, Input } from "@arco-design/web-react";
import Button from "../components/Button";
import CustomRadio from "@/components/base/Radio";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
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
        <div className="flex justify-end mt-8 text-xs12 text-101010 cursor-pointer">
          <Link href={"/reset"}>Forgot Password</Link>
        </div>
      </Form>
      <div className="flex items-center mt-24 w-full justify-center text-o34 text-xs12 cursor-pointer">
        <CustomRadio className="!w-14 !h-14" />
        <div className="ml-6">I have read and agree to&nbsp;&nbsp;</div>
        <div className="text-222222 font-medium decoration-solid underline">
          the Terms of Service
        </div>
        <div>&nbsp;&nbsp;and&nbsp;&nbsp;</div>
        <div className="text-222222 font-medium decoration-solid underline">
          Privacy Policy
        </div>
      </div>
      <div className="space-y-16 mt-44">
        <Button>Sign In</Button>
        <Link href={"/register"} className="block">
          <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
