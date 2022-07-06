import ImageTextComponent from "../../home/BestSellingTrek/ImageTextComponent/ImageTextComponent"
import { getImageAbsoluteURL } from "../../../utils/string"
export default function TravelInfoComponent ({trekData}){
   
    return (
        <ImageTextComponent imageUrl={getImageAbsoluteURL(trekData?.sliderImages[0] || null)} address={trekData?.destination|| ""} time={trekData?.duration || "NA"} titleText={trekData?.title ||""} rating={trekData?.ratings || ""} price={trekData?.price || ""} crossedPrice={trekData?.strikePrice || ""} />
    )
}