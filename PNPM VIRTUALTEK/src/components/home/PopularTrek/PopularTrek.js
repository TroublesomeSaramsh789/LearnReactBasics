import "./PopularTrek.scss"
import ImageTextComponent from '../BestSellingTrek/ImageTextComponent/ImageTextComponent'
import PopularImageBg from '../../../assets/abc_long.webp'
import { getImageAbsoluteURL } from "../../../utils/string"


export default function PopularTrek({latestVirtualTrek}) {
    return (
        <div className="container mt-20">
            <div className="popularMainWrapper">
                <div className="popularImgWrapper">
                    <img className="popularImg" src={PopularImageBg}></img>
                    <div className="popularImgOverlay"></div>
                    <div className="popularTrekTitleDiv">
                        <h1 className="popularImgText">Popular Treks</h1>
                    </div>

                </div>
                <div className="popularComponentWrapper row">
                    {latestVirtualTrek.map((content, index) => {
                        return <ImageTextComponent key={index} imageUrl={getImageAbsoluteURL(content?.sliderImages[0]) || null} address={content?.destination || ""} time={content.time} titleText={content?.title || ""} rating={content?.ratings || ""} price={content?.price || ""} crossedPrice={content?.strikePrice || ""} trekSlug = {content?.slug} />
                    })}
                </div>
            </div>

        </div>
    )
}