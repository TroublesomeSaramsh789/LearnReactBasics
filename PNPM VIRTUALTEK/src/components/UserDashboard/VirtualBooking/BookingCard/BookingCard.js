import './BookingCard.scss'
import { Col, Row } from 'antd'
import { getImageAbsoluteURL } from "../../../../utils/string";

export default function BookingCard({ image, name, noOfTravellers, duration, startDate, endDate, status, trekPrice }) {
    return (
        <div className="bookingCardMain">
            {/* <img src = {getImageAbsoluteURL(image)}></img>
            <p>{name}</p>
            {startDate ?<p>{startDate.substring(0,10)}</p>:null}
            {endDate ?<p>{endDate.substring(0,10)}</p>:null} */}
            <Row>
                <Col lg={4}>
                    <div className='imageDivBooking'>
                        <img src={getImageAbsoluteURL(image)}></img>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
                <Col lg={19}>
                    <div className='textDetailDivBooking'>
                        <h5>{name}</h5>

                        {noOfTravellers ?
                            <p className='TopicBooking'>Number of traveler: <span className='textBooking'>{noOfTravellers}</span></p>
                            : null
                        }
                        {duration ?
                            <p className='TopicBooking'>Duration: <span className='textBooking'>{duration}</span></p>
                            : null
                        }
                        {startDate && endDate ?
                            <p className='TopicBooking'>Date: <span className='textBooking'>{startDate.substring(0,10)} to {endDate.substring(0,10)}</span></p>
                        :null}
                        <p className='TopicBooking'>Status: <span className='textBooking'>{status}</span></p>
                        <p className='TopicBooking'>Price: <span className='textBooking'>$ {trekPrice}</span></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}