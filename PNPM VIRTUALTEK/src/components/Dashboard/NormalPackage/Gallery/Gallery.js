import { useEffect } from 'react';
import { Row, Col, Form, Upload, Space, Button, Input } from 'antd'
import { v4 as uuidv4 } from "uuid";

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import ImageUploader, { ImageUploaderMultiple } from "../../../Form/ImageUploader"
import { normFile } from '../../../../services/normFile/normFile';
import { useEditGalleryNP } from '../../../../services/NormalPackageManagementService';
import { useParams } from 'react-router-dom';

import { getImageNameFromURI, getImageAbsoluteURL } from "../../../../utils/string"

export default function Gallery({ data, mode }) {
    const [form] = Form.useForm();
    const params = useParams()

    const { mutate: editGalleryMutate, isLoading: loadingeditGallery } = useEditGalleryNP(params._id)

    const totalSliderImage = data.sliderImages.length
    const totalImage = data.images.length

    useEffect(() => {
        const video = {}

        data?.videos?.map((v, index) => {
            return video[String(index + 1)] = v;
        });

        const formValues = {
            sliderImages: data?.sliderImages?.length > 0 ? data.sliderImages.map(image => ({
                id: uuidv4(),
                name: getImageNameFromURI(image),
                status: 'done',
                url: getImageAbsoluteURL(image),
                path: image
            })) : [],

            images: data?.images.length > 0 ? data.images.map(image => ({
                id: uuidv4(),
                name: getImageNameFromURI(image),
                status: 'done',
                url: getImageAbsoluteURL(image),
                path: image
            })) : [],

            roadMap: data.roadMap ? [
                {
                    uid: '-1',
                    name: getImageNameFromURI(data.roadMap),
                    status: 'done',
                    url: getImageAbsoluteURL(data.roadMap),
                    path: data.roadMap
                },
            ] : [],
            videos: video
        }
        

        form.setFieldsValue(formValues);
    }, [data]);

    let body = { sliderImages: [], images: [] }
    if (loadingeditGallery) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const editGallery = (values) => {


        const videos = Object.keys(values.videos).map((key) => values.videos[key]);
        body.videos = videos



        values.sliderImages.forEach((image, index) => {
            if (image.response) {
                body.sliderImages.push(image.response.data.path)
            } else {
                body.sliderImages.push(image.path);
            }
        })
        values.images.forEach((image, index) => {
            if (image.response) {
                body.images.push(image.response.data.path)
            } else {
                body.images.push(image.path)
            }
        })
        if (values?.roadMap?.[0]?.response) {
            body.roadMap = values.roadMap[0].response.data.path;
        }
        else {
            body.roadMap = data.roadMap
        }

        editGalleryMutate(body)

    }
    return (
        <div>
            <Form
                layout='vertical'
                form={form}
                onFinish={editGallery}
                initialValues={{}}
            >
                <Row gutter={32} >
                    <Col span={24}>
                        <ImageUploaderMultiple
                            label="Slider Image"
                            name="sliderImages"
                            max_count={3}
                            folder="NormalPackage"
                            initialImageCount={totalSliderImage}
                            rules={[{ required: true, message: "Please upload at least one image" }]}
                        />

                    </Col>
                </Row>
                <p>Photos</p>
                <Row gutter={32}>
                    <Col span={24}>
                        <ImageUploaderMultiple
                            label="Images"
                            name="images"
                            max_count={5}
                            folder="NormalPackage"
                            initialImageCount={totalImage}
                            rules={[{ required: true, message: "Please upload at least one image" }]}
                        />

                    </Col>
                </Row>
                <Form.Item
                    name={["videos", "1"]}
                    label="Video Link 1">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Video Link 2"
                    name={["videos", "2"]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Video Link 3"
                    name={["videos", "3"]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Video Link 4"
                    name={["videos", "4"]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Video Link 5"
                    name={["videos", "5"]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="roadMap"
                    label="Road Map Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ required: true, message: "Please upload an image" }]}
                >

                    <ImageUploader
                        listType="picture-card"
                        maxCount={1}
                        folder="NormalPackage"
                    />
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

        </div >
    )
}

