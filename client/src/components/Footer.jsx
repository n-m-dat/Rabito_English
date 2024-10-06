import React from "react";

const FooterComponent = () => {
  return (
    <div
      className="
    absolute
    lg:w-[1440px] lg:h-[469px] lg:top-[4344px]
    md:w-[1024px] md:h-[425px] md:top-[4301px]
    sm:w-[390px] sm:h-[560px] sm:top-[2240px]"
    >
      {/*----- DESKTOP & TABLET VIEW -----*/}
      <div className="lg:flex md:flex sm:hidden">
        <div className="lg:w-[1260px] md:w-[960px] h-[244px] absolute lg:top-[80px] lg:left-[60px] md:top-[48px] md:left-[32px] flex lg:gap-96 md:gap-16">
          {/*-----Logo-----*/}
          <div className="lg:w-[292px] lg:h-[132px] md:w-[292px] md:h-[132px] flex flex-col gap-4">
            <h2 className="h-[44px] font-bold text-[32px] text-[#06C270] leading-[44px]">
              RABITO ENGLISH
            </h2>
            <p className="font-normal text-[16px] text-[#555770] leading-[24px]">
              Our vision is to provide convenience and help improve your English
              learning.
            </p>
          </div>
          <div className="w-[604px] h-[244px] flex gap-8 justify-end">
            {/*-----About-----*/}
            <div className="w-[152px] h-[244px]">
              <h5 className="h-[32px] mb-10 font-bold text-[20px] text-[#1C1C28] leading-[28px]">
                About
              </h5>
              <ul className="h-[152px] font-bold text-[14px] text-[#555770] leading-[24px] flex flex-col gap-5">
                <li>How to use</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Bussiness Relation</li>
              </ul>
            </div>
            {/*-----Community-----*/}
            <div className="w-[152px] h-[244px]">
              <h5 className="h-[32px] mb-10 font-bold text-[20px] text-[#1C1C28] leading-[28px]">
                Community
              </h5>
              <ul className="h-[152px] font-bold text-[14px] text-[#555770] leading-[24px] flex flex-col gap-5">
                <li>Events</li>
                <li>Blog</li>
                <li>Invite a friend</li>
              </ul>
            </div>
            {/*-----Socials-----*/}
            <div className="w-[152px] h-[244px]">
              <h5 className="h-[32px] mb-10 font-bold text-[20px] text-[#1C1C28] leading-[28px]">
                Socials
              </h5>
              <ul className="h-[152px] font-bold text-[14px] text-[#555770] leading-[24px] flex flex-col gap-5">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*----- MOBILE VIEW -----*/}
      <div className="lg:hidden md:hidden sm:flex">
        {/* Logo */}
        <div className="w-[292px] h-[62px] absolute top-6 left-4 flex flex-col gap-1">
          <h6 className="h-[28px] font-bold text-[16px] leading-[22px] text-[#06C270]">
            RABITO ENGLISH
          </h6>
          <p className="font-normal text-[12px] leading-[14.5px] text-[#555770]">
            Our vision is to provide convenience and help improve your English
            learning.
          </p>
        </div>
        <div className="w-[130px] h-[406px] flex flex-col gap-2 ml-4 mt-28">
          {/*-----About-----*/}
          <div className="w-full h-[140px]">
            <h5 className="h-[32px] font-bold text-[16px] text-[#1C1C28] leading-[22px]">
              About
            </h5>
            <ul className="h-[104px] font-normal text-[12px] text-[#555770] leading-[14px] flex flex-col gap-4">
              <li>How to use</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Bussiness Relation</li>
            </ul>
          </div>
          {/*-----Community-----*/}
          <div className="w-full h-[110px]">
            <h5 className="h-[32px] font-bold text-[16px] text-[#1C1C28] leading-[22px]">
              Community
            </h5>
            <ul className="h-[74px] font-normal text-[12px] text-[#555770] leading-[14px] flex flex-col gap-3">
              <li>Events</li>
              <li>Blog</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          {/*-----Socials-----*/}
          <div className="w-full h-[140px]">
            <h5 className="h-[32px] font-bold text-[16px] text-[#1C1C28] leading-[22px]">
              Socials
            </h5>
            <ul className="h-[104px] font-normal text-[12px] text-[#555770] leading-[14px] flex flex-col gap-4">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/*-----Line-----*/}
      <hr
        className="
      absolute border border-[#8F90A6]
      lg:w-[1320px] lg:top-[360px] lg:left-[60px]
      md:w-[960px] md:top-[341px]  md:left-[32px]
      sm:w-[350px] sm:top-[540px] sm:left-[20px]"
      />

      {/*-----Copyright-----*/}
      <p className="absolute lg:top-[373px] lg:left-[60px] md:top-[353px] md:left-[29px] sm:top-[550px] sm:left-[88px] font-bold text-[14px] text-[#1C1C28] leading-[24px]">
        ©2024 RABITO English. All rights reserved
      </p>
      <div className="lg:flex md:flex sm:hidden">
        <p className="w-[144px] h-[24px] absolute lg:top-[396px] lg:left-[1032px] md:top-[356px] md:left-[632px] font-bold text-[14px] text-[#1C1C28] text-right leading-[24px]">
          Privacy & Policy
        </p>
        <p className="w-[144px] h-[24px] absolute lg:top-[396px] lg:left-[1236px] md:top-[356px] md:left-[836px] font-bold text-[14px] text-[#1C1C28] text-right leading-[24px]">
          Terms & Condition
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
