import content from "../images/content.png";
import layer_2 from "../images/Layer_2.png";

const LandingSection_04 = () => {
  return (
    <div
      className="
    absolute flex
    lg:w-[1418px] lg:h-[720px] lg:top-[2760px] lg:-left-[50px] lg:flex-row lg:gap-8 lg:items-start
    md:w-[900px] md:h-[902px] md:top-[2685px] md:left-[62px] md:gap-[10px] md:flex-col-reverse md:items-center
    sm:w-[350px] sm:h-[441px] sm:top-[1519px] sm:left-[20px] sm:flex-col-reverse sm:items-center"
    >
      {/*--------------------------------------------------------------------------------------------*/}
      <div
        className="
      lg:w-[974px] lg:h-[720px] 
      md:w-[900px] md:h-[700px]
      sm:w-[350px] sm:h-[272px]"
      >
        <div
          className="
        absolute
        lg:w-[900px] lg:h-[600px] lg:top-[60px] 
        md:w-[810px] md:h-[540px] md:top-[257px] md:left-[33px]
        sm:w-[324px] sm:h-[216px] sm:top-[188px] sm:left-[17px]"
        >
          <div className="lg:h-[27px] md:h-[27px] sm:h-[9px] border border-[#1A202C] bg-[#1A202C] rounded-tl-[16px] rounded-tr-[16px]"></div>
          <img src={content} className="w-full" />
        </div>
        <div className="lg:w-[815px] md:w-[900px] sm:w-[350px]">
          <img src={layer_2} className="static" />
        </div>
      </div>

      {/*--------------------------------------------------------------------------------------------*/}

      <div
        className="
      flex flex-col
      lg:w-[412px] lg:px-0 lg:py-[150px] lg:gap-4 lg:text-start
      md:w-[720px] md:h-[192px] md:gap-4 md:text-center
      sm:w-[350px] sm:h-[165px] sm:gap-2 sm:text-center"
      >
        <div className="w-full">
          <h1
            className="
          font-bold text-[#555770]
          lg:text-[40px] lg:leading-[54px]
          md:text-[40px] md:leading-[54px]
          sm:text-[20px] sm:leading-[20px]"
          >
            <span className="text-[#06C270]">Pronunciation</span> Error
            Measurement
          </h1>
        </div>
        <div className="w-full">
          <p className="text-[#555770] font-normal leading-[24px] lg:text-[16px] md:text-[16px] sm:text-[14px]">
            Accurately track and measure pronunciation errors during dictation
            to provide actionable feedback and improve spoken English skills.
          </p>
        </div>
        <div>
          <button
            className="
          rounded-[4px] border border-[#8F90A6] tracking-[2px]
          lg:w-[240px] lg:h-[44px] lg:text-[14px]
          md:w-[240px] md:h-[44px] md:text-[14px]
          sm:w-[142px] sm:h-[36px] sm:text-[10px]"
          >
            START LEARNING
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection_04;
