import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import "./DestinationDetails.scss"
import CarasouelPackage from "./CarasouelPackage/CarasouelPackage"
import BookDetailsComponent from "./BookDetailsComponent/BookDetailsComponent"
import { AiOutlineHeart } from "react-icons/ai"
import MenuItems from "./MenuItems/MenuItems"
import DestinationDetailsTable from "./DestinationDetailsTable/DestinationDetailsTable"
import PDFCard from "./PDFCard/PDFCard"
import ShareButton from "./ShareButtons/ShareButtons"
import CustomizedTripComponent from "./CustomizedTripComponent/CustomizedTripComponent"
import ChooseComponent from "./MenuComponents/ChooseComponent"
import PhotoVideoCardComponent from '../GuideDetails/PhotoVideoCardComponent/PhotoVideoCardComponent'
import { AuthContext } from '../../context/AuthContext'

import { useDestnationDetailsNormal, useAddWishlistTrek, useRemoveWishlistTrek } from '../../services/WebsiteApisService'
import LoaderComp from '../LoaderComp/LoaderComp'


const menuItems = ["Overview", "Itenary", "Frequently Asked Question", "Information", "Reviews"]

const similarTrips = [
    // { image: SimilarTripImage, text: "Annapurna Base Camp Trek" },
    // { image: SimilarTripImage, text: "Annapurna Base Camp Trek" },
    // { image: SimilarTripImage, text: "Annapurna Base Camp Trek" },
    // { image: SimilarTripImage, text: "Annapurna Base Camp Trek" },
]
export default function DestinationDetails({ mode }) {

    const [selectedMenu, setSelectedMenu] = useState(menuItems[0])

    const params = useParams()

    const { isLoading, isError, data } = useDestnationDetailsNormal(params.slug)

    const { mutate: addWishList, isLoading: addToWishlistLoading } = useAddWishlistTrek()
    const { mutate: removeWishList, isLoading: removeWishListLoading } = useRemoveWishlistTrek()

    const { profile } = useContext(AuthContext)

    if (isLoading || addToWishlistLoading || removeWishListLoading) {
        return <LoaderComp />
    }
   
    const handleWishlist = () => {

        if (!data?.data?.wishlisted) {
            addWishList(data?.data?._id || "")
        }
        else {
            removeWishList(data?.data?._id || "")
        }
    }
    return (
        <div className="destinationDetails">

            <CarasouelPackage data={data?.data || {}} />
            <div className="addWishButtonWrap" >
                <a onClick={() => { handleWishlist() }} className={`addWishButton ${data?.data?.wishlisted ? "wishlisted" : ""} ${profile?.userType === "User" ? "enableButton" : "disableButton"}`}  ><span className="wishSpanText">Add to WishList </span><AiOutlineHeart size={30} className="inline-block" /></a>
            </div>
            <div className="container mt-10">
                <BookDetailsComponent data={data?.data || {}} profile={profile}/>
                <div className="destinationMainWrap">
                    <div className="row">
                        <div className="col-md-7 col-lg-9">
                            <MenuItems menuItems={menuItems} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
                            <ChooseComponent menuItem={selectedMenu} menuItems={menuItems} data={data?.data} mode={mode} />
                        </div>
                        <div className="col-md-5 col-lg-3">
                            <DestinationDetailsTable tableData={data?.data?.normalGroup || {}} />
                            <PDFCard />
                            <ShareButton />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <CustomizedTripComponent />
                    </div>
                </div>
                <div className='photoVideoDiv'>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <PhotoVideoCardComponent data={data?.data || {}} />
                        </div>
                    </div>
                </div>
                <div className="similarTrip">
                    <div className='row'>
                        {similarTrips.map((similarTrip, index) => {
                            return (
                                <div key={index} className='similarTripComp col-md-6 col-lg-3'>
                                    <div className='similarTripImageWrap'>
                                        <img src={similarTrip.image} alt="" />
                                    </div>
                                    <div className='similarTripTitleWrap'>
                                        <p className="similarTripTitle">{similarTrip.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>


            </div>
        </div>
    )
}