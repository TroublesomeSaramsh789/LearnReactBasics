import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom'

import BlogCategoryHome from '../BlogCategory/BlogCategory'
import { useGetSingleBlog } from '../../../services/WebsiteApisService'
import LoaderComp from '../../LoaderComp/LoaderComp'
import { getImageAbsoluteURL } from '../../../utils/string'

export default function BlogSingle() {
    const param = useParams()
    console.log(param.slug)
    const { isLoading, data } = useGetSingleBlog(param.slug)
    if (isLoading) {
        return <LoaderComp />
    }
    console.log("This is data", data?.data)
    return (
        <div>
            <Row>
                <Col lg={18}>
                    <div className='p-2 pl-6 pr-10'>
                    <div className='h-96 '>
                        <img className='h-full w-full object-cover' src={getImageAbsoluteURL(data?.data?.image)}></img>
                    </div>
                    <div className='mt-2'>
                        <p className='text-sm text-[#3f3d3de0]'>Updated At {data?.data?.updatedAt.substring(0,10)}   Author: {data?.data?.author}</p>
                        
                    </div>
                    <div dangerouslySetInnerHTML={{__html: `${data?.data?.content}`}}></div>
                    </div>
                   
                </Col>
                <Col lg={6}>
                    <BlogCategoryHome activeCategory={param} />
                </Col>
            </Row>
        </div>
    )
}