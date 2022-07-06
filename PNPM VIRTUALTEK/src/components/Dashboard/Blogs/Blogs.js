import { Tabs, Button } from 'antd';
import {Link} from 'react-router-dom'
import BlogDetails from './BlogsDetails/BlogDetails';

const { TabPane } = Tabs
const addBlogButton = <Button><Link to ="/dashboard/blogs/add">Add Blog</Link></Button>
export default function Blogs() {
    return (
        <div className='blogsDiv'>
            <Tabs defaultActiveKey="blogDetails" tabBarExtraContent={addBlogButton} >
                <TabPane
                    tab={"Blog Details"}
                    key="blogDetails"
                >
                    <BlogDetails/>
                </TabPane>
               
            </Tabs>

        </div>
    )
}