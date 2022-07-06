import { useGetVirtualBookingList } from "../../../services/WebsiteApisService"
import './VirtualBooking.scss'

import LoaderComp from '../../LoaderComp/LoaderComp'
import BookingCard from "./BookingCard/BookingCard"
export default function VirtualBooking(){
    const {isLoading, isError, data} = useGetVirtualBookingList()
    if(isLoading){
        <LoaderComp/>
    }
    if(data?.data?.docs.length <=0){
        return (
            <div className='virtualBookingMainDiv'>
                <h5>No Data Found</h5>
            </div>
        )
    }
    
    return (
        <div className="virtualBookingMainDiv">
        <h4>My Virtual Booking</h4>
        <br></br>
       {
           data?.data?.docs.map((bookingData, index)=>{
               return <BookingCard key={index} image = {bookingData?.trek?.sliderImages[0]} name={bookingData?.trek?.title} startDate = {bookingData?.startDate} endDate = {bookingData?.endDate} status = {bookingData?.status} trekPrice = {bookingData?.trek?.price}/>
           })
       }
       
        
        </div>
      
        )
}