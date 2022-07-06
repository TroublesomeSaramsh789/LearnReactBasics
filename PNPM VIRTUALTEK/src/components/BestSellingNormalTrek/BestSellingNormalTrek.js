import ListingPage from "../ListingPage/ListingPage"
import {ImageTextComponentListing} from "../home/BestSellingTrek/ImageTextComponent/ImageTextComponent"
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"


import ListingPageBg from "../../assets/listing_image.webp"
import LoaderComp from "../LoaderComp/LoaderComp"
import {useNormalTrekDetails} from '../../services/WebsiteApisService'



export default function BestSellingNormalTrek() {
    const { isLoading, data } = useNormalTrekDetails()
    
    if (isLoading) {
        <LoaderComp />
    }
    
    let datas = data?.data?.docs || [] ;
    const listDatas = datas.map((normalTrek, index)=>{
        
        return <ImageTextComponentListing key={index} imageUrl={normalTrek?.sliderImages[0]} address={normalTrek?.destination} time={normalTrek?.duration} titleText={normalTrek?.title} rating={normalTrek?.ratings} price={normalTrek?.price} crossedPrice={normalTrek?.strikePrice} trekSlug = {normalTrek?.slug} />
    })
    return (
        <div>
             <HeaderImageComponent image={ListingPageBg} title={"Best Selling Normal Trek"} />
            <ListingPage listDatas={listDatas} />
          
        </div>
    )
}