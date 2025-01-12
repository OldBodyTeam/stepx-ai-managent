import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { CoverColorListCreate200ResponseDataItems } from "@/services";
export type ColorListProps = {
  value?: string;
  onChange?: (value?: string) => void;
  colorList?: CoverColorListCreate200ResponseDataItems[];
};
const ColorList: FC<PropsWithChildren<ColorListProps>> = (props) => {
  const { value, onChange, colorList } = props;
  const handleSelectedColor = (color?: string) => {
    onChange?.(color);
  };
  return (
    <div className="flex items-center w-full space-x-8">
      {colorList?.map((item) => (
        <div
          key={item.id}
          className={classNames(
            "flex-1 h-32 rounded-6 cursor-pointer border-1 border-solid overflow-hidden border-transparent",
            {
              "!border-FADB14 ": value === item.background_color,
            }
          )}
          onClick={() => handleSelectedColor(item.background_color)}
          style={{ backgroundColor: item.background_color }}
        />
      ))}
    </div>
  );
};
export default ColorList;
