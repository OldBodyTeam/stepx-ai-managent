"use client";
import { useMemoizedFn } from "ahooks";
import classNames from "classnames";
import { useState } from "react";
const menuData = [
  { name: "Dashboard", key: "dashboard" },
  { name: "My Product", key: "product" },
  { name: "My Collection", key: "collection" },
  { name: "Notifications", key: "notifications" },
  { name: "Settings", key: "settings" },
];
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuData.at(0)?.key);
  const handleChangeMenu = useMemoizedFn((key: string) => {
    setSelectedMenu(key);
  });
  return (
    <div className="space-y-8">
      {menuData.map((v) => {
        return (
          <div
            key={v.key}
            className={classNames(
              "flex items-center rounded-38 overflow-hidden cursor-pointer px-16 py-20 transition-all",
              selectedMenu === v.key ? "bg-D0FF71" : undefined
            )}
            onClick={() => handleChangeMenu(v.key)}
          >
            <div>1</div>
            <div
              className={classNames(
                "text-18 leading-27 font-medium transition-all",
                selectedMenu === v.key ? "text-101010" : "text-FFFFFF"
              )}
            >
              {v.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
