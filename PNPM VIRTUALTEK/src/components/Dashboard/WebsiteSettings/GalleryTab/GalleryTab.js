import { useEffect } from 'react';
import { Form, Button, Upload, Space } from 'antd';
import { normFile } from '../../../../services/normFile/normFile';
import ImageUploader from '../../../Form/ImageUploader';
import { getImageAbsoluteURL, getImageNameFromURI } from '../../../../utils/string';
import { useEditGallery } from '../../../../services/websiteSettingsService';

export default function GalleryTab({ settingsData }) {
    
    useEffect(() => {
        const formInitialValues = {
            logo: settingsData?.logo ? [

                {
                    uid: '-1',
                    name: getImageNameFromURI(settingsData?.logo),
                    status: 'done',
                    url: getImageAbsoluteURL(settingsData?.logo),
                },
            ] : [],
            footerLogo: settingsData?.footerLogo ? [

                {
                    uid: '-1',
                    name: getImageNameFromURI(settingsData?.footerLogo),
                    status: 'done',
                    url: getImageAbsoluteURL(settingsData?.footerLogo),
                },
            ] : [],
            fabIcon: settingsData?.fabIcon ? [

                {
                    uid: '-1',
                    name: getImageNameFromURI(settingsData?.fabIcon),
                    status: 'done',
                    url: getImageAbsoluteURL(settingsData?.fabIcon),
                },
            ] : [],
            contactusImage: settingsData?.contactusImage ? [

                {
                    uid: '-1',
                    name: getImageNameFromURI(settingsData?.contactusImage),
                    status: 'done',
                    url: getImageAbsoluteURL(settingsData?.contactusImage),
                },
            ] : [],

        }
        
        form.resetFields();
        form.setFieldsValue({
            ...formInitialValues
        })
    }, [settingsData]);
    
    const { mutate, isLoading } = useEditGallery()
    const [form] = Form.useForm()
    
    const updateGallery = (values) => {
        const body = {}
        if (values?.logo?.[0]?.response) {
            body.logo = values?.logo?.[0]?.response.data.path;

        } else {
            body.logo = settingsData.logo || "";
        }


        if (values?.footerLogo?.[0]?.response) {
            body.footerLogo = values.footerLogo[0].response.data.path;
        } else {
            body.footerLogo = settingsData.footerLogo || "";
        }

        if (values?.fabIcon?.[0]?.response) {
            body.fabIcon = values.fabIcon[0].response.data.path;
        } else {
            body.fabIcon = settingsData.fabIcon || "";
        }

        if (values?.contactusImage?.[0]?.response) {
            body.contactusImage = values.contactusImage[0].response.data.path;
        } else {
            body.contactusImage = settingsData.contactusImage || "";
        }

    
        mutate(body);

    }
    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div>
            <Form
                layout="vertical"
                autoComplete="off"
                onFinish={updateGallery}
                form = {form}
                
            >
                <Form.Item
                    name="logo"
                    label="Site Logo"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <ImageUploader
                        listType="picture-card"
                        maxCount={1}
                        folder="WebsiteGallery"
                    />
                </Form.Item>
                <Form.Item
                    name="footerLogo"
                    label="Site Footer Logo"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <ImageUploader
                        listType="picture-card"
                        maxCount={1}
                        folder="WebsiteGallery"
                    />
                </Form.Item>
                <Form.Item
                    name="fabIcon"
                    label="Site Favicon"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <ImageUploader
                        listType="picture-card"
                        maxCount={1}
                        folder="WebsiteGallery"
                    />
                </Form.Item>
                <Form.Item
                    name="contactusImage"
                    label="Contact Us Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <ImageUploader
                        listType="picture-card"
                        maxCount={1}
                        folder="WebsiteGallery"
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
        </div>
    )
}