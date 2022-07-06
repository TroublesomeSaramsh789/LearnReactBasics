import ImageTextComponent from "./ImageTextComponent/ImageTextComponent"
import TitleComponent from "./TitleComponent/TitleComponent"
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton"


import {getImageAbsoluteURL} from  '../../../utils/string' 



// const bestSellingVirtualTrek = [
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" }
// ]
// const popularVirtualTrek = [
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
//     { imageUrl: EverestImage, address: "Everest Base Camp", time: "2N/3D", titleText: "Everest Base Camp Trek from Kathmandu", rating: "4.5", crossedPrice: "$1200", price: "$1000" },
// ]

export default function BestSellingTrek({popularNormalTrek}) {
    return (
        
        <>
           
            <>
                <TitleComponent title={"Popular Normal Trek"} />
            </>
            
            <div className="container mt-20 row ">
                {popularNormalTrek?.map((content, index) => {
                    return <ImageTextComponent key={index} imageUrl={getImageAbsoluteURL(content?.sliderImages[0] || null)} address={content?.destination|| ""} time={content?.duration || ""} titleText={content?.title ||""} rating={content?.ratings || ""} price={content?.price || ""} crossedPrice={content?.strikePrice || ""}  trekSlug = {content?.slug} />
                })}
            </div>
            <ShowMoreButton/>

            {/* <>
                <TitleComponent title={"Popular Virtual Trek"} buttonText={"Show more"} />
                <div className="container mt-20 row ">
                    {popularVirtualTrek.map((content, index) => {
                        return <ImageTextComponent imageUrl={content.imageUrl} address={content.address} time={content.time} titleText={content.titleText} rating={content.rating} price={content.price} crossedPrice={content.crossedPrice} />
                    })}
                </div>
                <ShowMoreButton/>
            </> */}
        </>

    )
}