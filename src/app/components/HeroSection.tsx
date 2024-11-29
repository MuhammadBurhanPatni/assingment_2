export default function HeroSection() {
    return (
      <div className="w-[1046px] h-[1028px] relative top-[104px] left-[197px] py-[80px] gap-[80px] flex flex-col items-center">
        {/* Hero Section Content */}
        <div className="w-[701px] h-[496px]">
          <div className="w-[699px] h-[496px] py-[40px] relative gap-[40px] flex flex-col items-center">
            <h5 className="w-[77px] h-[24px] font-montserrat font-bold leading-6 tracking-[0.1px] text-[#23A6F0]">
              Welcome
            </h5>
            <h1 className="w-[542px] h-[160px] font-montserrat font-bold text-[58px] tracking-[0.2px] leading-[80px] text-center text-white">
              Selling on the internet like a pro
            </h1>
            <h4 className="w-[536px] h-[60px] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center text-white">
              We know how large objects will act, but things on a small scale just do not act that way.
            </h4>
  
            <div className="w-[365px] h-[52px] relative gap-[10px] flex">
              <button className="w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] relative gap-[10px] bg-[#23A6F0]">
                <p className="w-[113px] h-[22px] font-montserrat font-bold leading-[22px] tracking-[0.2px] text-[14px] text-center text-white whitespace-nowrap">
                  Get Quote Now
                </p>
              </button>
              <button className="w-[162px] h-[52px] rounded-[5px] border border-[#23A6F0] py-[15px] px-[40px] relative gap-[10px]">
                <p className="w-[82px] h-[22px] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-center text-white whitespace-nowrap">
                  Learn More
                </p>
              </button>
            </div>
          </div>
        </div>
  
        {/* Courses Section */}
        <div className="w-[1046px] h-[292px] relative gap-[30px] flex">
          {/* First Course */}
          <div id="colmd-4" className="w-[328px] h-[292px] py-[35px] px-[40px] relative gap-[20px] bg-white flex flex-col">
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] py-[22px] px-[19px] relative gap-[10px]"></div>
            <h3 className="w-[135px] h-[24px] font-montserrat font-bold leading-[24px] tracking-[0.1px] text-[16px]">
              Training Courses
            </h3>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <p className="w-[222px] h-[60px] font-montserrat font-[400px] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>
          </div>
  
          {/* Second Course */}
          <div className="w-[329px] h-[292px]">
            <div className="w-[328px] h-[292px] py-[35px] px-[40px] relative gap-[20px] bg-white flex flex-col">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8] py-[22px] px-[19px] relative gap-[10px]"></div>
              <h3 className="w-[168px] h-[24px] font-montserrat font-bold leading-[24px] tracking-[0.1px] text-[16px]">
                2,769 online courses
              </h3>
              <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <p className="w-[222px] h-[60px] font-montserrat font-[400px] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                The gradual accumulation of information about atomic and small-scale behaviour...
              </p>
            </div>
          </div>
  
          {/* Third Course */}
          <div className="w-[329px] h-[292px]">
            <div className="w-[328px] h-[292px] py-[35px] px-[40px] relative gap-[20px] bg-[#23A6F0] flex flex-col">
              <div className="w-[70px] h-[76px] rounded-[10px] bg-white py-[22px] px-[19px] relative gap-[10px]"></div>
              <h3 className="w-[135px] h-[24px] font-montserrat font-bold leading-[24px] tracking-[0.1px] text-[16px] text-white">
                Training Courses
              </h3>
              <div className="w-[50px] h-[2px] bg-white"></div>
              <p className="w-[222px] h-[60px] font-montserrat font-[400px] text-[14px] leading-[20px] tracking-[0.2px] text-white">
                The gradual accumulation of information about atomic and small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  