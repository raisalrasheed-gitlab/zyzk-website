const BlogCard = ({ img, blogimg, name, head, detail, proname, date }) => {
  return (
    <>
      <div className="w-[384px] h-[444px]  text-left font-new flex flex-col gap-4">
        <img className="h-[240px] bg-center bg-cover" src={img}></img>
        <h2 className="text-sm font-semibold text-[#E63F3A]">{name}</h2>
        <h1 className="text-2xl font-semibold">{head}</h1>
        <h2 className="text-[#475467] text-base ">{detail}</h2>
        <div className="flex items-center gap-4">
          <img src={blogimg} alt="" />
          <div>
            <h2 className="text-sm font-semibold ">{proname}</h2>
            <h3 className="text-sm text-[#475467]">{date}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
