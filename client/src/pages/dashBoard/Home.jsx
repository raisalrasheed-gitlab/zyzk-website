import Navbar from '../../components/Navbar/navbar';
import { LuArrowRight } from 'react-icons/lu';
import { Button } from '@material-tailwind/react';
import { FiPlayCircle } from 'react-icons/fi';
import CenterImage1 from '../../assets/images/MenuImage.png';
import CenterMobile from '../../assets/images/MenuMobile.png';
import CompanyLogo1 from '../../assets/images/companylogo1.png';
import CompanyLogo2 from '../../assets/images/companylogo2.png';
import CompanyLogo3 from '../../assets/images/companylogo3.png';
import CompanyLogo4 from '../../assets/images/companylogo4.png';
import CompanyLogo5 from '../../assets/images/companylogo5.png';
import CompanyLogo6 from '../../assets/images/companylogo6.png';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-fit border-2 w-11/12 mx-auto flex flex-col items-center text-center gap-5">
        <div className=" w-[355px] bg-red-50 h-[32px] mt-20 rounded-2xl border-2 border-red-100 flex items-center justify-around text-red-400">
          <button className="bg-white rounded-xl border-2 border-red-100 text-sm px-2">
            New feature
          </button>
          <h2>Check out the team dashBoard</h2>
          <LuArrowRight className="text-red-200 text-xl" />
        </div>
        <div>
          <h2 className="font-semibold md:text-5xl text-4xl leading-10 tracking-tight ">
            Beautiful analytics to grow smarter
          </h2>
        </div>
        <div className="max-w-[730px] md:min-h-16  mt-5">
          <h2 className="text-xl font-normal leading-7 text-[#475467]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </h2>
        </div>
        <div className=" md:flex grid items-center gap-2 w-full md:w-fit gap-y-4 mt-2">
          <Button className="order-2 md:order-1 w-full md:w-fit h-12 flex items-center justify-center bg-white text-black border-2 text-base font-semibold border-gray-400 rounded-3xl gap-2 normal-case">
            <FiPlayCircle className="text-xl" />
            Demo
          </Button>
          <Button className="order-1 md:order-2  w-full p-1 bg-[#E63F3A] rounded-3xl h-12 md:w-[105px] text-base  font-semibold normal-case">
            Sign up
          </Button>
        </div>
        <img
          className="w-full border-4 border-black rounded-3xl mt-10 hidden md:block"
          src={CenterImage1}
        />
        <img
          className="w-full border-4 border-black rounded-xl md:hidden mt-10"
          src={CenterMobile}
        />
        {/* companies partners */}
        <div className=" h-80 w-full flex flex-col items-center justify-center gap-10">
          <h2>Join 4,000+ companies already growing</h2>
          <div className="xl:flex  lg:justify-between grid grid-cols-2 gap-y-5 w-full ">
            <img
              className="bg-contain  w-32 2xl:w-40 h-12"
              src={CompanyLogo1}
            />
            <img
              className="bg-contain w-32 2xl:w-40  h-12"
              src={CompanyLogo2}
            />
            <img className="bg-contain w-32 2xl:w-40 h-12" src={CompanyLogo3} />
            <img
              className="bg-contain w-32 2xl:w-40  h-12"
              src={CompanyLogo4}
            />
            <img
              className="bg-contain w-32 2xl:w-40  h-12"
              src={CompanyLogo5}
            />
            <img
              className="bg-contain w-32 2xl:w-40  h-12"
              src={CompanyLogo6}
            />
          </div>
        </div>
        {/* features parts */}
      </div>
    </>
  );
};
export default Home;
