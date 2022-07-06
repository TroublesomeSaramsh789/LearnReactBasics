import { Row, Col, Button } from 'antd'
import BlogCategoryHome from '../BlogCategory/BlogCategory'
import BlogBlock from './BlogBlock/BlogBlock'
import LoaderComp from '../../LoaderComp/LoaderComp'
import { useBlogInfinite } from '../../../services/blogManagement'

import './BlogListing.scss'
import { useParams } from 'react-router-dom'

export default function BlogListing() {


    const param = useParams()

    const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useBlogInfinite(param.slug)

    if (isLoading) {
        return <LoaderComp />
    }

    return (
        <div className='blogListingHomeMain'>
            <Row>
                <Col lg={18}>
                    <Row>
                        {data?.pages?.map((page) => {
                            return page?.data?.docs.map((blogData,index) => {
                                return (
                                    <Col lg={12} key={index} >
                                        {!blogData?.publish ? null :
                                            <div className='blogBlockHome'>
                                                <BlogBlock slug={blogData.slug} category={blogData.category.title} image={blogData.image} shortDescription={blogData.shortDescription} publishDate={blogData.createdAt} title={blogData.title} />
                                            </div>

                                        }

                                    </Col>
                                )
                            })
                        })}
                    </Row>
                </Col>

                <Col lg={6}>
                    <div className='blogCategoryHomeDiv'>
                        <BlogCategoryHome activeCategory={param} />
                    </div>

                </Col>
            </Row>
            <div className='loadMoreDiv'>
                <button disabled={!hasNextPage || isFetchingNextPage} >
                    {hasNextPage &&
                        <Button loading={isFetchingNextPage} onClick={fetchNextPage}>Load More</Button>
                    }
                </button>
            </div>
        </div>)
}