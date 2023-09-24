import founderImg from "../../assets/images/Asset 2-20.jpg";
const Founder = () => {
  return (
    <section id="founder" className="py-24 md:py-44 lg:py-72">
      <div className="container_fluid">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16">
          <div className="w-full h-full">
            <img className="w-full h-full object-cover object-center" src={founderImg} alt="" />
          </div>
          <div className="xl:col-span-2 text-zinc-600 mt-5 xl:mt-0">
            <h2 className="text-3xl md:text-5xl lg:text-[70px] font-bold  uppercase mb-5 xl:mb-10 font-tommy_bold">JOHN DOE, FOUNDER</h2>
            <p className="text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium !leading-[40px] md:text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="mt-10 text-zinc-600">
          {" "}
          <p className="text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium !leading-[40px] md:text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
