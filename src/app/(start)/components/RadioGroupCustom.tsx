"use client";

import { Radio } from "@arco-design/web-react";
import { FC } from "react";
import Image from "next/image";
import CustomRadio from "@/components/base/Radio";
export type RadioGroupCustomProps = {
  title: string;
  label: string;
  desc: string;
  icon: string;
};
const RadioGroupCustom: FC<{
  options: RadioGroupCustomProps[];
  onChange?: (path: string) => void;
}> = (props) => {
  const { options, onChange } = props;
  return (
    <Radio.Group className="space-y-16 w-480" onChange={onChange}>
      {options.map((item) => {
        return (
          <Radio value={item.title} key={item.title} className={"!pl-0"}>
            {({ checked }) => {
              return (
                <div className="p-24 flex items-center justify-between bg-FFFFFF rounded-16">
                  <div className="flex items-center">
                    <div className="w-42 h-42 bg-D0FF71 rounded-10 flex items-center justify-center">
                      <Image
                        src={`/login/${item.icon}.png`}
                        alt="people"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="ml-16">
                      <div className="mb-6 font-bold text-xs14 text-101010">
                        {item.label}
                      </div>
                      <div className="text-xs12 text-101010">{item.desc}</div>
                    </div>
                  </div>
                  <div>
                    <CustomRadio value={checked} />
                  </div>
                </div>
              );
            }}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};
export default RadioGroupCustom;
