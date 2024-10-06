import download from "../images/appdownload.png";
import QRcode from "../images/QR.png";
import GoogleStore from "../images/Google store.png";
import AppleStore from "../images/Apple store.png";

const AppDownload = () => {
  return (
    <div
      className="absolute flex flex-row bg-gradient-to-br from-[#FDDD48] to-[#00B7C4] gap-4
    lg:w-[1440px] lg:h-[800px] lg:top-[3544px] 
    md:w-full md:h-[650px] md:top-[3651px]
    sm:w-[390px] sm:h-[280px] sm:top-[1950px]"
    >
      {/*----------------------------------------------------*/}

      <div className="lg:flex md:flex sm:hidden">
        <div
          className="
          lg:w-[599px] lg:h-[768px] lg:mt-8
          md:w-[486px] md:h-[626px] md:mt-[26px]"
        >
          <img src={download} />
        </div>

        {/*----------------------------------------------------*/}

        <div
          className="
          m-4 flex flex-col gap-4
          lg:w-[777px] lg:h-[736px] 
          md:w-[474px] md:h-[602px]"
        >
          <div className="lg:h-[136px] md:h-[88px]">
            <h1 className="lg:text-[56px] md:text-[32px] lg:leading-[67.77px] md:leading-[44px] font-bold">
              Take Your English Journey <br />
              <span className="text-gray-200">On the Go</span>
            </h1>
          </div>

          <div className="h-[34px] gap-[10px]">
            <p className="font-normal text-[14px] leading-[16.94px] tracking-[2px] text-[#28293D] uppercase">
              Keep learning, anytime, anywhere.
              <br /> Download the app now!
            </p>
          </div>

          {/*----------------------------------------------------*/}

          <div className="h-[534px] flex flex-col gap-[10px] justify-center">
            {/*---QR Code---*/}
            <div className="h-[240px] flex flex-col gap-4">
              <div>
                <h6 className="font-bold text-[16px] leading-[22px]">
                  SCAN QR-CODE TO DOWNLOAD:
                </h6>
              </div>
              <div>
                <img src={QRcode} className="w-[200px] h-[200px]" />
              </div>
            </div>
            {/*---Download now---*/}
            <div className="h-[111.96px] flex flex-col gap-4">
              <div className="h-[24px]">
                <h6 className="font-bold text-[16px] leading-[22px]">
                  DOWNLOAD NOW ON:
                </h6>
              </div>
              <div className="flex flex-row gap-4">
                <img src={GoogleStore} />
                <img src={AppleStore} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-----MOBILE VIEW-----*/}
      <div className="lg:hidden md:hidden sm:flex sm:flex-col">
        {/*-----TITLE-----*/}
        <div className="w-[350px] h-[96px] flex flex-col gap-1 mx-[20px] mt-[10px]">
          <div className="w-full h-[64px]">
            <h4 className="font-bold text-[24px] leading-[32px] text-center">
              Take Your English Journey <br />
              <span className="text-gray-200">On The Go</span>
            </h4>
          </div>
          <div className="w-full h-[24px]">
            <p className="font-normal text-[10px] leading-[12px] tracking-[2px] text-center text-[#28293D] uppercase">
              Keep learning, anytime, anywhere.
              <br />
              Download the app now!
            </p>
          </div>
        </div>

        {/*-----IMAGE-----*/}
        <div className="w-[378px] h-[160px] flex gap-6 mt-[13px]">
          {/*-----PHONE-----*/}
          <div className="w-[163px]">
            <img src={download} />
          </div>
          {/*-----DOWNLOAD INFO-----*/}
          <div className="w-[299px] flex flex-col gap-2 justify-center">
            <p className="font-semibold text-[10px] leading-[12px]">
              SCAN QR-CODE TO DOWNLOAD
            </p>
            <img src={QRcode} className="w-[48px] h-[48px]" />
            <p className="font-semibold text-[10px] leading-[12px]">
              DOWNLOAD NOW ON:
            </p>
            <div className="flex gap-4">
              <img src={GoogleStore} className="w-[80px] h-[26px]" />
              <img src={AppleStore} className="w-[80px] h-[26px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
