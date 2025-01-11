import { SettingsPageEntry } from "@/server-components/settings/settings-entry";
import { adminInfoCreate } from "../actions";
import { redirect } from "next/navigation";
const Page = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  const userInfo = await adminInfoCreate();
  if (userInfo.code === 500) {
    redirect("/login");
  }

  return <SettingsPageEntry userInfo={userInfo} userId={userId} />;
};
export default Page;
