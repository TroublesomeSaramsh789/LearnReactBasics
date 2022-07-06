import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import CARD_IMAGE from "../../../assets/card_image.webp";

import LiveCard from "../../liveCard/LiveCard";

const lives = [
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
  {
    id: 1,
    image: CARD_IMAGE,
    title: "Everest Base Camp Trek From Kathmandu",
    price: 1200,
    discounted_price: 1000,
    link: "#!",
  },
];

const PrevArrowBtn = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "auto",
        width: "auto",
        zIndex: 99,
        top: "105%",
        left: "0",
        transform: "translate(0%, 0%)"
      }}
    >
      <button
        onClick={onClick}
        className="text-[#0C64A2]"
      >
        <FaArrowAltCircleLeft size={32} className="inline-block" />
      </button>
    </div>
  );
};

const NextArrowBtn = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
          ...style,
          height: "auto",
          width: "auto",
          zIndex: 99,
          top: "105%",
          right: "0",
          transform: "translate(0%, 0%)"
      }}
    >
      <button onClick={onClick} className="text-[#0C64A2]">
        <FaArrowAltCircleRight size={32} />
      </button>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrowBtn />,
  nextArrow: <NextArrowBtn />,
  centerMode: true,
  centerPadding: "50px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function OngoingLive() {
  return (
    <div className="container">
      <h1 className="mb-4 text-[#314651] text-3xl font-bold">Ongoing Live</h1>
      <div className="ongoing_live_slider">
        <Slider {...settings}>
          {lives.map((live, index) => (
            <div key={index}>
              <LiveCard
                image={CARD_IMAGE}
                title={live.title}
                price={live.price}
                discounted_price={live.discounted_price}
                link={live.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
