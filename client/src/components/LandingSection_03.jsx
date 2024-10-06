import content from "../images/content.png";
import layer_1 from "../images/Layer_1.png";

const LandingSection_03 = () => {
  return (
    <div
      className="
    absolute flex
    lg:w-[1436px] lg:h-[720px] lg:top-[1976px] lg:left-[72px] lg:flex-row lg:gap-6 lg:items-start
    md:w-[900px] md:h-[850px] md:top-[1771px] md:left-[62px] md:flex-col md:gap-[10px] md:items-center
    sm:w-[353px] sm:h-[421px] sm:top-[1050px] sm:left-[17px] sm:flex-col sm:items-center   "
    >
      {/*--------------------------------------------------------------------------------------------*/}
      <div
        className="
      px-0  flex flex-col
      lg:w-[412px] lg:py-[150px] lg:text-start lg:gap-4
      md:w-[720px] md:h-[192px] md:text-center md:gap-4
      sm:w-[353px] sm:h-[165px] sm:text-center sm:gap-2"
      >
        <div className="w-full">
          <h1 className="font-bold lg:text-[40px] md:text-[40px] sm:text-[20px] text-[#555770] lg:leading-[54px] md:leading-[54px] sm:leading-[28px]">
            <span className="text-[#06C270]">Live</span> Streaming Practice
          </h1>
        </div>
        <div className="w-full">
          <p className="text-[#555770] font-normal lg:text-[16px] md:text-[16px] sm:text-[14px] leading-[24px]">
            Engage in real-time ditaction practice with multiple users through
            live streaming, enhacing interactive learning and collaborative
            feedback.
          </p>
        </div>
        <div>
          <button
            className="
          rounded-[4px] px-5 py-0 border border-[#8F90A6] tracking-[2px]
          lg:w-[180px] lg:h-[44px] lg:text-[14px]
          md:w-[180px] md:h-[44px] md:text-[14px]
          sm:w-[142px] sm:h-[36px] sm:text-[10px]"
          >
            JOIN NOW
          </button>
        </div>
      </div>

      {/*--------------------------------------------------------------------------------------------*/}

      <div
        className="
      lg:w-[1000px] lg:h-[720px] 
      md:w-[900px] md:h-[648px]
      sm:w-[350px] sm:h-[256px]"
      >
        {/*-----------*/}
        <div
          className="
        absolute
        lg:w-[900px] lg:h-[600px] lg:top-[60px] lg:left-[486px]
        md:w-[810px] md:h-[540px] md:top-[256px] md:left-[45px]
        sm:w-[315px] sm:h-[210px] sm:top-[188px] sm:left-[17px]"
        >
          <div className="lg:h-[27px] md:h-[27px] sm:h-[9px] border border-[#1A202C] bg-[#1A202C] rounded-tl-[16px] rounded-tr-[16px]"></div>
          <img src={content} className="w-full" />
        </div>
        <div className="lg:w-[1000px] md:w-[900px] sm:w-[350px]">
          <img src={layer_1} className="static" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection_03;
