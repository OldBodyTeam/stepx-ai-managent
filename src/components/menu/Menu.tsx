"use client";
import { useMemoizedFn, useMount } from "ahooks";
import classNames from "classnames";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useSetAtom } from "jotai";
import { menuAtom } from "@/hooks/menu";
import { usePathname } from "next/navigation";
export const menuData = [
  // { name: "Dashboard", key: "dashboard" },
  { name: "My Product", key: "product" },
  // { name: "My Collection", key: "collection" },
  // { name: "Notifications", key: "notifications" },
  { name: "Settings", key: "settings" },
];
const Menu = () => {
  const { userId } = useParams() ?? {};
  const setMenuAtom = useSetAtom(menuAtom);
  const [selectedMenu, setSelectedMenu] = useState(menuData.at(1)?.key);
  const router = useRouter();
  const handleChangeMenu = useMemoizedFn((key: string) => {
    setSelectedMenu(key);
    router.push(`/${userId}/${key}`);
    setMenuAtom(menuData.find((v) => v.key === key));
  });
  const pathname = usePathname();
  useMount(() => {
    const key = menuData.find((v) => pathname?.includes(v.key))?.key;
    setSelectedMenu(key);
    setMenuAtom(menuData.find((v) => v.key === key));
  });

  return (
    <div className="flex flex-col justify-between flex-1">
      <div className="space-y-8">
        {menuData.map((v) => {
          const isSelected = selectedMenu === v.key;
          return (
            <div
              key={v.key}
              className={classNames(
                "flex items-center rounded-36 overflow-hidden cursor-pointer px-12 py-10 transition-all",
                isSelected ? "bg-D0FF71" : undefined
              )}
              onClick={() => handleChangeMenu(v.key)}
            >
              <div className="">
                {isSelected ? (
                  <Image
                    src={`/nav-${v.key}-selected.png`}
                    alt={v.key}
                    width={16}
                    height={16}
                  />
                ) : (
                  <Image
                    src={`/nav-${v.key}.png`}
                    alt={v.key}
                    width={16}
                    height={16}
                  />
                )}
              </div>
              <div
                className={classNames(
                  "text-12 leading-18 font-medium transition-all ml-6",
                  isSelected ? "text-101010" : "text-FFFFFF"
                )}
              >
                {v.name}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="h-130 w-full relative bg-100% bg-no-repeat flex items-end p-12"
        style={{ backgroundImage: "url(/menu-logo-bottom.png)" }}
      >
        <div className="bg-FFFFFF w-54 h-54 rounded-54 flex items-center justify-center border-4 border-222222 absolute left-53 -top-27 hover:rotate-45 transition-all cursor-pointer !duration-300">
          <Image src={"/arrow-up.png"} alt="arrow" width={30} height={30} />
        </div>
        <div className="text-xs12 font-bold line-clamp-2">
          Claim your limited time discount
        </div>
      </div>
    </div>
  );
};
export default Menu;
