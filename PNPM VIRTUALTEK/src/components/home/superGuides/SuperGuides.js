import Slider from "react-slick";
import { FaFacebook, FaInstagram, FaEnvelope, FaStar } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import SUPER_GUIDE_1 from "../../../assets/super_guide_1.jpg";
import SUPER_GUIDE_2 from "../../../assets/super_guide_2.jpg";

const guides = [
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    hire_me_link: "#!",
    main_image: SUPER_GUIDE_1,
    sub_images: [SUPER_GUIDE_2, SUPER_GUIDE_2, SUPER_GUIDE_2],
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    hire_me_link: "#!",
    main_image: SUPER_GUIDE_1,
    sub_images: [SUPER_GUIDE_2, SUPER_GUIDE_2, SUPER_GUIDE_2],
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    hire_me_link: "#!",
    main_image: SUPER_GUIDE_1,
    sub_images: [SUPER_GUIDE_2, SUPER_GUIDE_2, SUPER_GUIDE_2],
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    hire_me_link: "#!",
    main_image: SUPER_GUIDE_1,
    sub_images: [SUPER_GUIDE_2, SUPER_GUIDE_2, SUPER_GUIDE_2],
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function SuperGuides() {
  return (
    <div className="container mt-24">
      <h2 className="mb-4 text-[#314651] text-3xl font-bold">Super Guides</h2>
      <div className="super_guides_carousel">
        <Slider {...settings}>
          {guides.map((guide, index) => (
            <div key={index}>
              <div className="h-full">
                <div className="md:flex md:space-x-10">
                  <div className="md:flex-[1]">
                    <img src={guide.main_image} alt="" className="w-full rounded-md" />
                  </div>
                  <div className="md:flex-[2]">
                    <div className="md:flex md:flex-row-reverse md:justify-end">
                      <div className="mt-3 flex space-x-4">
                        <a href="#!">
                          <FaFacebook size={20} className="text-[#FD578D]" />
                        </a>
                        <a href="#!">
                          <FaInstagram size={20} className="text-[#FD578D]" />
                        </a>
                        <a href="#!">
                          <FaEnvelope size={20} className="text-[#FD578D]" />
                        </a>
                      </div>
                      <div className="md:mr-8">
                        <p className="mt-2 text-xl font-medium text-[#0C64A2]">
                          Lorem Ipsum
                        </p>
                        <div className="flex space-x-2 text-[#FD578D]">
                          <FaStar size={18} />
                          <FaStar size={18} />
                          <FaStar size={18} />
                          <FaStar size={18} />
                          <FaStar size={18} />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 md:mt-6 md:max-w-lg text-[#535353] text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-6 text-xl font-medium text-[#0C64A2] md:text-center">
                      <a
                        href={guide.hire_me_link}
                        className="inline-flex justify-center items-center"
                      >
                        <span className="md:ml-24"
                          style={{
                            textShadow: "0 0 2px 10px #00000029",
                          }}
                        >
                          Hire Me
                        </span>
                        <span>
                          <BsArrowRight
                            size={20}
                            className="ml-2 inline-block"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="md:mt-8 hidden md:flex md:space-x-5">
                          {guide.sub_images.map((subImage, index) => (
                              <img key={index} src={subImage} alt="" className="h-32 rounded-md" />
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
