import facebook from '../assets/facebook.svg'
import basketball from '../assets/basketball.svg'
import instagram from '../assets/instagram.svg'

const Header = () => {
  return (
    <header className="bg-primary-cream">
      <div className="flex max-w-[1438.5px] mx-auto justify-between px-[30px] lg:px-[54.5px] items-center border-b-2 h-[100px]">
        <nav className="text-primary-gray hidden lg:block">
          <ul className="flex flex-row gap-10 font-medium text-[22px]">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
        <div className="text-[40px] mr-40 text-primary-black font-bold">
          Marft<span className="text-primary-orange">.</span>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-5">
            <li className="w-10 h-10 border border-primary-black border-opacity-10 rounded-full grid place-content-center cursor-pointer">
              <img src={facebook} alt="facebook" />
            </li>
            <li className="w-10 h-10 border border-primary-black border-opacity-10 rounded-full grid place-content-center cursor-pointer">
              <img className="w-4 h-4" src={basketball} alt="basketball" />
            </li>
            <li className="w-10 h-10 border border-primary-black border-opacity-10 rounded-full grid place-content-center cursor-pointer">
              <img className="w-4 h-4" src={instagram} alt="instagram" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
