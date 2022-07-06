import ListingPage from "../ListingPage/ListingPage"
import {ImageTextComponentListing} from "../home/BestSellingTrek/ImageTextComponent/ImageTextComponent"
import Footer from "../Footer/Footer"
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"

import EverestImage from "../../assets/card_image3.webp"
import ListingPageBg from "../../assets/listing_image.webp"

const PopularVirtualTrekDatas = [
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
    { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
]

const listDatas = PopularVirtualTrekDatas.map((PopularVirtualTrekData, index)=>{
    return <ImageTextComponentListing key={index} imageUrl={PopularVirtualTrekData.imageUrl} address={PopularVirtualTrekData.address} time={PopularVirtualTrekData.time} titleText={PopularVirtualTrekData.titleText} rating={PopularVirtualTrekData.rating} price={PopularVirtualTrekData.price} crossedPrice={PopularVirtualTrekData.crossedPrice} />
})

export default function PopularVirtualTrek() {
    
    return (
        <div>
             <HeaderImageComponent image={ListingPageBg} title={"Popular Virtual Trek"} />
            <ListingPage listDatas={listDatas} />
            <Footer/>
        </div>
    )
}