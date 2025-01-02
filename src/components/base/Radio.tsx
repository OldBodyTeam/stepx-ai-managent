"use client";
import { useMemoizedFn, useMount } from "ahooks";
import classNames from "classnames";
import { createStore, Provider } from "jotai";
import Image from "next/image";
import {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  Children,
} from "react";
export interface CustomRadioProps {
  className?: string;
  value?: boolean;
  onChange?: (value?: boolean) => void;
}
export const CustomRadioGroup: FC<PropsWithChildren<any>> = (props) => {
  const { children } = props;
  const ref = useRef<ReturnType<typeof createStore>>(createStore());
  useMount(() => {
    Children.count(children);
  });

  return <Provider store={ref.current}>{children}</Provider>;
};
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
        "transition-all w-24 h-24 rounded-24 overflow-hidden cursor-pointer",
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
