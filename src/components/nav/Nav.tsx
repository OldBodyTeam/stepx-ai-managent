"use client";
import Image from "next/image";
import ClientButton from "../client-button/ClientButton";
import { useAtomValue } from "jotai";
import { menuAtom } from "@/hooks/menu";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { useMemo } from "react";
const Nav = () => {
  const navInfo = useAtomValue(menuAtom);
  const pathname = usePathname();
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const [path, activePath] = useMemo(() => {
    if (!selectedLayoutSegments || selectedLayoutSegments.length < 1) {
      return [];
    }
    if (selectedLayoutSegments?.length === 1) {
      return [, selectedLayoutSegments];
    }
    return [
      [...(selectedLayoutSegments || []).slice(0, -1)].join(" / "),
      selectedLayoutSegments[selectedLayoutSegments.length - 1],
    ];
  }, [selectedLayoutSegments]);
  return (
    <div className="flex items-center pt-15 mb-24 ">
      <div className="flex-1 justify-between items-center flex">
        <div>
          <div className="text-22 leading-33 font-bold mb-4">
            {navInfo?.name}
          </div>
          <div className="flex items-center text-o16 text-12 leading-18">
            home {path ? `/ ${path}` : ""}
            {activePath ? (
              <div className="text-101010 text-12 leading-18 ml-4">
                / {activePath}
              </div>
            ) : null}
          </div>
        </div>
        {pathname?.endsWith("product") ? (
          <Link href={`product/create`}>
            <div className="flex items-center justify-center pl-12 pr-16 py-8 bg-FFFFFF rounded-50 border-E8E8E9 border-1 cursor-pointer">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/add.png`}
                alt="add"
                width={16}
                height={16}
              />
              <ClientButton>
                <div>New Product</div>
              </ClientButton>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default Nav;
