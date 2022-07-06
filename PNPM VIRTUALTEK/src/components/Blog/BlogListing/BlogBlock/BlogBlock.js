import {Link} from 'react-router-dom'

import './BlogBlock.scss'
import { getImageAbsoluteURL } from '../../../../utils/string'

export default function BlogBlock({category,  image, publishDate, title, shortDescription, slug }) {
    return (
        <div className="blogBlockHome">
                <div className='imageDivblogBlockHome'>
                        <img src={getImageAbsoluteURL(image)} alt="" />
                        <div className='imageDivblogBlockHomeOverlay'></div>
                        <p className='categoryInImage'>{category}</p>
                </div>
                <div className='datePublishedBlogHome'>
                    <p>Published on: {publishDate.substring(0,10)}</p>
                </div>
                <div className='titleBlogHome'>
                    <p>{title}</p>
                </div>
                <div className='shorDescBlogHome'>
                    <p>{shortDescription.substring(0,200)} ...</p>
                </div>
                <div className='titleBlogHome'>
                    <Link to={`/blog/${slug}`}><p>Read More</p></Link>
                </div>
        </div>
    )
}