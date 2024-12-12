import Image from "next/image";
const RightLogo = () => {
  return (
    <div
      style={{ backgroundImage: `url(/right-logo-bg.png)` }}
      className="w-340 p-24 bg-100% bg-no-repeat flex flex-col justify-between relative"
    >
      <div>logo</div>
      <div>
        <div className="mb-8 font-bold text-20 leading-30 text-FFFFFF">
          Subscription Plan
        </div>
        <div className="line-clamp-2 text-FFFFFF text-14 leading-21">
          Limited time promotion of $10 per year
        </div>
      </div>
      <div className="w-42 h-42 rounded-42 bg-FADB14 flex items-center justify-center absolute right-24 bottom-40">
        <Image
          src={"/right-top-arrow.png"}
          alt="arrow"
          className="w-34 h-34"
          width={34}
          height={34}
        />
      </div>
    </div>
  );
};
export default RightLogo;
