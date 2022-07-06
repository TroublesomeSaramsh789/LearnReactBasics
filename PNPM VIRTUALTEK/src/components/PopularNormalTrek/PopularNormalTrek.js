import ListingPage from "../ListingPage/ListingPage"
import { ImageTextComponentListing } from "../home/BestSellingTrek/ImageTextComponent/ImageTextComponent"
import Footer from "../Footer/Footer"
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"

import EverestImage from "../../assets/card_image2.webp"
import ListingPageBg from "../../assets/listing_image.webp"


const PopularNormalTrekDatas = [
    { imageUrl: EverestImage, address: "Everest Basee Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
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



export default function PopularNormalTrek() {
    

    const listDatas = PopularNormalTrekDatas.map((PopularNormalTrekData, index) => {
        return <ImageTextComponentListing key={index} imageUrl={PopularNormalTrekData.imageUrl} address={PopularNormalTrekData.address} time={PopularNormalTrekData.time} titleText={PopularNormalTrekData.titleText} rating={PopularNormalTrekData.rating} price={PopularNormalTrekData.price} crossedPrice={PopularNormalTrekData.crossedPrice} />
    })
    return (
        <div>
            <HeaderImageComponent image={ListingPageBg} title={"Popular Normal Trek"} />
            <ListingPage listDatas={listDatas} />
            <Footer />
        </div>
    )
}