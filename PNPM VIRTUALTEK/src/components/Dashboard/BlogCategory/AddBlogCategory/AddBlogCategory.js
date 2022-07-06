import {useLocation, useParams } from 'react-router-dom';
import { Form, Input, Button, Space, Card } from 'antd';
import { useAddBlogCategory, useEditBlogCategory } from '../../../../services/blogManagement';


const { TextArea } = Input
export default function AddBlogCategory({mode}){
    const params = useParams()

    const {mutate:addBlogCategory, isLoading:loadingAddBlogCategory} = useAddBlogCategory()
    const {mutate:editBlogCategory, isLoading:loadingEditBLogCategory} = useEditBlogCategory(params?.id)
    
    
    const location = useLocation()
    
    const addBlogCategoryFunc = (values)=>{
        
        if(mode === "create"){
            addBlogCategory(values)
            //crate mutation call
        }
        else{
            editBlogCategory(values)
        }
    }
    if(loadingAddBlogCategory || loadingEditBLogCategory){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <Card type="inner" title="Add Blog Category">
                <Form

                    layout="vertical"
                    autoComplete="off"
                    onFinish={addBlogCategoryFunc}
                    initialValues= {{
                        title:location?.state?.blogCat?.title || "",
                        description:location?.state?.blogCat?.description || "",
                    }}
                >
                    <Form.Item
                        name="title"
                        label="Blog Category Title"
                        rules={[{required:true, message:"Enter Category Title"}]}
                    >
                        <Input placeholder='Blog Category Title'></Input>
                    </Form.Item>
                  

                    <Form.Item
                        name="description"
                        label="Category Body"
                        rules={[{required:true, message:"Enter Body Category"}]}
                    >
                        <TextArea rows={4} placeholder='Category Body' />
                    </Form.Item>
                   
                   
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                            <Button htmlType="button">
                                Cancel
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}