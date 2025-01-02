"use client";
import { Divider, Upload } from "antd";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
const Page = () => {
  return (
    <>
      <div className="p-16 bg-FFFFFF rounded-16">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-12">
            <div className="w-46 h-46 rounded-46 flex items-center justify-center bg-FADB14 ">
              <Image
                src={"/settings/user.png"}
                width={24}
                height={24}
                alt="avatar"
              />
            </div>
            <div className="space-y-6">
              <div className="text-xs16 font-medium text-101010">
                Hyuk Design
              </div>
              <div className="text-xs12 text-8A8C90">
                Phone: +86 18713596669
              </div>
            </div>
          </div>
          <Upload>
            <div className="w-140 px-16 py-8 flex items-center bg-FFFFFF rounded-32 cursor-pointer border-1 border-E8E8E9">
              <Image
                src={"/settings/upload.png"}
                width={16}
                height={16}
                alt="avatar"
              />
              <div className="text-222222 font-medium text-xs12 ml-8">
                Modify avatar
              </div>
            </div>
          </Upload>
        </div>
        <Divider className="mt-16 mb-24" />
        <div className="text-xs12 text-8A8C90 mb-16">Basic Settings</div>
        <div className="space-y-16">
          {[
            { name: "Change Username", icon: "user-edit" },
            { name: "Change Phone Number", icon: "mobile" },
            { name: "Change Password", icon: "lock" },
          ].map((item) => {
            return (
              <div
                className="flex items-center justify-between mb-16 cursor-pointer"
                key={item.icon}
              >
                <div className="flex items-center space-x-12">
                  <Image
                    src={`/settings/${item.icon}.png`}
                    width={16}
                    height={16}
                    alt="avatar"
                  />
                  <div className="text-xs16 font-medium text-101010 ml-8">
                    {item.name}
                  </div>
                </div>
                <div className="text-16">
                  <RightOutlined />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-24 space-y-16 cursor-pointer">
        <div className="border-1 border-E8E8E9 py-14 flex items-center justify-center text-222222 text-xs14 font-medium rounded-48 bg-FFFFFF">
          Change Account
        </div>
        <div className="border-1 border-E8E8E9 py-14 flex items-center justify-center text-FA3100 text-xs14 font-medium rounded-48 bg-FFFFFF">
          Logout
        </div>
      </div>
    </>
  );
};
export default Page;
