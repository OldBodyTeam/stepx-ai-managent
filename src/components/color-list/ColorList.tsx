import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { CoverColorListCreate200ResponseDataItemsInner } from "@/services";
export type ColorListProps = {
  value?: number;
  onChange?: (value?: number) => void;
  colorList?: CoverColorListCreate200ResponseDataItemsInner[];
};
const ColorList: FC<PropsWithChildren<ColorListProps>> = (props) => {
  const { value, onChange, colorList } = props;
  const handleSelectedColor = (color?: number) => {
    onChange?.(color);
  };
  return (
    <div className="flex items-center w-full space-x-8">
      {colorList?.map((item) => (
        <div
          key={item.id}
          className={classNames(
            "flex-1 rounded-8 cursor-pointer border-1 border-solid  border-transparent p-2 bg-transparent overflow-hidden",
            {
              "!border-FADB14 ": value === item.id,
            }
          )}
          onClick={() => handleSelectedColor(item.id)}
        >
          <div
            className="h-32 w-full rounded-8"
            style={{ backgroundColor: item.background_color }}
          />
        </div>
      ))}
    </div>
  );
};
export default ColorList;
