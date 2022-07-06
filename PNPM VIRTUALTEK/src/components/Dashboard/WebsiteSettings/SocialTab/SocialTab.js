import { useEffect } from 'react';

import { Form, Input, Button, Space } from 'antd';
import { useEditSocial } from '../../../../services/websiteSettingsService';


export default function SocialTab({settingsData}) {
    const [form] = Form.useForm();
    const { mutate: editSocialMutate, isLoading: editSocialLoading } = useEditSocial()
    
    useEffect(() => {
        const formInitialValues = {
            facebookLink:settingsData?.facebookLink || "",
                    youtubeLink:settingsData?.youtubeLink || "",
                    instagramLink:settingsData?.instagramLink || "",
                    viberLink:settingsData?.viberLink || "",
                    whatsappLink:settingsData?.whatsappLink|| ""
        }
        form.resetFields();
        form.setFieldsValue({
            ...formInitialValues
        })
    }, [settingsData]);

    const editSocial = (values)=>{
        editSocialMutate(values)
    }
    
    if(editSocialLoading){
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
                form={form}
                onFinish= {editSocial}
            >
                <Form.Item
                    name="facebookLink"
                    label="Facebook"
                    // rules={[
                    //     { required: true }
                    // ]}

                >
                    <Input placeholder='Facebook Link' />
                </Form.Item>
                {/* <Form.Item
                    name="twitter"
                    label="Twitter"
                    // rules={[
                    //     { required: true }
                    // ]}

                >
                    <Input placeholder='Twitter' />
                </Form.Item> */}
                <Form.Item
                    name="youtubeLink"
                    label="Youtube"
                    // rules={[
                    //     { required: true }
                    // ]}

                >
                    <Input placeholder='Youtube' />
                </Form.Item>
                <Form.Item
                    name="instagramLink"
                    label="Instagram"
                    // rules={[
                    //     { required: true }
                    // ]}

                >
                    <Input placeholder='Instagram' />
                </Form.Item>
                <Form.Item
                    name="viberLink"
                    label="Viber"
                    // rules={[
                    //     { required: true }
                    // ]}

                >
                    <Input placeholder='Viber' />
                </Form.Item>
                <Form.Item
                    name="whatsappLink"
                    label="Whatsapp"
                    // rules={[
                    //     { required: true }
                    // ]}

                >
                    <Input placeholder='Whatsapp'/>
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