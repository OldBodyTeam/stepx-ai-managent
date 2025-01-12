"use client";

import { useMemoizedFn } from "ahooks";
import { Divider } from "antd";
import classNames from "classnames";
import { FC } from "react";

export interface PayRadioProps {
  value?: string;
  onChange?: (v?: string) => void;
}
const opt = [
  {
    title: "Free",
    pay: "$0",
    desc: "/Forever effective",
    list: [
      { text: "Get 3 dofollow links to boost your SEO", selected: true },
      { text: "Permanent link with backlink maintenance", selected: true },
      { text: "Reviewed and listed within 48 hours", selected: true },
      { text: "Publish your product the day you want", selected: true },
      { text: "Backlink to our site is required", selected: false },
      { text: "No customer support", selected: false },
    ],
  },
  {
    title: "Paid version",
    pay: "$3.5",
    desc: "/Forever effective",
    list: [
      { text: "Get >= 3 dofollow links to boost your SEO", selected: true },
      { text: "List right now, publish whenever you want", selected: true },
      { text: "Permanent link, no backlink required", selected: true },
      { text: "Share through social media and newsletters", selected: true },
      { text: "Premium customer support", selected: true },
    ],
  },
];
const PayRadio: FC<PayRadioProps> = (props) => {
  const { value, onChange } = props;
  const handleSelect = useMemoizedFn((t: string) => {
    onChange?.(t);
  });
  return (
    <div className="flex space-x-8 cursor-pointer">
      {opt.map((v) => {
        return (
          <div
            key={v.title}
            className={classNames(
              "flex flex-col p-16 bg-FAFAFB rounded-12 border-1 border-solid",
              v.title === value ? " border-FADB14" : " border-transparent"
            )}
            onClick={() => handleSelect(v.title)}
          >
            <div className="space-y-8">
              <div className="text-222222 text-xs14 font-medium">{v.title}</div>
              <div className="flex items-end">
                <div className="text-xs16 font-medium text-222222">{v.pay}</div>
                <div className="text-xs12 font-medium text-8A8C90 mb-2">
                  {v.desc}
                </div>
              </div>
            </div>
            <Divider />
            <div className="space-y-10">
              {v.list.map((l) => {
                return (
                  <div key={l.text} className="flex items-center">
                    {l.text}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PayRadio;
