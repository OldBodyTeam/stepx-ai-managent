import CustomRadio from "@/components/base/Radio";
import Button from "./components/Button";
import Image from "next/image";
const RegisterPage = () => {
  return (
    <div>
      <div className="text-14 text-222222 font-medium mb-32">
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
      <div className="flex items-center mt-16 w-full justify-center text-o34 text-xs12 cursor-pointer">
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
        <Button>Next Step</Button>
        <Button className="!bg-EDEDED !border-1 !border-222222 !text-101010">
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default RegisterPage;
