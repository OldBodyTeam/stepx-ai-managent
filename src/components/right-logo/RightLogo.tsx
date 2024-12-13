import Image from "next/image";
const RightLogo = () => {
  return (
    <div
      style={{ backgroundImage: `url(/right-logo-bg.png)` }}
      className="w-250 p-16 bg-100% bg-no-repeat flex flex-col justify-between relative"
    >
      <div>logo</div>
      <div className="flex items-center">
        <div className="flex-1">
          <div className="mb-8 font-bold text-14 leading-21 text-FFFFFF line-clamp-1">
            Subscription Plan
          </div>
          <div className="line-clamp-1 text-FFFFFF text-12 leading-18 ">
            Limited time promotion of $10 per year
          </div>
        </div>
        <div className="w-28 h-28 rounded-28 bg-FADB14 flex items-center justify-center">
          <Image
            src={"/right-top-arrow.png"}
            alt="arrow"
            className="w-24 h-24"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
export default RightLogo;
