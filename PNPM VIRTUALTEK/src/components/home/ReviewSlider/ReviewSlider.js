import Slider from "react-slick";

import TravellerReviewComponent from "../../AboutUs/TravellerReviews/TravellerReviewComponent/TravellerReviewComponent";
import { useGetTestomonial } from "../../../services/WebsiteApisService";
import LoaderComp from '../../LoaderComp/LoaderComp'
import Testomonial from "../Testomonial/Testomonial";



export default function ReviewSlider() {
    const {isLoading, data} = useGetTestomonial()
    if(isLoading){
        return <LoaderComp/>
    }
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    return (
        <div className="container">
            <div className="super_guides_carousel reviewMain">
                {/* <div className="reviewBackgroundWrap row">
                    <div className="col-md-7 col-lg-7 col-sm-7"></div>
                    <img src={ReviewBackground} className="col-md-5 col-lg-5 col-sm-5 reviewBgImage"></img>
                </div> */}
                <div className="sliderDiv mb-8">
                    <Slider {...settings} >
                        {data?.data?.docs.map((reviewDetail, index) => {
                            return <Testomonial key={index} text={reviewDetail.message} name={reviewDetail.fullName} post={reviewDetail.designation} image = {reviewDetail.image}/> 
                            
                       })}
                    </Slider>
                </div>

            </div>

        </div>

    )
}