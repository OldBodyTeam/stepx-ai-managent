import Image from "next/image";
const RightLogo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/right-logo-bg.png)`,
      }}
      className="w-250 p-16 bg-100% bg-no-repeat flex flex-col justify-between relative min-h-122"
    >
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/right-logo.png`}
          alt="logo-menu"
          width={83}
          height={20}
        />
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <div className="mb-8 font-bold text-14 leading-21 text-FFFFFF line-clamp-1">
            Subscription Plan
          </div>
          <div className="line-clamp-1 text-FFFFFF text-12 leading-18 ">
            Limited time promotion of $10 per year
          </div>
        </div>
        <div className="w-28 h-28 rounded-28 bg-FADB14 flex items-center justify-center hover:rotate-45 transition-all cursor-pointer !duration-300">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/right-top-arrow.png`}
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
