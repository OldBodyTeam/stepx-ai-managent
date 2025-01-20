"use client";

import { PaymentPlanListCreate200ResponseDataItemsInner } from "@/services";
import { useMemoizedFn } from "ahooks";
import { Divider } from "antd";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

export interface PayRadioProps {
  value?: number;
  onChange?: (v?: number) => void;
  paymentPlanListData?: PaymentPlanListCreate200ResponseDataItemsInner[];
}

const PayRadio: FC<PayRadioProps> = (props) => {
  const { value, onChange, paymentPlanListData } = props;
  const handleSelect = useMemoizedFn((t?: number) => {
    onChange?.(t);
  });
  return (
    <div className="flex space-x-8 cursor-pointer">
      {paymentPlanListData?.map((v) => {
        return (
          <div
            key={v.id}
            className={classNames(
              "flex flex-col p-16 bg-FAFAFB rounded-12 border-1 border-solid",
              v.id === value ? " border-FADB14" : " border-transparent"
            )}
            onClick={() => handleSelect(v.id)}
          >
            <div className="space-y-8">
              <div className="text-222222 text-xs14 font-medium">{v.title}</div>
              <div className="flex items-end">
                <div className="text-xs16 font-medium text-222222">
                  {v.current_price}
                </div>
                <div className="text-xs12 font-medium text-8A8C90 mb-2">
                  /{v.price_description}
                </div>
              </div>
            </div>
            <Divider />
            <div className="space-y-10 flex-1">
              {v.features_list?.map((l) => {
                return (
                  <div key={l.test} className="flex items-start">
                    <Image
                      src={`/rate/${l.selected ? "right" : "error"}.png`}
                      width={14}
                      height={14}
                      alt="tips"
                      className="mr-4 mt-4"
                    />
                    {l.test}
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
