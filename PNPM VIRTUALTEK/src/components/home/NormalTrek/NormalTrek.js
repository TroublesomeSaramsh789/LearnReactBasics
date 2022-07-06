import ImageTextComponent from "../BestSellingTrek/ImageTextComponent/ImageTextComponent"
import TitleComponent from "../BestSellingTrek/TitleComponent/TitleComponent"
import { getImageAbsoluteURL } from "../../../utils/string"





export default function NormalTrek({ popularVirtualTrek }) {

    return (
        <>
            <>
                <TitleComponent title={"Popular Virtual Trek"} buttonText={"Show more"} />
            </>
            <div className="container mt-20 row ">
                {popularVirtualTrek.map((content, index) => {
                    return <ImageTextComponent key={index} imageUrl={getImageAbsoluteURL(content?.sliderImages[0]) || null} address={content?.destination || ""} time={content.time} titleText={content?.title || ""} rating={content?.ratings || ""} price={content?.price || ""} crossedPrice={content?.strikePrice || ""} trekSlug= {content?.slug} />
                })}
            </div>

            {/* <>
                <TitleComponent title={"Popular Normal Trek"} buttonText={"Show more"} />
                <div className="container mt-20 row ">
                    {popularNormalTrek.map((content, index) => {
                        return <ImageTextComponent imageUrl={content.imageUrl} address={content.address} time={content.time} titleText={content.titleText} rating={content.rating} price={content.price} crossedPrice={content.crossedPrice} />
                    })}
                </div>

            </> */}
        </>

    )
}