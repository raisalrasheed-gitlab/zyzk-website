import Logo from '../../assets/images/zyzkLogo.png';
const FooterBar = () => {
  return (
    <>
      <div className="w-full min-h-[480px]  font-new flex flex-col gap-10 justify-center">
        <div className="min-h-[240px]  grid md:grid-cols-6 text-left p-5 grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold text-[#667085]">Product</h1>
            <h2 className="tetx-base font-semibold">Overview</h2>
            <h2 className="tetx-base font-semibold">Features</h2>
            <h2 className="tetx-base font-semibold">Solutions</h2>
            <h2 className="tetx-base font-semibold">Tutorials</h2>
            <h2 className="tetx-base font-semibold">Pricing</h2>
            <h2 className="tetx-base font-semibold">Releases</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold text-[#667085]">Company</h1>
            <h2 className="tetx-base font-semibold">About us</h2>
            <h2 className="tetx-base font-semibold">Careers</h2>
            <h2 className="tetx-base font-semibold">Press</h2>
            <h2 className="tetx-base font-semibold">News</h2>
            <h2 className="tetx-base font-semibold">Media kit</h2>
            <h2 className="tetx-base font-semibold">Contact</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold text-[#667085]">Resources</h1>
            <h2 className="tetx-base font-semibold">Blog</h2>
            <h2 className="tetx-base font-semibold">Newsletter</h2>
            <h2 className="tetx-base font-semibold">Events</h2>
            <h2 className="tetx-base font-semibold">Help center</h2>
            <h2 className="tetx-base font-semibold">Tutorials</h2>
            <h2 className="tetx-base font-semibold">Supprots</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold text-[#667085]">Use cases</h1>
            <h2 className="tetx-base font-semibold">Startups</h2>
            <h2 className="tetx-base font-semibold">Enterprise</h2>
            <h2 className="tetx-base font-semibold">Government</h2>
            <h2 className="tetx-base font-semibold">SaaS center</h2>
            <h2 className="tetx-base font-semibold">Marketplaces</h2>
            <h2 className="tetx-base font-semibold">Ecommerce</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold text-[#667085]">Social</h1>
            <h2 className="tetx-base font-semibold">Twitter</h2>
            <h2 className="tetx-base font-semibold">LinkedIn</h2>
            <h2 className="tetx-base font-semibold">Facebook</h2>
            <h2 className="tetx-base font-semibold">GitHub</h2>
            <h2 className="tetx-base font-semibold">AngelList</h2>
            <h2 className="tetx-base font-semibold">Dribble</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-semibold text-[#667085]">Legal</h1>
            <h2 className="tetx-base font-semibold">Terms</h2>
            <h2 className="tetx-base font-semibold">Privacy</h2>
            <h2 className="tetx-base font-semibold">Cookies</h2>
            <h2 className="tetx-base font-semibold">Licenses</h2>
            <h2 className="tetx-base font-semibold">Settings</h2>
            <h2 className="tetx-base font-semibold">Contact</h2>
          </div>
        </div>
        <div className="w-full min-h-[64px] px-10 flex md:items-end md:justify-between flex-col md:flex-row justify-start text-left items-start gap-5">
          <img src={Logo} />
          <h2 className="text-lg text-[#667085]">
            © 2077 zysktechnologies. All rights reserved.
          </h2>
        </div>
      </div>
    </>
  );
};
export default FooterBar;
