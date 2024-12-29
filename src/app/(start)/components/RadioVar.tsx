"use client";

import CustomRadio from "@/components/base/Radio";
import { Radio } from "@arco-design/web-react";

const RadioVar = () => {
  return (
    <Radio value="a">
      {({ checked }) => {
        return (
          <div className="flex items-center mt-16 w-full justify-center text-o34 text-xs12 cursor-pointer">
            <CustomRadio className="!w-14 !h-14" value={checked} />
            <div className="ml-6">I have read and agree to&nbsp;&nbsp;</div>
            <div className="text-222222 font-medium decoration-solid underline">
              the Terms of Service
            </div>
            <div>&nbsp;&nbsp;and&nbsp;&nbsp;</div>
            <div className="text-222222 font-medium decoration-solid underline">
              Privacy Policy
            </div>
          </div>
        );
      }}
    </Radio>
  );
};
export default RadioVar;
