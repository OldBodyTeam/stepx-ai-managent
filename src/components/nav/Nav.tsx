import Image from "next/image";
import AnimationButton from "../animation-button/AnimationButton";
import Link from "next/link";
export const navMenu = [
  { key: "search", path: "/search.png" },
  { key: "language", path: "/language.png" },
  { key: "people", path: "/user.png" },
];
const Nav = () => {
  return (
    <div className="flex items-center pt-15  pl-24 mb-24">
      <div className="flex-1 justify-between items-center flex">
        <div>
          <div className="text-22 leading-33 font-bold mb-4">My Product</div>
          <div className="flex items-center text-o16 opacity-65 text-12 leading-18">
            Home /{" "}
            <div className="text-101010 text-12 leading-18">My Product</div>
          </div>
        </div>
        <div className="flex items-center justify-center pl-12 pr-16 py-8 bg-FFFFFF rounded-50 border-E8E8E9 border-1 cursor-pointer">
          <Image src={"/add.png"} alt="add" width={16} height={16} />
          <AnimationButton className="font-medium text-222222 text-12 ml-4 flex-1 h-full">
            <Link href={"/product/create"}>New Product</Link>
          </AnimationButton>
        </div>
      </div>
      <div className="w-[250px] flex justify-end items-center ml-24">
        <div className="space-x-16 flex items-center">
          {navMenu.map((v) => {
            return (
              <div
                className="flex items-center justify-center w-32 h-32 rounded-32 bg-FFFFFF"
                key={v.key}
              >
                <Image src={v.path} alt={v.key} width={16} height={16} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Nav;
