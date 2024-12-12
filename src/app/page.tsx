import Menu from "./components/menu/Menu";
import RightListProducts from "./components/right-list-products/RightListProducts";
import RightLogo from "./components/right-logo/RightLogo";

export default function Home() {
  return (
    <div className="w-screen h-screen box-border p-24 flex bg-EDEDED">
      <div className="w-300 bg-222222 rounded-24 h-full p-24">
        <div>logo</div>
        <Menu />
      </div>
      <div className="flex-1">
        <div>nav</div>
        <div className="flex h-full">
          <div className="flex-1">content</div>
          <div className="w-340 flex flex-col">
            <RightLogo />
            <div className="font-bold text-18 text-101010 leading-27 mb-24 mt-40">
              Like Products
            </div>
            <RightListProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
