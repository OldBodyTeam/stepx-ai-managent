"use client";
import { useMemoizedFn } from "ahooks";
import classNames from "classnames";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
export interface CustomRadioProps {
  className?: string;
  value?: boolean;
  onChange?: (value?: boolean) => void;
}
const CustomRadio: FC<CustomRadioProps> = (props) => {
  const { className, value, onChange } = props;
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(!!value);
  }, [value]);
  const handleRadioChange = useMemoizedFn(() => {
    onChange?.(!selected);
    setSelected((prev) => !prev);
  });
  return (
    <div
      onClick={handleRadioChange}
      className={classNames(
        "transition-all w-24 h-24 rounded-24 overflow-hidden",
        className
      )}
    >
      {selected ? (
        <Image
          src={"/login/radio-selected.png"}
          width={24}
          height={24}
          alt="radio"
        />
      ) : (
        <Image
          src={"/login/radio-select.png"}
          width={24}
          height={24}
          alt="radio"
        />
      )}
    </div>
  );
};
export default CustomRadio;
