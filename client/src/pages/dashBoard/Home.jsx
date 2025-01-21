import Navbar from '../../components/Navbar/navbar';
import Card from '../../components/ExpandCard/card';
import BlogCard from '../../components/BlogCard/blogcard';
import FooterBar from '../../components/FooterBar/footerBar';
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
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import icon5 from '../../assets/images/icon5.png';
import icon6 from '../../assets/images/icon6.png';
import Logomark from '../../assets/images/Logomark.png';
import Avatar from '../../assets/images/Avatar.png';
import AvatarGroup from '../../assets/images/AvatarGroup.png';
import Blog1 from '../../assets/images/Blog1.png';
import Blog2 from '../../assets/images/Blog2.png';
import Blog3 from '../../assets/images/Blog3.png';
import BlogAvatar1 from '../../assets/images/BlogAvatar.png';
import BlogAvatar2 from '../../assets/images/BlogAvatar2.png';
import BlogAvatar3 from '../../assets/images/BlogAvatar3.png';
const Home = () => {
  const data = [
    {
      head: 'Can I change my plan later?',
    },
    {
      head: 'What is your cancellation policy?',
    },
    {
      head: 'Can other info be added to an invoice?',
    },
    {
      head: 'How does billing work?',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="h-fit p-x-2 w-11/12 mx-auto flex flex-col items-center text-center gap-5 pb-10">
        <div className=" max-w-[360px] bg-red-50 sm:h-[32px] h-fit mt-20 rounded-2xl border-2 border-red-100 hover:bg-red-200 hover:text-black flex items-center justify-around text-red-400">
          <button className="tracking-tight bg-white rounded-xl border-2 border-red-100 sm:text-sm text-xs px-2 font-new">
            New feature
          </button>
          <h2 className="font-new sm:text-sm text-xs tracking-tight">
            Check out the team dashBoard
          </h2>
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
        <div className=" w-full xl:h-[836px]  flex flex-col  md:justify-center gap-14">
          <div className="text-center flex flex-col justify-center items-center gap-4">
            <h2 className="text-base text-[#E63F3A] font-semibold">Features</h2>
            <h1 className="text-3xl font-semibold tracking-tight leading-10">
              Analytics that feels like it’s from the future
            </h1>
            <div className="max-w-[700px]">
              <h2 className="text-xl text-[#475467]">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </h2>
            </div>
          </div>
          <div className=" w-full xl:h-[420px] h-fit flex justify-between flex-wrap gap-16 ">
            <div className="w-[384px] h-[178px] flex flex-col justify-between">
              <div className="flex justify-center ">
                <img
                  src={icon1}
                  className="w-14 h-14 border-2 p-4 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-semibold ">Share team inboxes</h2>
              <p className="text-[#475467] text-base">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
            <div className=" w-[384px] h-[178px]">
              <div className="flex justify-center ">
                <img src={icon2} className="w-16 h-16 p-1 rounded-xl" />
              </div>
              <h2 className="text-xl font-semibold ">
                Deliver instant answers
              </h2>
              <p className="text-[#475467] text-base">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
            <div className=" w-[384px] h-[178px]">
              <div className="flex justify-center ">
                <img src={icon3} className="w-16 h-16 p-1 rounded-xl" />
              </div>
              <h2 className="text-xl font-semibold ">
                Manage your team with reports
              </h2>
              <p className="text-[#475467] text-base">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>
            <div className="w-[384px] h-[178px]">
              <div className="flex justify-center ">
                <img src={icon4} className="w-16 h-16 p-1 rounded-xl" />
              </div>
              <h2 className="text-xl font-semibold ">Connect with customers</h2>
              <p className="text-[#475467] text-base">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
            <div className="w-[384px] h-[178px]">
              <div className="flex justify-center ">
                <img src={icon5} className="w-16 h-16 p-1 rounded-xl" />
              </div>
              <h2 className="text-xl font-semibold ">
                Connect the tools you already use
              </h2>
              <p className="text-[#475467] text-base">
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </p>
            </div>
            <div className="w-[384px] h-[178px]">
              <div className="flex justify-center ">
                <img src={icon6} className="w-16 h-16 p-1 rounded-xl" />
              </div>
              <h2 className="text-xl font-semibold ">
                Our people make the difference
              </h2>
              <p className="text-[#475467] text-base">
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[552px] bg-[#F9FAFB] flex flex-col justify-center gap-8 py-4">
          <div className="flex justify-center gap-2">
            <img src={Logomark} />
            <h2 className="font-bold text-2xl font-new tracking-widest">
              Sisyphus
            </h2>
          </div>
          <div className="flex justify-center">
            <h2 className="font-new w-[1126px] text-5xl font-medium tracking-tighter">
              We’ve been using Untitled to kick start every new project and
              can’t imagine working without it.
            </h2>
          </div>
          <div className="flex justify-center flex-col items-center gap-2">
            <img className="w-[64px]" src={Avatar} />
            <h2 className="text-lg font-semibold font-new">Candice Wu</h2>
            <h2 className="text-lg font-new text-[#475467]">
              Product Manager, Sisyphus
            </h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 xl:h-[94px] mt-5 mb-5">
            <h2 className="text-md font-new font-semibold md:text-4xl text-3xl ">
              Frequently asked questions
            </h2>
            <p className="text-lg  md:text-xl font-new text-[#475467]">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="xl:w-[768px] max-h-[610px]  grid gap-10 mt-4">
            <div className="max-h-[84px]">
              <Card
                className="border-t-0 xl:max-h-[84px] p-2 xl:p-0"
                head="Is there a free trial available?"
              />
            </div>
            {data.map(item => {
              return (
                <Card
                  className="border-t-2 xl:max-h-[84px] p-2 xl:p-0"
                  head={item.head}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5 bg-[#F9FAFB] w-full h-[300px] rounded-2xl flex flex-col items-center justify-center gap-4">
          <div>
            <img src={AvatarGroup} alt="" />
          </div>
          <h2 className="text-xl font-semibold font-new">
            Still have questions?
          </h2>
          <p className="text-lg font-new text-[#475467]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Button className="text-sm normal-case font-inter w-[134px] h-[48px] bg-[#E63F3A] tracking-wider">
            Get in touch
          </Button>
        </div>
        <div className="flex flex-col w-full gap-20">
          <div className="w-full min-h-[130px] mt-20 flex flex-col gap-4">
            <div className="flex justify-between px-10 ">
              <h2 className="text-[#E63F3A] text-base font-semibold">
                Our blog
              </h2>
              <Button className="bg-[#E63F3A] h-12 hidden md:block">
                View all posts
              </Button>
            </div>
            <h2 className="text-left px-10 text-4xl font-semibold font-new tracking-tight">
              Lastest blog posts
            </h2>
            <h3 className="text-left px-10 text-[#475467] text-xl text-new">
              Tool and strategies modern teams need to help their companies
              grow.
            </h3>
          </div>
          <div className="flex justify-around flex-wrap md:flex-nowrap md:flex-row items-center gap-16 xl:gap-0">
            <BlogCard
              img={Blog1}
              blogimg={BlogAvatar1}
              name="Design"
              head="UX review presentations"
              detail="How do you create compelling presentations that wow your colleagues and impress your managers?"
              proname="Olivia Rhye"
              date="20 Jan 2024"
            />
            <BlogCard
              img={Blog2}
              blogimg={BlogAvatar2}
              name="Product"
              head="Migrating to Linear 101"
              detail="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
              proname="Phoenix Baker"
              date="19 Jan 2024"
            />
            <BlogCard
              img={Blog3}
              blogimg={BlogAvatar3}
              name="Software Engineering"
              head="Building your API stack"
              detail="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
              proname="Lana Steiner"
              date="18 Jan 2024"
            />
          </div>
          <Button className="bg-[#E63F3A] h-12 md:hidden">
            View all posts
          </Button>
        </div>
        <div className="h-[373px] bg-[#F9FAFB] w-full font-new flex flex-col justify-center items-center gap-6 mt-14">
          <h1 className="text-4xl font-semibold tracking-tight">
            Start your free trial
          </h1>
          <h2 className="text-xl text-[#475467]">
            Join over 4,000+ startups already growing with Untitled.
          </h2>
          <div className="flex justify-center gap-8 flex-col w-full md:flex-row md:gap-10">
            <Button className="bg-white text-black text-md">Learn more</Button>
            <Button className="bg-[#E63F3A] text-md ">Get started</Button>
          </div>
        </div>
        <FooterBar />
      </div>
    </>
  );
};
export default Home;
