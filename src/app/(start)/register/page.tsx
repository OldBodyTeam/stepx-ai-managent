import CustomRadio from "@/components/base/Radio";
import Button from "../components/Button";
import Image from "next/image";
import RadioGroupCustom from "../components/RadioGroupCustom";
import RadioVar from "../components/RadioVar";
const options = [
  {
    title: "people",
    label: "Individual Users",
    desc: "Mainly used for browsing the website",
  },
  {
    title: "book",
    label: "Enterprise Users",
    desc: "Mainly used for publishing products",
  },
];
const RegisterPage = () => {
  return (
    <div>
      <div className="text-14 text-222222 font-medium mb-32">
        Please select the account you need to create
      </div>
      <RadioGroupCustom options={options} />
      <RadioVar />
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
