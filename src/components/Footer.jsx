import facebook from '../assets/facebook.svg'
import basketball from '../assets/basketball.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <footer className="bg-primary-black flex flex-col items-center text-white px-[30px] lg:px-[54.5px]">
      <div className="flex flex-col mt-[76px] items-center">
        <div className="flex flex-col items-center">
          <div>
            <div className="text-[40px] font-bold">
              Marft<span className="text-primary-orange">.</span>
            </div>
          </div>
          <p className="mt-[13px] text-[20px] leading-[27px] opacity-70 max-w-[370px] text-center">
            Lorem ipsum dolor sit amet elit, sed do tempor solor ut dolore magna
          </p>
        </div>
        <nav className="mt-[28px]">
          <ul className="flex gap-5">
            <li className="w-10 h-10 border border-[#F3EFE4] border-opacity-10 rounded-full grid place-content-center cursor-pointer">
              <img src={facebook} className="invert" alt="facebook" />
            </li>
            <li className="w-10 h-10 border border-[#F3EFE4] border-opacity-10 rounded-full grid place-content-center cursor-pointer">
              <img className="w-4 invert h-4" src={basketball} alt="basketball" />
            </li>
            <li className="w-10 h-10 border border-[#F3EFE4] border-opacity-10 rounded-full grid place-content-center cursor-pointer">
              <img className="w-4 invert h-4" src={instagram} alt="instagram" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-[72px]">
        <h2 className="text-[48px] md:text-[56px] font-semibold leading-[70px] tracking-tight text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="text-[22px] leading-[30px] font-medium opacity-70 text-center mt-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center mt-[50px]">
          <input
            className="bg-transparent border outline-none border-white border-opacity-20 px-[32px] h-[80px] w-full md:w-[450px] text-[22px] font-medium rounded-tl-2xl rounded-bl-2xl"
            placeholder="Enter your mail"
            type="text"
          />
          <button className="px-[16px] md:px-[32px] h-[80px] uppercase text-[#F6D88C] -translate-x-[1px] border border-white border-opacity-20 rounded-tr-2xl rounded-br-2xl font-medium text-base md:text-[23px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-[40px] md:gap-[130px] mb-20 mt-[80px] md:mt-[136px]">
        <div>
          <h3 className="text-[22px] font-medium leading-[26px] opacity-60">
            DM us on:
          </h3>
          <p className="text-[36px] mt-[10px] leading-[30px] tracking-tight">
            info@marft.com
          </p>
        </div>
        <div>
          <h3 className="text-[22px] font-medium leading-[26px] opacity-60">
            Call us on:
          </h3>
          <p className="text-[36px] mt-[10px] leading-[30px] tracking-tight">
            (+1) 0139 2092 2033
          </p>
          <p className="text-[36px] mt-[10px] leading-[30px] tracking-tight">
            (+1) 0392 5938 000
          </p>
        </div>
        <div>
          <h3 className="text-[22px] font-medium leading-[26px] opacity-60">
            Find us:
          </h3>
          <p className="text-[36px] mt-[10px] leading-[30px] tracking-tight max-w-[290px]">
            767 5th Street, 21st Floor, New York, USA
          </p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#F3EFE4] opacity-10"></div>
      <div className="w-full py-[30px]">
        <div className="max-w-[1157px] flex justify-between mx-auto">
          <p className="font-medium text-[22px] leading-[32px] opacity-30">
            ©Marft 2021. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <a className="opacity-40 font-medium text-[22px]" href="#">
              Privacy Policy
            </a>
            <div className="text-[#F3EFE4] opacity-10">|</div>
            <a className="opacity-40 font-medium text-[22px]" href="#">
              Terms of Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
