import Image from "next/image";

const RightListProducts = () => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-none">
      <div className="space-y-16 cursor-pointer">
        {Array(15)
          .fill(1)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between p-16 rounded-16 bg-white border-1 border-E8E8E9 bg-FFFFFF"
              >
                <div className="flex-1 flex items-center">
                  <div className="overflow-hidden w-40 h-40 mr-8">
                    <Image src="/2.png" alt="yellow" width={40} height={40} />
                  </div>
                  <div className="flex-1">
                    <div className="line-clamp-1 flex items-center text-222222 font-medium text-14 leading-21 mb-4">
                      Spotter Studio
                      <Image
                        src="/yes-yellow.png"
                        alt="yellow"
                        width={14}
                        height={14}
                        className="ml-8"
                      />
                    </div>
                    <div className="text-o34 leading-18 text-12">
                      Pageview : 1196753
                    </div>
                  </div>
                </div>
                <Image
                  src="/right-arrow.png"
                  alt="right-arrow"
                  className="w-16 h-16"
                  width={16}
                  height={16}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default RightListProducts;
