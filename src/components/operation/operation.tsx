"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
export const navMenu = [
  // { key: "search", path: "/search.png`} },
  // { key: "language", path: "/language.png`} },
  { key: "people", path: `${process.env.NEXT_PUBLIC_BASE_URL}/user.png` },
];
const Operation = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="space-x-16 flex items-center">
      {navMenu.map((v) => {
        return (
          <Link href={`/${params?.userId}/settings`} key={v.key}>
            <div className="flex items-center justify-center w-32 h-32 rounded-32 bg-FFFFFF">
              <Image src={v.path} alt={v.key} width={16} height={16} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Operation;
