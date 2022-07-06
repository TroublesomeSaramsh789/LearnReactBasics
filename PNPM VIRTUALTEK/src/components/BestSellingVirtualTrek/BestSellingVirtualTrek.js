import ListingPage from "../ListingPage/ListingPage"
import {ImageTextComponentListing} from "../home/BestSellingTrek/ImageTextComponent/ImageTextComponent"
import Footer from "../Footer/Footer"
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"

import ListingPageBg from "../../assets/listing_image.webp"
import { useVirtualTrekDetails } from "../../services/WebsiteApisService"
import LoaderComp from "../LoaderComp/LoaderComp"





export default function BestSellingVirtualTrek() {
    const {isLoading, data} = useVirtualTrekDetails()
    if(isLoading){
        <LoaderComp/>
    }
    let datas = data?.data?.docs || [] ;
    const listDatas = datas.map((virtualTrek, index)=>{
        return <ImageTextComponentListing key={index} imageUrl={virtualTrek?.sliderImages[0]} address={virtualTrek.destination} time={"NA"} titleText={virtualTrek?.title} rating={virtualTrek?.ratings} price={virtualTrek?.price} crossedPrice={virtualTrek?.strikePrice} trekSlug = {virtualTrek?.slug} virtualTrek = {true}/>
    })
    return (
        <div>
            <HeaderImageComponent image={ListingPageBg} title={"Best Selling Virtual Trek"} />
            <ListingPage listDatas={listDatas} />
            <Footer/>
        </div>
    )
}