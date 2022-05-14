import stars from '../assets/stars.png'
import sampleProfile from '../assets/sample-profile.jpg'
import circleColors from '../assets/circle-colors.png'
import bigProfile from '../assets/big-profile.jpg'

const Testimonal = () => {
  return (
    <div className="px-[30px] flex justify-center py-[100px] lg:px-[54.5px]">
      <div className="flex items-center flex-row gap-[150px]">
        <div className="w-auto lg:w-[470px]">
          <div className="flex items-center gap-[15px]">
            <span className="font-semibold tracking-tight text-[20px]">4.00</span>
            <div>
              <img className="w-[87px] h-[15px]" src={stars} alt="stars" />
            </div>
          </div>
          <p className="text-[32px] lg:text-[42px] font-semibold leading-[47px]">
            ”Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. In urna, non
            nisl tincidunt ut elementum st turpis.“
          </p>
          <div className="flex mt-[30px] items-end gap-[15px]">
            <div>
              <img
                className="w-[54px] h-[54px]"
                src={sampleProfile}
                alt="sampleProfile"
              />
            </div>
            <div>
              <p className="text-[22px] font-semibold leading-[30px]">Joe Elia</p>
              <p className="text-lg font-medium opacity-60 leading-[20px]">
                User Interface Design
              </p>
            </div>
          </div>
          <div className="mt-[58px] flex justify-end">
            <img
              className="w-[100px] h-[20px]"
              src={circleColors}
              alt="circleColors"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            className="w-[400px] object-contain h-[494px]"
            src={bigProfile}
            alt="bigProfile"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonal
