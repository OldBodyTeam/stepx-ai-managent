"use client";
import { Divider, Upload } from "antd";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { FC, Suspense, useState } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { useRouter } from "next/navigation";
import ModifyUsername from "@/components/modal/ModifyUsername";
import ModifyEmail from "@/components/modal/ModifyEmail";
import ModifyPassword from "@/components/modal/ModifyPassword";
import { userIdAtom, userInfoAtom } from "@/stores/userInfo";
import { AdminInfoCreate200Response } from "@/services";
import { useAtomValue } from "jotai";
import { uploadFileAction } from "@/app/(home)/[userId]/settings/actions";
import SettingsLoading from "@/app/(home)/[userId]/settings/loading";
const Page = () => {
  const [url, setUrl] = useState("");
  const userInfo = useAtomValue(userInfoAtom);

  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <>
      <div className="p-16 bg-FFFFFF rounded-16">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-12">
            {url ? (
              <div className="w-46 h-46 rounded-46 flex items-center justify-center  overflow-hidden border-1 border-solid border-F0F0F0">
                <Image
                  src={url}
                  width={46}
                  height={46}
                  alt="avatar"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-46 h-46 rounded-46 flex items-center justify-center bg-FADB14 border-1 border-solid border-F0F0F0">
                <Image
                  src={"/settings/user.png"}
                  width={24}
                  height={24}
                  alt="avatar"
                />
              </div>
            )}

            <div className="space-y-6">
              <div className="text-xs16 font-medium text-101010">
                {userInfo?.username}
              </div>
              <div className="text-xs12 text-8A8C90">
                Email: {userInfo?.email}
              </div>
            </div>
          </div>
          <Upload
            beforeUpload={() => false}
            onChange={async ({ file }) => {
              console.log(file);
              const data = await uploadFileAction(file as unknown as File);
              if (data) {
                setUrl(data.data?.url ?? "");
              }
            }}
            itemRender={() => null}
          >
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
            {
              name: "Change Username",
              icon: "user-edit",
              Comp: ModifyUsername,
            },
            { name: "Change Email", icon: "mobile", Comp: ModifyEmail },
            { name: "Change Password", icon: "lock", Comp: ModifyPassword },
          ].map((item) => {
            const Container = item.Comp;
            return (
              <Container key={item.icon}>
                <div className="flex items-center justify-between mb-16 cursor-pointer">
                  <div className="flex items-center space-x-12">
                    <Image
                      src={`/settings/${item.icon}.png`}
                      width={16}
                      height={16}
                      alt="avatar"
                      className="w-auto h-auto aspect-square"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <div className="text-xs16 font-medium text-101010 ml-8">
                      {item.name}
                    </div>
                  </div>
                  <div className="text-16">
                    <Image
                      src={`/settings/arrow.png`}
                      width={16}
                      height={16}
                      alt="avatar"
                      className="w-auto h-auto aspect-square"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </Container>
            );
          })}
        </div>
      </div>
      <div className="mt-24 space-y-16 cursor-pointer">
        <div
          className="border-1 border-E8E8E9 py-14 flex items-center justify-center text-222222 text-xs14 font-medium rounded-48 bg-FFFFFF"
          onClick={handleLogout}
        >
          Change Account
        </div>
        <div
          className="border-1 border-E8E8E9 py-14 flex items-center justify-center text-FA3100 text-xs14 font-medium rounded-48 bg-FFFFFF"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </>
  );
};
const SettingsPageEntry: FC<{
  userInfo: AdminInfoCreate200Response;
  userId: string;
}> = (props) => {
  const { userInfo: initUserInfo, userId } = props;
  useHydrateAtoms([
    [userIdAtom, Number(userId)],
    [userInfoAtom, initUserInfo.data!],
  ]);

  return (
    <Suspense fallback={<SettingsLoading />}>
      <Page />
    </Suspense>
  );
};
export { SettingsPageEntry };
