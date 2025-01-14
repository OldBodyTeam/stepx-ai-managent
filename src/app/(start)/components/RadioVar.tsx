"use client";

import CustomRadio from "@/components/base/Radio";
import { Checkbox } from "@arco-design/web-react";
import Link from "next/link";
import { FC } from "react";

const RadioVar: FC<{ onChange?: (path: any) => void; value?: boolean }> = (
  props
) => {
  const { onChange, value } = props;
  return (
    <Checkbox onChange={onChange} className={"w-full"} value={value}>
      {({ checked }) => {
        return (
          <div className="flex items-center mt-16 w-full justify-center text-o34 text-xs12 cursor-pointer">
            <CustomRadio className="!w-14 !h-14" value={checked} />
            <div className="ml-6">I have read and agree to&nbsp;&nbsp;</div>
            <Link href={"/the-terms-of-service"}>
              <div className="text-222222 font-medium decoration-solid underline">
                the Terms of Service
              </div>
            </Link>
            <div>&nbsp;&nbsp;and&nbsp;&nbsp;</div>
            <Link href={"/privacy-policy"}>
              <div className="text-222222 font-medium decoration-solid underline">
                Privacy Policy
              </div>
            </Link>
          </div>
        );
      }}
    </Checkbox>
  );
};
export default RadioVar;
