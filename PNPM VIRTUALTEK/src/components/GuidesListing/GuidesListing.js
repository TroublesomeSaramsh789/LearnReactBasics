import "./GuidesListing.scss"
import ListingPage from "../ListingPage/ListingPage"
import { ImageTextComponentListing } from "../home/BestSellingTrek/ImageTextComponent/ImageTextComponent"
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"

import ListingPageBg from "../../assets/listing_image.webp"


import { useGuideDetails } from "../../services/WebsiteApisService"
import LoaderComp from '../LoaderComp/LoaderComp'





export default function GuidesListing() {
    const { isLoading, data } = useGuideDetails()


    if (isLoading) {
        return (
            <LoaderComp />
        )
    }
    const listDatas = data?.data?.docs.map((guideData, index) => {
        return <ImageTextComponentListing key={index} guideName={guideData.fullName} guideGender={guideData.gender} imageUrl={guideData.profileImageUrl} isGuide={true} guideSlug = {guideData.slug} />
    })
    return (
        <div className="">
            <div>
                <HeaderImageComponent image={ListingPageBg} title={"Virtual Trek With These Guides"} />
                <ListingPage listDatas={listDatas} />
            </div>
        </div>
    )
}