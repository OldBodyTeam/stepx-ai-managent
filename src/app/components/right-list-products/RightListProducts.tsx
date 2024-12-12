import Image from "next/image";

const RightListProducts = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      <div className="space-y-16 cursor-pointer">
        {Array(15)
          .fill(1)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between p-24 rounded-24 bg-white border-1 border-E8E8E9 bg-FFFFFF"
              >
                <div className="flex-1 flex items-center">
                  <div className="overflow-hidden w-46 h-46 mr-16">logo</div>
                  <div className="flex-1">
                    <div className="line-clamp-1 flex items-center text-222222 font-medium text-18 leading-27 mb-4">
                      Spotter Studio
                      <Image
                        src="/yes-yellow.png"
                        alt="yellow"
                        width={20}
                        height={20}
                        className="ml-8"
                      />
                    </div>
                    <div className="text-222222 leading-18 text-12">
                      Pageview : 1196753
                    </div>
                  </div>
                </div>
                <Image
                  src="/right-arrow.png"
                  alt="right-arrow"
                  className="w-24 h-24"
                  width={24}
                  height={24}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default RightListProducts;
