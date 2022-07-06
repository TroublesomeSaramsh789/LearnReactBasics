import { Button } from 'antd'
import { useGetPublicLive } from "../../../services/LiveService"
import LiveCard from '../../liveCard/LiveCard';
import { getImageAbsoluteURL } from '../../../utils/string';
import { Row, Col } from 'antd';

export default function LiveListing() {
    const { isLoading, data, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetPublicLive();
    return (
        <div>
            <Row>
                {data?.pages?.map((page) => {
                    return page?.data?.docs?.map((live, index) => {
                        return (
                            <Col key={index} xs={24} sm={24} md={12} lg={8} className="mb-4">
                                <LiveCard
                                    image={getImageAbsoluteURL(live.thumbnail)}
                                    title={live?.title}
                                    price={live?.price}
                                    discounted_price={live?.strikePrice}
                                    status={live?.status}
                                    id={live?._id}
                                />
                            </Col>
                        )
                    })
                })}
            </Row>
            <div className='loadMoreDiv'>
                <button disabled={!hasNextPage || isFetchingNextPage} >
                    {hasNextPage &&
                        <Button loading={isFetchingNextPage} onClick={fetchNextPage}>Load More</Button>
                    }
                </button>
            </div>
        </div>
    )
}