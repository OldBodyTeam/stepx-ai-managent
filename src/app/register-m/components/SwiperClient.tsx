"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { useMemoizedFn } from "ahooks";
import { Controller } from "swiper/modules";
import classNames from "classnames";
const data = [
  {
    comment:
      "“A very user-friendly product that can accurately share my products with users in need.”",
    icon: "",
    name: "John Doe",
    desc: "Product designer",
  },
  {
    comment:
      "“A very user-friendly product that can accurately share my products with users in need.”",
    icon: "",
    name: "John Doe",
    desc: "Product designer",
  },
  {
    comment:
      "“A very user-friendly product that can accurately share my products with users in need.”",
    icon: "",
    name: "John Doe",
    desc: "Product designer",
  },
];
const SwiperClient = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>();
  const handleNext = useMemoizedFn(() => {
    controlledSwiper?.slideNext();
  });

  const handlePrev = useMemoizedFn(() => {
    controlledSwiper?.slidePrev();
  });
  return (
    <div>
      <Swiper
        loop={false}
        autoplay={false}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        modules={[Controller]}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <div className="mb-24 text-xs16 text-FFFFFF">
                  {item.comment}
                </div>
                <div className="flex items-center">
                  <div className="w-50 h-50 flex items-center justify-center rounded-12 bg-FFFFFF">
                    x
                  </div>
                  <div className="ml-16">
                    <div className="text-xs16 font-medium text-FFFFFF mb-8">
                      {item.name}
                    </div>
                    <div className="text-xs14 text-FFFFFF opacity-65">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center space-x-12 mt-24 mb-32">
        <div
          className={classNames(
            "w-60 h-40 flex items-center justify-center cursor-pointer  rounded-8",
            activeIndex === 0 ? "bg-FFFFFF" : "bg-D0FF71"
          )}
          onClick={handlePrev}
        >
          --
        </div>
        <div
          className={classNames(
            "w-60 h-40 flex items-center justify-center cursor-pointer  rounded-8",
            activeIndex === data.length - 1 ? "bg-FFFFFF" : "bg-D0FF71"
          )}
          onClick={handleNext}
        >
          --
        </div>
      </div>
    </div>
  );
};
export default SwiperClient;
