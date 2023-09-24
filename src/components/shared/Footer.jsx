import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="pt-24 lg:pt-36 pb-10 bg-[#101010] text-white/80">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-32 mb-14 lg:mb-32">
          <div className="lg:col-span-2 space-y-4">
            <div className="sm:w-96 h-20">
              <img className="w-full h-full" src={logo} alt="" />
            </div>
            <p className="flex items-center text-base xl:text-[20px] gap-x-4">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144Zm0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64Z"
                  />
                </svg>
              </span>
              <span>12345 your address here, AB 12345</span>
            </p>
            <p className="flex items-center text-base xl:text-[20px] gap-x-4 ">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                  <path
                    fill="currentColor"
                    d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                    className="clr-i-outline clr-i-outline-path-1"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
              </span>
              <span>info@youremail.com</span>
            </p>
            <p className="flex items-center text-base xl:text-[20px] gap-x-4 ">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M6.857 2.445C8 3.278 8.89 4.415 9.65 5.503l.442.644l.417.615a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332l.663.459c1.239.86 2.57 1.837 3.588 3.14a1.47 1.47 0 0 1 .189 1.484c-.837 1.953-2.955 3.616-5.158 3.535l-.3-.017l-.233-.02l-.258-.03l-.281-.038l-.305-.05a11.66 11.66 0 0 1-.16-.03l-.336-.072a12.399 12.399 0 0 1-.176-.04l-.366-.094l-.385-.11l-.402-.13c-1.846-.626-4.189-1.856-6.593-4.26c-2.403-2.403-3.633-4.746-4.259-6.592l-.13-.402l-.11-.385l-.094-.366l-.078-.346a11.79 11.79 0 0 1-.063-.326l-.05-.305l-.04-.281l-.029-.258l-.02-.233l-.016-.3c-.081-2.196 1.6-4.329 3.544-5.162a1.47 1.47 0 0 1 1.445.159Zm8.135 3.595l.116.013a3.5 3.5 0 0 1 2.858 2.96a1 1 0 0 1-1.958.393l-.023-.115a1.5 1.5 0 0 0-1.07-1.233l-.155-.035a1 1 0 0 1 .232-1.983ZM15 3a6 6 0 0 1 6 6a1 1 0 0 1-1.993.117L19 9a3.998 3.998 0 0 0-3.738-3.991L15 5a1 1 0 1 1 0-2Z"
                    />
                  </g>
                </svg>
              </span>
              <span>(303) 690-9591</span>
            </p>
          </div>
          <div className="lg:col-span-3 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <h2 className="lg:col-span-2 uppercase font-bold text-[28px] font-tommy_bold">Lorem Ipsum</h2>
              <div className="flex flex-col text-white/80 lg:text-right font-tommy text-[20px]">
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
              </div>{" "}
              <div className="flex flex-col text-white/80 lg:text-right font-tommy text-[20px]">
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
              </div>{" "}
              <div className="flex flex-col text-white/80 lg:text-right font-tommy text-[20px]">
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
                <Link className="text-lg" to="/">
                  Lorem Ipsum
                </Link>
              </div>
            </div>

            <div className="mt-8 py-8 px-8 bg-white  rounded-lg">
              <div className="flex justify-between lg:items-center flex-col xl:flex-row gap-4 xl:gap-0">
                <h2 className=" text-black text-base font-tommy_bold font-extrabold leading-none">
                  LOREM IPSUM <br /> DOLOR SIT AMET
                </h2>
                <h2 className="bg-zinc-400 text-white rounded-lg py-2 px-5 text-[14px] font-tommy">Lorem ipsum dolor sit amet</h2>
                <button className="rounded-3xl text-white bg-[#101010] py-2 px-5 font-tommy_bold text-[20px]">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white/70 text-[18px]">© ACA, The Artist Cloud Agency. 2023</div>
      </div>
    </section>
  );
};

export default Footer;
