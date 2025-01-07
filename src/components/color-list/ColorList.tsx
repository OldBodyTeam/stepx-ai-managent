import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
export type ColorListProps = {
  value?: string;
  onChange?: (value?: string) => void;
};
const ColorList: FC<PropsWithChildren<ColorListProps>> = (props) => {
  const { value, onChange } = props;
  const handleSelectedColor = (index: number) => {
    onChange?.(index.toString());
  };
  return (
    <div className="flex items-center w-full space-x-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={classNames(
            "flex-1 h-32 rounded-6 cursor-pointer border-1 border-solid overflow-hidden",
            {
              "border-FADB14 ": value === index.toString(),
            }
          )}
          onClick={() => handleSelectedColor(index)}
        />
      ))}
    </div>
  );
};
export default ColorList;
