import Slider from "react-slick";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import VIRTUAL_LOGO from "../../../assets/virtual_logo.png";
import {getImageAbsoluteURL} from '../../../utils/string'

const PrevArrowBtn = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} h-auto w-auto absolute z-[99] top-1/2 left-[22px] transform -translate-y-1/2`}
      style={style}
    >
      <button onClick={onClick} className="text-white transition-all">
        <IoChevronBack size={36} />
      </button>
    </div>
  );
};

const NextArrowBtn = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} h-auto w-auto absolute z-[99] top-1/2 right-[22px] transform -translate-y-1/2`}
      style={style}
    >
      <button onClick={onClick} className="text-white transition-all">
        <IoChevronForward size={36} />
      </button>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrowBtn />,
  nextArrow: <NextArrowBtn />,
};


export default function CarasouelPackage({data}) {

  return (
    <div className="home_carousel mb-10 relative">
      <Slider {...settings}>
        {data?.sliderImages?.map((slide, index) => (
          <div key={index} className="h-[70vh] lg:h-[calc(70vh-40px)]">
            <div className="h-full relative">
           
              <img
                src={getImageAbsoluteURL(slide)}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0000004D]" />
              <div className="max-w-lg text-white absolute top-1/2 left-1/2 lg:left-56 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2">
                <p className="text-base">{data?.country}</p>
                <h1 className="my-5 text-4xl font-bold text-white">
                  {slide.title}
                </h1>
                <p className="mb-4">{data?.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="hidden lg:block h-20 w-72 bg-white absolute bottom-0 left-0 logoClip"
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <span className="absolute top-1/2 left-[36%] -translate-y-1/2">
          <img src={VIRTUAL_LOGO} alt="logo" className="w-14" />
        </span>
      </div>
    </div>
  );
}
