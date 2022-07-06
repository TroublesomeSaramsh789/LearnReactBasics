import { Form, Input, Button, DatePicker, Row, Col, Card } from 'antd';

import ImageUploader from '../../Form/ImageUploader'
import { normFile } from '../../../services/normFile/normFile'
import { useAddLive } from '../../../services/LiveService';
import LoaderComp from '../../LoaderComp/LoaderComp';
import './AddLive.scss'



export default function AddLive() {
    const [addLiveForm] = Form.useForm();
    const {mutate:mutateAddLive, isLoading:addLiveLoading} = useAddLive();

    const addLive = (values)=>{
        values.thumbnail = values.thumbnail[0].response.data.path;
        console.log(values)
        values.startAt = values.startAt.toISOString()
        mutateAddLive(values);

    }
    if(addLiveLoading){
        return <LoaderComp/>
    }
    return (
        <div className="goLiveMainDiv">

            <Card type="inner" title="Inner Card title" >
                <Form
                    form={addLiveForm}
                    layout="vertical"
                    onFinish={addLive}
                >
                    <Form.Item
                        name="title"
                        label="Title of the Live"
                        rules={[{ required: true, message: "Enter Live Title" }]}
                    >
                        <Input></Input>
                    </Form.Item>
                    <Row gutter={18}>

                        <Col span={12}>
                            <Form.Item
                                name="duration"
                                label="Duration"
                                rules={[{ required: true, message: "Enter Duration" }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="startAt"
                                label="Start Time"
                                rules={[{ required: true, message: "Enter Start Time" }]}
                            >
                                <DatePicker showTime = {true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={18}>
                        <Col span={12}>
                            <Form.Item
                                name="price"
                                label="Price"
                                rules={[{ required: true, message: "Enter Price" }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="strikePrice"
                                label="Strike Price"
                                rules={[{ required: true, message: "Strike Price" }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="thumbnail"
                        label="ThumbNail Picture"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: "Please upload an image" }]}
                    >

                        <ImageUploader
                            listType="picture-card"
                            maxCount={1}
                            folder="LiveThumbnail"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Session
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    )
}