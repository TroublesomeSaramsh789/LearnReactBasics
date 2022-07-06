import { Tabs, Button } from 'antd';
import {Link} from 'react-router-dom'
import BlogCategoryDetails from './BlogCategoryDetails/BlogCategoryDetails';
const { TabPane } = Tabs

export default function BlogCategory() {
    const addBlogCategoryButton = <Button><Link to ="/dashboard/blogCategory/add">Add Blog Category</Link></Button>
    
    return (
        <div className='blogCategoryDiv'>
            <Tabs defaultActiveKey="blogCategoryDetails" tabBarExtraContent={addBlogCategoryButton}>
                <TabPane
                    tab={"Blog Category Details"}
                    key="blogCategoryDetails"
                >
                    <BlogCategoryDetails/>
                </TabPane>
                
            </Tabs>

        </div>
    )
}