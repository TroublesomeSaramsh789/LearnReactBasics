import './NormalBooking.scss'
import { useGetNormalBookingList } from "../../../services/WebsiteApisService"
import LoaderComp from '../../LoaderComp/LoaderComp'
import BookingCard from '../VirtualBooking/BookingCard/BookingCard'

export default function NormalBooking(){
    const {isLoading, isError, data} = useGetNormalBookingList()
    if(isLoading){
        <LoaderComp/>
    }
    if(data?.data?.docs.length <=0){
        return (
            <div className='normalBookingMainDiv'>
                <h5>No Data Found</h5>
            </div>
        )
    }
    return (
        <div className="normalBookingMainDiv">
        <h4>My Normal Booking</h4>
        <br></br>
       {
           data?.data?.docs.map((bookingData,index)=>{
               return <BookingCard key={index} image = {bookingData?.trek?.sliderImages[0]} name={bookingData?.trek?.title}   status = {bookingData?.status} trekPrice = {bookingData?.trek?.price} duration = {bookingData?.trek?.duration}/>
           })
       }
       
        
        </div>
    )
}