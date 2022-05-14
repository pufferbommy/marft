import whatWeProvide1 from '../assets/what-we-provide-1.png'
import whatWeProvide2 from '../assets/what-we-provide-2.png'
import whatWeProvide3 from '../assets/what-we-provide-3.png'

const WhatWeProvide = () => {
  return (
    <div>
      <div className="flex flex-col mb-[70px] items-center">
        <h2 className="text-[65px] font-semibold tracking-tight leading-[54px]">
          What we provide
        </h2>
        <p className="max-w-[513px] mt-[15px] leading-[30px] text-[22px] font-medium text-primary-gray text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl
          tincidunt ut elementum turpis.
        </p>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-[#EAE4DC] p-12">
          <div>
            <img src={whatWeProvide1} alt="whatWeProvide1" />
          </div>
          <h3 className="">Social advertising</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
            nisl tincidunt.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default WhatWeProvide
