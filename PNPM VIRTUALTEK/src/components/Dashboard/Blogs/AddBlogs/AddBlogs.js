
import { Form, Input, Button, Upload, Space, Radio, Card, Select } from 'antd';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "./AddBlogs.scss";
import { normFile } from '../../../../services/normFile/normFile'
import ImageUploader from '../../../Form/ImageUploader';
import { useAddBlogs, useBlogCategory, useEditBlog } from '../../../../services/blogManagement';
import { getImageAbsoluteURL, getImageNameFromURI } from '../../../../utils/string';

const { Option } = Select;
const { TextArea } = Input;
export default function AddBlogs({ mode }) {


    const location = useLocation()
    const params = useParams()
    const { mutate: addBlogMutate, isLoading: loadingAddBlog, isSuccess: successAddBlog } = useAddBlogs()
    const { isLoading: blogCategoryLoading, data: blogCategoryData } = useBlogCategory()
    const { mutate: editBlog, isLoading: editBlogLoading } = useEditBlog(params?.slug)
    const addBlog = (values) => {

        if (values?.image?.[0]?.response) {

            values['image'] = values.image[0].response.data.path;
        } else {
            values['image'] = location?.state?.blog.image || ""
        }

        if (mode == "create") {
            addBlogMutate(values)
        }
        else {
            editBlog(values)
        }

    }

    if (blogCategoryLoading || loadingAddBlog || editBlogLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className='add-blogs'>
            <Card type="inner" title="Add Blogs">
                <Form

                    layout="vertical"
                    autoComplete="off"
                    onFinish={addBlog}
                    initialValues={{
                        author: location?.state?.blog.author || "",
                        title: location?.state?.blog.title || "",
                        category: location?.state?.blog?.category?._id || "",
                        content: location?.state?.blog.content || "",
                        publish: location?.state?.blog?.publish || false,
                        shortDescription: location?.state?.blog?.shortDescription || "",
                        image: location?.state?.blog?.image ? [{
                            uid: '-1',
                            name: getImageNameFromURI(location.state.blog.image),
                            status: 'done',
                            url: getImageAbsoluteURL(location.state.blog.image),
                        }
                        ] : []
                    }}
                >
                    <Form.Item
                        name="title"
                        label="Blog Title"
                        rules={[{ required: true, message: "Blog Title Required" }]}
                    >
                        <Input placeholder='Blog Title'></Input>
                    </Form.Item>
                    <Form.Item
                        name="author"
                        label="Blog Author"
                        rules={[{ required: true, message: "Blog Author R" }]}
                    >
                        <Input placeholder='Blog Author'></Input>
                    </Form.Item>

                    <Form.Item
                        name="category"
                        label="category"
                        rules={[{ required: true, message: "Blog Title Required" }]}
                    >
                        <Select >
                            {blogCategoryData.data.docs.map((blogCatData,index) => {

                                // return <Input value={blogCatData._id}>{blogCatData.title}</Input>
                                return <Option key={index} value={blogCatData._id}>{blogCatData.title}</Option>
                            })}

                        </Select>

                    </Form.Item>
                    <Form.Item
                        label="Short Description"
                        name="shortDescription"
                        rules={[{ required: true, message: "Enter Blog Description" }]}
                    >
                        <TextArea cols="10" />
                    </Form.Item>
                    <Form.Item
                        name="content"
                        label="Content"
                        valuePropName='data'
                        getValueFromEvent={(event, editor) => {
                            const data = editor.getData();
                            return data;
                        }}
                        rules={[{ required: true, message: "Blog Content Required" }]}
                    >
                        <CKEditor
                            editor={ClassicEditor}
                        />
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label="Profile Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: "Please upload an image" }]}
                    >

                        <ImageUploader
                            listType="picture-card"
                            maxCount={1}
                            folder="blog"
                        />
                    </Form.Item>
                    <Form.Item
                        name='publish'
                        label="Do you want to publish"
                        rules={[{ required: true, message: "Required Pulish Data" }]}
                    >
                        <Radio.Group >
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                        </Radio.Group>
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