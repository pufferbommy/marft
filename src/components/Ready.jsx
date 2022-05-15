import waveTopLeft from '../assets/waveTopLeft.png'
import waveBottomRight from '../assets/waveBottomRight.png'
import GetStartedButton from './GetStartedButton'

const Ready = () => {
  return (
    <section className="bg-primary-black min-h-[589px] text-white relative grid place-content-center px-[30px] lg:px-[54.5px]">
      <div className="absolute pointer-events-none left-0 top-0">
        <img className="w-[269px] h-[239px]" src={waveTopLeft} alt="waveTopLeft" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[52px] lg:text-[82px] leading-[71px] tracking-tight font-semibold text-center">
          Ready to increase
          <br />
          your social media performance
        </h2>
        <p className="text-[22px] font-medium leading-[30px] text-center opacity-70 mt-[20px] max-w-[582px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl
          tincidunt ut elementum turpis.
        </p>
        <GetStartedButton />
      </div>
      <div className="absolute pointer-events-none right-0 bottom-0">
        <img
          className="w-[423px] h-[362px]"
          src={waveBottomRight}
          alt="waveTopLeft"
        />
      </div>
    </section>
  )
}

export default Ready
