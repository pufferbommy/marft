import whatWeProvide1 from '../assets/what-we-provide-1.png'
import whatWeProvide2 from '../assets/what-we-provide-2.png'
import whatWeProvide3 from '../assets/what-we-provide-3.png'

const WhatWeProvide = () => {
  return (
    <section className="py-[50px] xl:pb-[100px] xl:pt-[160px] bg-primary-cream px-[30px] lg:px-[54.5px]">
      <div className="flex flex-col mb-[50px] lg:mb-[70px] items-center">
        <h2 className="text-[65px] font-semibold tracking-tight leading-[54px]">
          What we provide
        </h2>
        <p className="max-w-[513px] mt-[15px] leading-[30px] text-[22px] font-medium text-primary-gray text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl
          tincidunt ut elementum turpis.
        </p>
      </div>
      <div className="max-w-[1170px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <div className="bg-[#EAE4DC] p-12">
          <div>
            <img
              className="w-[47px] h-[47px]"
              src={whatWeProvide1}
              alt="whatWeProvide1"
              loading="lazy"
            />
          </div>
          <h3 className="text-[42px] xl:text-[56px] mt-[24px] font-semibold tracking-tight leading-[44px]">
            Social advertising
          </h3>
          <p className="text-[22px] mt-[8px] xl:mt-[10px] leading-[30px] font-medium text-primary-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
            nisl tincidunt.
          </p>
          <a
            className="mt-[30px] text-[23px] font-bold decoration-1 underline inline-block underline-offset-2"
            href="#"
          >
            Learn More
          </a>
        </div>
        <div className="bg-[#EAE4DC] p-12">
          <div>
            <img
              className="w-[56px] h-[56px]"
              src={whatWeProvide2}
              alt="whatWeProvide2"
              loading="lazy"
            />
          </div>
          <h3 className="text-[42px] xl:text-[56px] mt-[24px] font-semibold tracking-tight leading-[44px]">
            Partnership Management
          </h3>
          <p className="text-[22px] mt-[10px] leading-[30px] font-medium text-primary-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
            nisl tincidunt.
          </p>
          <a
            className="mt-[30px] text-[23px] font-bold decoration-1 underline inline-block underline-offset-2"
            href="#"
          >
            Learn More
          </a>
        </div>
        <div className="bg-[#EAE4DC] p-12">
          <div>
            <img
              className="w-[60px] h-[60px]"
              src={whatWeProvide3}
              alt="whatWeProvide3"
              loading="lazy"
            />
          </div>
          <h3 className="text-[42px] xl:text-[56px] mt-[24px] font-semibold tracking-tight leading-[44px]">
            Content Creations
          </h3>
          <p className="text-[22px] mt-[8px] xl:mt-[10px] leading-[30px] font-medium text-primary-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
            nisl tincidunt.
          </p>
          <a
            className="mt-[30px] text-[23px] font-bold decoration-1 underline inline-block underline-offset-2"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhatWeProvide
