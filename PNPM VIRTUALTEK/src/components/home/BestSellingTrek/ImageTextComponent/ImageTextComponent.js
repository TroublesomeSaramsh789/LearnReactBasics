import "./ImageTextComponent.scss";
import { BsFillPinMapFill, BsClock } from 'react-icons/bs';
import TextButtonComponent from "../TextButtonComponent/TextButtonComponent";
import { getImageAbsoluteURL } from "../../../../utils/string";

export default function ImageTextComponent({ imageUrl, address, time, titleText, rating, price, crossedPrice, guideSlug, trekSlug }) {
    return (
        <div className=" col-sm-6 col-md-6 col-lg-4  imageTextMainDiv">
            <div className="cardBoxShadow">
                <div className="imageDiv imageDivCard">
                    <img src={imageUrl} alt="image" />
                    <div className="overlayDiv"></div>
                    <p className="address"><BsFillPinMapFill /> {address}</p>
                    <p className="time"><BsClock />{time}</p>
                </div>
                <TextButtonComponent titleText={titleText} rating={rating} price={price} crossedPrice={crossedPrice} trekSlug = {trekSlug}/>
            </div>
        </div>
    )
}

function ImageTextComponentListing({ guideName, guideGender, guidePP, imageUrl, address, time, titleText, rating, price, crossedPrice, isGuide, guideSlug, trekSlug, virtualTrek }) {
    return (
        <div className=" imageTextMainDiv">
            <div className="cardBoxShadow">
                <div className="imageDiv">
                    <div className="imageDivCard">
                        <img src={getImageAbsoluteURL(imageUrl)} alt="card-img" />
                        <div className="imageDivCardOverlay"></div>
                    </div>

                    {

                        !isGuide
                        &&
                        <>
                            <p className="address"><BsFillPinMapFill /> {address}</p>
                            <p className="time"><BsClock />{time}</p>
                        </>
                    }

                </div>
                <TextButtonComponent guideName={guideName} guideGender={guideGender} guidePP={guidePP} titleText={titleText} rating={rating} price={price} crossedPrice={crossedPrice} isGuide={isGuide} guideSlug={guideSlug} trekSlug = {trekSlug} virtualTrek = {virtualTrek} />
            </div>
        </div>
    )
}
export { ImageTextComponentListing }