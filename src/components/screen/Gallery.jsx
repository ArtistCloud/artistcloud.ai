/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesGallery } from "../../data/imagesGallery";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "0",
          padding: "0",
          position: "relative",
          top: "70px",
        }}
      >
        <ul className="gallery_slide flex justify-center items-center" style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  return (
    <section id="social-media" className="py-24 md:py-44 lg:py-[270px]  mb-16">
      <div className="container_fluid">
        <div className="block md:flex justify-between items-center mb-5 text-zinc-500 font-tommy_light">
          <h2 className="text-2xl md:text-[32px] uppercase">From Our Instagram</h2>
          <h2 className="text-2xl md:text-[32px]">@instausername</h2>
        </div>

        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] border border-r-2">
              {imagesGallery
                .sort((a, b) => a.id - b.id)
                .map(({ ImageSrc, id, react, comment }) => (
                  <div key={id} className="w-full h-[250px] sm:h-[380px] lg:h-[400px] group relative cursor-pointer">
                    <img src={ImageSrc} alt="" className="w-full h-full object-cover object-center" />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/60 hidden group-hover:flex items-center justify-center gap-x-4 text-white/80 duration-300 transition-all ease-in-out">
                      <div className="text-center">
                        <svg className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path
                            className="hover:fill-white"
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                          />
                        </svg>
                        <span>{react}</span>
                      </div>
                      <div className="text-center">
                        <svg className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <g transform="rotate(-90 12 12)">
                            <path
                              className="hover:fill-white"
                              fill="none"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1Z"
                            />
                          </g>
                        </svg>
                        <span className="">{comment}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] border border-r-2">
              {imagesGallery
                .sort((a, b) => b.id - a.id)
                .map(({ ImageSrc, id, react, comment }) => (
                  <div key={id} className="w-full h-[250px] sm:h-[380px] lg:h-[400px] group relative cursor-pointer">
                    <img src={ImageSrc} alt="" className="w-full h-full object-cover object-center" />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/60 hidden group-hover:flex items-center justify-center gap-x-4 text-white/80 duration-300 transition-all ease-in-out">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path
                            fill="white"
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                          />
                        </svg>
                        <span>{react}</span>
                      </div>
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <g transform="rotate(-90 12 12)">
                            <path
                              fill="none"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1Z"
                            />
                          </g>
                        </svg>
                        <span className="">{comment}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] border border-r-2">
              {imagesGallery
                .sort((a, b) => a.id - b.id)
                .map(({ ImageSrc, id, react, comment }) => (
                  <div key={id} className="w-full h-[250px] sm:h-[380px] lg:h-[400px] group relative cursor-pointer">
                    <img src={ImageSrc} alt="" className="w-full h-full object-cover object-center" />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/60 hidden group-hover:flex items-center justify-center gap-x-4 text-white/80 duration-300 transition-all ease-in-out">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path
                            fill="white"
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                          />
                        </svg>
                        <span>{react}</span>
                      </div>
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <g transform="rotate(-90 12 12)">
                            <path
                              fill="none"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1Z"
                            />
                          </g>
                        </svg>
                        <span className="">{comment}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} !hidden w-0 h-0 mr-0 xl:!inline-block xl:w-20 xl:h-20`} onClick={onClick}>
      <svg className="text-zinc-500 inline-block" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="m10 17l5-5l-5-5" />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} !hidden w-0 h-0 -ml-10 xl:!inline-block xl:w-20 xl:h-20`} onClick={onClick}>
      <svg className="text-zinc-500 inline-block" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="m14 7l-5 5l5 5" />
      </svg>
    </button>
  );
}
