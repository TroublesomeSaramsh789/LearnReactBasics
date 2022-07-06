
import { Form, Input, Button, Space, Radio, Card } from 'antd';

import { useParams, useLocation } from 'react-router-dom'

import ImageUploader from '../../../Form/ImageUploader';
import { useAddTestomonial, useEditTestomonial } from '../../../../services/websiteManagement';
import { normFile } from '../../../../services/normFile/normFile';
import { getImageNameFromURI, getImageAbsoluteURL } from '../../../../utils/string';
const { TextArea } = Input

export default function AddTestomonial({ mode }) {

    const [testomonailForm] = Form.useForm()

    const params = useParams()

    const { mutate: addTestomonial, isLoading: loadingAddTestomoinal, data: testoData } = useAddTestomonial()
    const {mutate:editTestomonial, isLoading:loadingEditTestomonial, data:editResponse} = useEditTestomonial(params?.id)
    
    const location = useLocation()

    const addTesto = (values) => {

        if (values?.image?.[0]?.response) {
         
            values['image'] = values.image[0].response.data.path;
        }
        else {
            
            values['image'] = location?.state?.testo?.image || "";
           
        }
        if (mode === 'create') {
            addTestomonial(values)
        } else {
            editTestomonial(values)
        }
    }
    
    if (loadingAddTestomoinal) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <Card type="inner" title="Add Team">
                <Form
                    form={testomonailForm}
                    onFinish={addTesto}
                    layout="vertical"
                    autoComplete="off"
                    initialValues={{
                        fullName: location?.state?.testo?.fullName || "",
                        designation: location?.state?.testo?.designation || "",
                        message: location?.state?.testo?.message || "", 
                        publish: location?.state?.testo?.publish || false, 
                        image: location?.state?.testo?.image ? [
                            {
                                uid: '-1',
                                name: getImageNameFromURI(location.state.testo.image),
                                status: 'done',
                                url: getImageAbsoluteURL(location.state.testo.image),
                            },
                        ] : [],

                    }}
                >
                    <Form.Item
                        name="fullName"
                        label="fullName"
                        rules={[{ required: true, message: "Enter your name" }]}
                    >
                        <Input placeholder='Name'></Input>
                    </Form.Item>
                    <Form.Item
                        name="designation"
                        label="Designation"
                        rules={[{ required: true, message: "Enter your designation" }]}
                    >
                        <Input placeholder='Designation'></Input>
                    </Form.Item>


                    <Form.Item
                        name="message"
                        label="Descritption"
                        rules={[{ required: true, message: "Enter description" }]}
                    >
                        <TextArea rows={4} placeholder='Testomonial Description' />
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
                            folder="testomonial"
                        />
                    </Form.Item>
                    <Form.Item name="publish" label="Publish" rules={[{ required: true, message: "Please choose one" }]}>
                        <Radio.Group>
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