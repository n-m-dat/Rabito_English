import devices from "../images/Devices.png";

const LandingSection_01 = () => {
  return (
    <div className="max-w-full lg:w-[808px] lg:h-[743px] md:w-[900px] md:h-[759px] sm:w-[350px] sm:h-[354px] flex flex-col px-6 gap-6 absolute top-[112px] sm:top-[72px] lg:left-[297px] md:left-[69px] sm:left-[20px] mx-auto">
      {/*-----TITLE-----*/}
      <div className="w-full max-w-[700px] mx-auto font-bold">
        <h5 className="lg:h-[180px] md:h-[180px] sm:h-[80px] lg:text-[64px] md:text-[64px] sm:text-[28px] lg:leading-[77.5px] md:leading-[64px] sm:leading-[34px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4BD9FF] to-[#06C270] lg:mt-10 md:mt-10">
          Watch, Listen, Learn Fluent English Awaits
        </h5>
      </div>
      {/*-----BUTTON-----*/}
      <div className="lg:w-[240px] md:w-[240px] sm:w-[200px] lg:h-[56px] md:h-[56px] sm:h-[44px] bg-[#06C270] px-5 mx-auto rounded-[4px] flex">
        <button className="mx-auto text-white lg:text-[20px]  md:text-[20px] sm:text-[14px] font-semibold leading-[28px]">
          JOIN FOR FREE
        </button>
      </div>
      {/*-----IMAGE-----*/}
      <div className="h-auto mx-auto">
        <img
          src={devices}
          className="w-full max-w-[1000px] mx-auto"
          alt="Devices"
        />{" "}
        {/* Adjusted max-w */}
      </div>
    </div>
  );
};

export default LandingSection_01;
