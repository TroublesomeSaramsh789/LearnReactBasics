import { useContext } from "react";
import "./GuideDetailCard.scss"
import { Rate, Button } from 'antd'
import { AiOutlineHeart } from 'react-icons/ai'
import { getImageAbsoluteURL } from "../../../utils/string"

import { useAddWishlistGuide, useRemoveWishlistGuide } from "../../../services/WebsiteApisService";
import { AuthContext } from "../../../context/AuthContext";
import LoaderComp from "../../LoaderComp/LoaderComp";

export default function GuideDetailCard({ data }) {
    const { mutate: addGuide, isLoading: addGuideLoading } = useAddWishlistGuide()
    const { mutate: removeGuideWishlist, isLoading: removeWishlistGuide } = useRemoveWishlistGuide()
    const { profile } = useContext(AuthContext)

    if (addGuideLoading || removeWishlistGuide) {
        return <LoaderComp />
    }

    const handleWishlistGuide = () => {

        if (!data?.wishlisted) {
            addGuide(data?._id || "")
        }
        else {
            removeGuideWishlist(data?._id || "")
        }
    }
    return (
        <div className="">
            <div className="guideDetailCardWarp">
                <div className="imageDivWrap">
                    <div className="imageDivGuideCard">
                        <img src={getImageAbsoluteURL(data?.profileImageUrl)} alt="guide Image" />
                    </div>
                </div>
                <div className="marginDivGC">
                    <div className="nameGenderDivGuideCard">
                        <p>{data?.fullName}</p>
                        <p>{data?.gender} , {"Nepal"}</p>
                    </div>

                    <div className="contactDivGC">
                        <p>{data?.contactNumber}</p>
                        <p>{data?.email}</p>
                    </div>
                    <div className="skillsDiv">
                        <p>Skill </p>
                        <p>{data?.skills}</p>
                    </div>
                    <div className="detailsDivGC">
                        {data?.quote}
                    </div>
                    {/* <div className="ratingDivGC">
                        <h6>Ratings</h6>
                        <Rate disabled className="ratingGC" value={data?.Ratings} />
                        <p>{data?.Ratings} stars from 160 reviews</p>
                    </div> */}
                    <div className="noOfTravels">
                        <h5>Number of travels</h5>
                        <p>200+</p>
                    </div>
                    <div className="buttonDivGC">
                        <Button  className= {`buttonGC ${data?.wishlisted ? "buttonDivGCWishlisted":""} ${profile?.userType=='User'?'enableButton' :'disabledButton'}`} onClick={() => { handleWishlistGuide() }} >Add To Wishlist <AiOutlineHeart className="inline-block ml-2 mb-1" size={20} /></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}