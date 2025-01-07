import { SettingsPageEntry } from "@/server-components/settings/settings-entry";
import { adminInfoCreate } from "../actions";
const Page = async () => {
  const userInfo = await adminInfoCreate();
  return <SettingsPageEntry userInfo={userInfo} />;
};
export default Page;
