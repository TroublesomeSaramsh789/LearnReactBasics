import { Link } from 'react-router-dom'

import './BlogCategory.scss'

import { useBlogCategoryPublic } from '../../../services/blogManagement'
import LoaderComp from '../../LoaderComp/LoaderComp'

export default function BlogCategoryHome({activeCategory}) {
    const { isLoading, data } = useBlogCategoryPublic()
    if (isLoading) {
        return <LoaderComp />
    }
    // console.log(activeCategory)
    return (
        <div className='blogCategoryMain'>
            <p className='blogCatMainHead'>Category</p>
            <ul className='categoryListingHome'>
                
                <Link to="/blog"><li className={activeCategory?.slug ?"":"activeCategoryBlogHome"}>All</li></Link>
                {
                    data?.data?.docs?.map((blogCat,index) => {
                        return <Link key={index} to={`/blog/category/${blogCat.slug}`}><li className={activeCategory.slug == blogCat.slug ?'activeCategoryBlogHome':''}>{blogCat.title} ({blogCat.blogCount})</li></Link>
                    })
                }
            </ul>
        </div>
    )
}