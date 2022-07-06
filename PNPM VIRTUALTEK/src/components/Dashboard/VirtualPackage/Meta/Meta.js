import {Form, Input,Space, Button} from 'antd'
import { useParams } from 'react-router-dom'
import { useEditMetaNP } from '../../../../services/NormalPackageManagementService'

const {TextArea} = Input
export default function Meta({data, mode}){
    const params = useParams()
    const {mutate:editTrekMeta, isLoading:loadingTrekMeta} = useEditMetaNP(params._id, "virtual")
    if(loadingTrekMeta){
        return (
            <div>
                Loading...
            </div>
        )
    }
    const editMeta = (values)=>{
        editTrekMeta(values)
    }
   
    return (
        
        <div>
            <Form 
            layout='vertical'
            onFinish={editMeta}
            initialValues = {{
                title:data?.meta?.title || "", 
                keywords:data?.meta?.keywords || "", 
                description: data?.meta?.description || ""
            }}
            >
                <Form.Item
                    label = "Meta Title"
                    name="title"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label = "Meta Keywords"
                    name = "keywords"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label = "Meta Description"
                    name="description"
                >
                    <TextArea rows = {5}/>
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
        </div>
    )
}