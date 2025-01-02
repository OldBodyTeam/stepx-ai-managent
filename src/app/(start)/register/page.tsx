"use client";
import { useState } from "react";
import Button from "../components/Button";
import RadioGroupCustom from "../components/RadioGroupCustom";
import RadioVar from "../components/RadioVar";
import { useRouter } from "next/navigation";
import { message } from "antd";
const options = [
  {
    title: "c",
    icon: "people",
    label: "Individual Users",
    desc: "Mainly used for browsing the website",
  },
  {
    title: "b",
    icon: "book",
    label: "Enterprise Users",
    desc: "Mainly used for publishing products",
  },
];
const RegisterPage = () => {
  const [path, setPath] = useState("");
  const [match, setMatch] = useState(false);
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    if (!path) {
      messageApi.open({
        type: "error",
        content: "Please select the account you need to create",
      });
      return;
    }
    if (!match) {
      messageApi.open({
        type: "error",
        content: "Please agree to the terms of service and privacy policy",
      });
      return;
    }
    router.push(`/register/${path}`);
  };
  return (
    <div>
      {contextHolder}
      <div className="text-14 text-222222 font-medium mb-32">
        Please select the account you need to create
      </div>
      <RadioGroupCustom options={options} onChange={(path) => setPath(path)} />
      <RadioVar onChange={(e) => setMatch(e)} value={match} />
      <div className="space-y-16 mt-44">
        <Button onClick={handleClick}>Next Step</Button>
        <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default RegisterPage;
