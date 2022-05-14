import logos from '../assets/logos.png'

const TrustedCompany = () => {
  return (
    <section className="h-[454px] flex justify-center items-center px-[30px] lg:px-[54.5px]">
      <div className="flex items-center flex-col lg:flex-row gap-[50px] lg:gap-[130px]">
        <div className="flex items-center">
          <div className="h-32 md:h-36 bg-primary-orange min-w-[5px] mr-[30px]"></div>
          <div className="max-w-[314px]">
            <h2 className="text-[40px] font-semibold leading-[35px]">
              Trusted by over 10k&nbsp;clients & brands
            </h2>
            <p className="text-[22px] leading-[26px] mt-[10px] font-medium text-primary-gray">
              Lorem ipsum dolor sit amet, solor ut adipiscing elit.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full h-full lg:w-[696px] lg:h-[195px]"
            src={logos}
            alt="logos"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default TrustedCompany
