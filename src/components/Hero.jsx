import header1 from '../assets/header1.jpg'
import header2 from '../assets/header2.jpg'
import headerRating from '../assets/header-rating.png'

const Hero = () => {
  return (
    <section className="bg-primary-cream overflow-hidden h-[calc(100vh-100px)] px-[30px] lg:px-[54.5px]">
      <div className="flex flex-col md:flex-row justify-center items-center h-full gap-[75px] lg:gap-[130px]">
        <div>
          <h1 className="text-[72px] lg:text-[82px] font-semibold tracking-tight max-w-[470px] leading-[71px] text-center lg:text-left">
            Increase your performance on social media
          </h1>
          <p className="text-lg lg:text-[22px] text-primary-gray leading-[30px] mt-5 font-medium max-w-[370px] text-center mx-auto lg:mx-0 lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non
            nisl tincidunt ut elementum turpis.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-[20px] lg:gap-[35px] mt-10">
            <button className="bg-primary-or ange w-[150px] lg:w-[200px] h-[60px] lg:h-[70px] font-bold text-[23px] grid place-content-center rounded-2xl">
              Get Started
            </button>
            <div className="flex gap-2 items-center">
              <img
                className="w-[135px] h-[53.27px]"
                src={headerRating}
                alt="headerRating"
              />
              <div className="flex flex-col font-semibold">
                <p className="text-[12px] opacity-40 uppercase">Rating</p>
                <p className="text-lg leading-4">5.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col lg:flex-row gap-[14px]">
          <img
            className="object-cover rounded-2xl lg:rounded-none w-[300px] md:w-[278px] h-[225px] md:h-[653px]"
            src={header1}
            alt="header1"
          />
          <img
            className="object-cover rounded-2xl lg:rounded-none w-[300px] md:w-[278px] h-[225px] md:h-[653px]"
            src={header2}
            alt="header2"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
