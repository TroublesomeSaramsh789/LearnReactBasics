import './DestinationWishlist.scss'

import { Col, Row } from 'antd'
import { useGetDestinationWishList } from '../../../services/WebsiteApisService'
import LoaderComp from '../../LoaderComp/LoaderComp'
import { getImageAbsoluteURL } from '../../../utils/string'

export default function DestinationWishList() {

    const { isLoading, data } = useGetDestinationWishList()
    if (isLoading) {
        return <LoaderComp />
    }
    if (data?.data?.docs.length <= 0) {
        return (
            <h4> No data found</h4>
        )
    }
    return (
        <div className='destinationWishlistMain'>
            {
                data?.data?.docs.map((destinationdetail, index) => {
                    return (
                        <div key={index} className='destinationCardDetail'>
                            <Row>
                                <Col lg={4}>
                                    <div className='imageDivWishlist'>
                                        <img src={getImageAbsoluteURL(destinationdetail?.trek?.sliderImages[0])}></img>
                                    </div>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={19}>
                                    <h5>{destinationdetail?.trek?.title}</h5>
                                    <div className='textDetailDivWishlist'>
                                        {destinationdetail?.trek?.destination ? 
                                        <p className='TopicBookingWishlist'>Destination: <span className='textWishlist'>{destinationdetail?.trek?.destination}</span></p>
                                        :null}
                                        {destinationdetail?.trek?.duration ?
                                            <p className='TopicBookingWishlist'>Duration: <span className='textWishlist'>{destinationdetail?.trek?.duration}</span></p>
                                            : null}
                                        <p className='TopicBookingWishlist'>Price: <span className='textWishlist'>{destinationdetail?.trek?.price}</span></p>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                })
            }
        </div>
    )
}