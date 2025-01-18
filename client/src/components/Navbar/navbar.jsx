import Logo from '../../assets/images/zyzkLogo.png';
import Profile from '../../assets/images/profile.png';
import { FaAngleDown } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavButton from '../NavButton/navbutton';
import { ButtonContext } from '../../context/button-context';
import { useState } from 'react';
const Navbar = () => {
  const [check, setCheck] = useState(true);

  return (
    <>
      <div className="bg-white h-20  flex  justify-between items-center lg:px-16 px-8  md:border-b-2 border-gray-300 z-1 top-0 sticky">
        <div className="flex gap-10 items-center">
          <img src={Logo} />
          <div
            className={`absolute top-20  left-0 md:py-0 py-10 px-16 md:px-0 md:bg-none w-full md:static bg-white ${
              check ? 'left-[-100%]' : 'left-0'
            }`}
          >
            <ul className=" flex flex-col md:flex-row md:gap-12 gap-16  text-base font-semibold leading-4 text-gray-700  cursor-pointer ">
              <li className="flex items-center hover:text-gray-900">Home</li>
              <li className="flex gap-2 items-center hover:text-gray-900">
                Products <FaAngleDown className="items-top" />
              </li>
              <li className="flex gap-2 items-center hover:text-gray-900">
                Resources
                <FaAngleDown />
              </li>
              <li className="flex items-center hover:text-gray-900">Pricing</li>
            </ul>
          </div>
        </div>
        <div>
          <a href="" className="hidden md:block">
            <img src={Profile} />
          </a>
          <span onClick={() => setCheck(!check)}>
            <ButtonContext.Provider value={{ check: check }}>
              <NavButton />
            </ButtonContext.Provider>
          </span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
