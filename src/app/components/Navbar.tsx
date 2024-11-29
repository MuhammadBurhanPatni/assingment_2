export default function Navbar() {
    return (
      <div>
        <div id='container' className="w-[1322px] h-[91px] absolute left-[59px]">
          <div id="navbarstyle2" className="w-[1322px] h-[91px]">
            <div id="brand" className="w-[187px] h-[58px] absolute top-[17px] left-[136px]">
              <h3 className="w-[159px] h-[32px] absolute top-[13px] font-montserrat font-bold text-[24px] leading-8 tracking-[0.1px] text-white">BrandName</h3>
            </div>
  
            <div id="collapsed" className="w-[815px] h-[58px] absolute top-4 left-[364px] flex items-center justify-between">
              <div id="navbar-nav2" className="w-[275px] h-[24px] flex justify-between gap-[21px]">
                <ul className="flex justify-between w-full">
                  <li className="w-[43px] h-[24px] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-white">Home</li>
                  <li className="w-[59px] h-[24px] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-white">Product</li>
                  <li className="w-[52px] h-[24px] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-white">Pricing</li>
                  <li className="w-[58px] h-[24px] font-montserrat font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-white">Contact</li>
                </ul>
              </div>
  
              <div id='navbar-nav1' className="w-[189px] h-[52px] flex gap-[45px] items-center">
                <button className="w-[41px] h-[22px] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-right text-white ">
                  Login
                </button>
                <div id="nav-item-2" className="w-[214px] h-[52px]">
                  <button className="w-[110px] h-[52px] rounded-[5px] pt-[15px] pr-[25px] pl-[25px] pb-[15px] bg-[#23A6F0] gap-[15px]">
                    <p className="w-[61px] h-[22px] text-[14px] text-white font-montserrat font-bold leading-[22px] tracking-[0.2px] whitespace-nowrap">
                      JOIN US
                    </p>
                  </button>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
  