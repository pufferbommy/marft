import aboutUs from '../assets/about-us.png'
import correct from '../assets/correct.svg'

const AboutUs = () => {
  return (
    <section className="bg-primary-black py-14 md:py-0 h-auto md:h-screen lg:h-[889px] grid place-content-center px-[30px] lg:px-[54.5px]">
      <div className="flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[100px]">
        <div>
          <img
            className="w-[300px] lg:w-[598.92px] object-contain lg:h-[653px]"
            src={aboutUs}
            alt="aboutUs"
          />
        </div>
        <div className="lg:w-[466px]">
          <h2 className="text-white  text-[52px] text-center lg:text-left lg:text-[65px] font-semibold leading-[54px]">
            Take your social media marketing to the next level
          </h2>
          <div className="flex justify-center lg:justify-start">
            <ul className="text-white flex flex-col gap-5 mt-[40px]">
              <li className="text-[22px] leading-[30px] font-semibold">
                <img
                  className="inline-block w-[24px] h-[24px] mr-[13px]"
                  src={correct}
                  alt="correct"
                />
                Leo erat magna feugiat non enim
              </li>
              <li className="text-[22px] leading-[30px] font-semibold">
                <img
                  className="inline-block w-[24px] h-[24px] mr-[13px]"
                  src={correct}
                  alt="correct"
                />
                Leo erat magna feugiat
              </li>
              <li className="text-[22px] leading-[30px] font-semibold">
                <img
                  className="inline-block w-[24px] h-[24px] mr-[13px]"
                  src={correct}
                  alt="correct"
                />
                Leo erat magna non enim
              </li>
            </ul>
          </div>
          <p className="opacity-60 text-[22px] text-center lg:text-start font-medium text-white mt-[26px]">
            Leo erat magna feugiat pellentesque non enim eu donec diam. Proin donec
            lacus tortor posuere diam lorem massa viverra aliquam. Vitae nulla nullam
            in viverra lectus.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-white w-[160px] lg:w-[186px]
          h-[55px] lg:h-[70px] font-bold mt-10 text-[23px] grid place-content-center uppercase rounded-2xl"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
