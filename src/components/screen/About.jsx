/** @format */

import aboutImg from "../../assets/images/Asset 4-8.png";
import aboutImg2 from "../../assets/images/Asset 1-20.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-44 lg:py-72 bg-zinc-100/70">
      <div className="container_fluid">
        <div className="flex items-center gap-x-3 lg:gap-x-6 mb-12 font-tommy_bold text-3xl sm:text-5xl lg:text-[70px] uppercase">
          <svg className=" sm:-mt-1 lg:-mt-2 inline-block w-[32px] h-[32px] sm:w-[45px] sm:h-[45px] lg:w-[65px] lg:h-[65px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>{" "}
          <h2 className="">About Us</h2>
        </div>
        <div className="space-y-10 md:text-justify text-zinc-600 text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 xl:order-1">
              <p className="!leading-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci impedit soluta libero voluptatum nihil accusamus quidem vero veniam, alias fugit fuga quod quasi, nobis expedita est consequatur exercitationem molestiae! Ad dolorem modi voluptatum atque, quasi nulla corrupti minus veniam itaque consectetur velit eos assumenda eum, optio quaerat maiores sapiente?</p>
            </div>
            <div className=" w-full h-full order-1 xl:order-2">
              <img className="w-full h-full object-cover object-top" src={aboutImg2} alt="" />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="w-full h-full">
              <img className="w-full h-full" src={aboutImg} alt="" />
            </div>
            <div className="">
              <p className="!leading-[40px]">essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets. essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
