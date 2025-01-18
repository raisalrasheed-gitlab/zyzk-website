import { FaBars } from 'react-icons/fa6';
import { MdOutlineClose } from 'react-icons/md';
import { useContext } from 'react';
import { ButtonContext } from '../../context/button-context';
const NavButton = () => {
  const { check } = useContext(ButtonContext);
  console.log(check);
  return (
    <>
      {check ? (
        <FaBars className="md:hidden text-3xl text-gray-700" />
      ) : (
        <MdOutlineClose className="md:hidden text-3xl text-gray-700" />
      )}
    </>
  );
};
export default NavButton;
