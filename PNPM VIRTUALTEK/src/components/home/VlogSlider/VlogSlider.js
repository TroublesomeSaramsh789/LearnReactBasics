import "./VlogSlider.scss"

import Slider from "react-slick";
import { getImageAbsoluteURL } from '../../../utils/string'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   swipeToSlide: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };
export default function VlogSlider({ fromPhotoVideo, videoArray, content}) {
  var photoVideoWrap = {}
  var mainWrap = {}
  if (fromPhotoVideo === true) {
    photoVideoWrap = { border: "1px solid #84cbec" }
    mainWrap = { marginTop: "0" }
  }
  return (
    <div className="container mt-20 " style={mainWrap}>
      <div className="mainSlider super_guides_carousel" style={photoVideoWrap}>
        {videoArray ? (
          <Slider {...settings}>
            {videoArray.map((content, index) => {
              return (
                <embed
                  className="video-slider"
                  key={index}
                  width="100%"
                  height="auto"
                  allowfullscreen
                  src={`https://youtube.com/embed/${content}`}
                ></embed>
              );
            })}
          </Slider>
        ) : (
          <Slider {...settings}>
            {content?.map((content, index) => {
              return (
                <div key={index} className="imageDivSlider">
                  <img src={getImageAbsoluteURL(content)} alt="slider-img" />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
}