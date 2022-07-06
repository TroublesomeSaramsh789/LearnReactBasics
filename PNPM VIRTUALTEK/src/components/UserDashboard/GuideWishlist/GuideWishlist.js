import { Row, Col } from 'antd'

import './GuideWishList.scss'
import GuideDetailCard from '../../GuideDetails/GuideDetailCard/GuideDetailCard'
import { useGetGuideWishList } from '../../../services/WebsiteApisService'
import LoaderComp from '../../LoaderComp/LoaderComp'
export default function GuidesWishList() {
    const { isLoading, data } = useGetGuideWishList()
    if (isLoading) {
        <LoaderComp />
    }
    const text = ["Hello worl", "world ", 'is ', 'the']
    return (
        <div className='guideWishlistMain'>
            <Row gutter={24}>

                {/* {
                    data?.data?.docs?.map((guide) => {
                        return (
                            <Col lg={8}>
                                <GuideDetailCard data={guide?.guide} />
                            </Col>
                        )
                    })
                } */}

                {text.map((item, index) => {

                    return (
                        <Col key={index} key={index} lg={8}>
                            <div className='guideDetailCardWishlist'>
                                <GuideDetailCard data={data?.data?.docs[0]?.guide} />
                            </div>

                        </Col>
                    )

                })}


            </Row>
        </div>
    )
}