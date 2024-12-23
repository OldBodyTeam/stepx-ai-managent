import CustomRadio from "@/components/base/Radio";
import Image from "next/image";
import Button from "./components/Button";

const Login = () => {
  return (
    <div className="p-48 flex w-full h-full">
      <div>
        <Image
          src={"/login/login-logo.png"}
          alt="logo"
          width={156}
          height={40}
          className="mt-8"
        />
        <div className="text-14 text-222222 font-medium">
          Please select the account you need to create
        </div>
        <div className="space-y-16">
          <div className="p-24 flex items-center justify-between bg-FFFFFF rounded-16">
            <div className="flex items-center">
              <div className="w-42 h-42 bg-D0FF71 rounded-10 flex items-center justify-center">
                <Image
                  src={"/login/people.png"}
                  alt="people"
                  width={24}
                  height={24}
                />
              </div>
              <div className="ml-16">
                <div className="mb-6 font-bold text-xs14 text-101010">
                  Individual Users
                </div>
                <div className="text-xs12 text-101010">
                  Mainly used for browsing the website
                </div>
              </div>
            </div>
            <div>
              <CustomRadio />
            </div>
          </div>
          <div className="p-24 flex items-center justify-between bg-FFFFFF rounded-16">
            <div className="flex items-center">
              <div className="w-42 h-42 bg-D0FF71 rounded-10 flex items-center justify-center">
                <Image
                  src={"/login/book.png"}
                  alt="people"
                  width={24}
                  height={24}
                />
              </div>
              <div className="ml-16">
                <div className="mb-6 font-bold text-xs14 text-101010">
                  Enterprise Users
                </div>
                <div className="text-xs12 text-101010">
                  Mainly used for publishing products
                </div>
              </div>
            </div>
            <div>
              <CustomRadio />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-16 w-full justify-center text-o34 text-xs12">
          <CustomRadio className="!w-14 !h-14" />
          <div className="ml-6">I have read and agree to</div>
          <div className="text-222222 font-medium">the Terms of Service</div>
          <div> and </div>
          <div className="text-222222 font-medium">Privacy Policy</div>
        </div>
        <div className="space-y-16 mt-44">
          <Button>Next Step</Button>
          <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
            Cancel
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Login;
