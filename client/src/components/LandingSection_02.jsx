import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import slide_image from "../images/content.png";

const images = [
  { number: 1, image: slide_image },
  { number: 2, image: slide_image },
  { number: 3, image: slide_image },
  { number: 4, image: slide_image },
  { number: 5, image: slide_image },
];

const LandingSection_02 = () => {
  return (
    <div className="lg:w-[1440px] md:w-[1024px] sm:w-[390px] flex flex-col gap-8 absolute md:top-[935px] sm:top-[474px]">
      {/*---------------------------------------*/}
      <div
        className="
      mx-auto flex flex-col gap-4
      lg:w-[800px] lg:h-[192px] 
      md:w-[720px] md:h-[192px]
      sm:w-[350px] sm:h-[165px]"
      >
        {/*-----TITLE-----*/}
        <div className="lg:w-full lg:h-[54px] md:w-full md:h-[54px] sm:w-[350px] sm:h-[28px] mx-auto">
          <h1 className="text-center font-bold text-[#555770] leading-[54px] lg:text-[40px] md:text-[48px] sm:text-[20px]">
            <span className="text-[#06C270]">Diverse</span> Multimedia Content
          </h1>
        </div>
        {/*-----DESCRIPTION-----*/}
        <div className="md:w-full md:h-[48px] sm:w-[350px] sm:h-[72px] mx-auto">
          <p className="text-[#596780] text-center lg:text-[16px] md:text-[18px] sm:text-[14px] leading-[24px]">
            Access a variety of video and audio materials, including hot trends,
            TOEIC, IELTS, TOEFL, and daily conversations for comprehensive
            English
          </p>
        </div>
        {/*-----BUTTON-----*/}
        <div className="flex justify-center">
          <button className="md:w-[180px] md:h-[44px] sm:w-[142px] sm:h-[36px] px-6 py-0 font-normal md:text-[16px] sm:text-[10px] border border-[#8F90A6] rounded-[4px] text-[#1C1C28]">
            DISCOVER NOW
          </button>
        </div>
      </div>
      {/*------------------------------------------------------------------*/}
      <div className="container">
        <Swiper
          className="swiper_container"
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
        >
          {images.map((img) => (
            <div className="flex flex-col">
              <SwiperSlide key={img.number}>
                <div className="h-[32.6px] border border-[#1A202C] bg-[#1A202C] rounded-t-[16px] flex items-center">
                  <div className="mx-7 flex gap-3">
                    <div className="w-4 h-4 border border-[#FF3B30] bg-[#FF3B30] rounded-lg"></div>
                    <div className="w-4 h-4 border border-[#FFCC00] bg-[#FFCC00] rounded-lg"></div>
                    <div className="w-4 h-4 border border-[#34C759] bg-[#34C759] rounded-lg"></div>
                  </div>
                </div>
                <img src={img.image} alt="img" />
              </SwiperSlide>
            </div>
          ))}

          <div className="slider-controller">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default LandingSection_02;
