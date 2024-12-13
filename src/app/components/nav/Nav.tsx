import Image from "next/image";

export const navMenu = [
  { key: "search", path: "/search.png" },
  { key: "language", path: "/language.png" },
  { key: "people", path: "/user.png" },
];
const Nav = () => {
  return (
    <div className="flex items-center pt-15  pl-24">
      <div className="flex-1 justify-between items-center flex">
        <div>
          <div className="text-22 leading-33 font-bold mb-4">My Product</div>
          <div className="flex items-center text-101010 opacity-65 text-12 leading-18">
            Home /{" "}
            <div className="text-1010101 text-12 leading-18">My Product</div>
          </div>
        </div>
        <div className="flex items-center justify-center px-12 py-8 bg-FFFFFF rounded-50 border-E8E8E9 border-1 cursor-pointer">
          <Image src={"/add.png"} alt="add" width={16} height={16} />
          <div className="font-medium leading-18 text-222222 text-12 ml-4">
            New Product
          </div>
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
