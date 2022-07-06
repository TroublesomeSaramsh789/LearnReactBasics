import { Form, Input, Button, Space } from 'antd';

import { useEditMeta } from '../../../../services/websiteSettingsService';

const { TextArea } = Input;
export default function MetaTab({ settingsData }) {
    const { mutate, isLoading } = useEditMeta()
    
    const editMeta = (values) => {
        mutate(values)
    }
    return (
        <div>
            <Form

                layout="vertical"
                autoComplete="off"
                initialValues={{
                    title: settingsData.meta.title || "",
                    keywords: settingsData.meta.keywords || "",
                    description: settingsData.meta.description || ""
                }}
                onFinish={editMeta}
            >
                <Form.Item
                    name="title"
                    label="Meta Title"
                // rules={[
                //     { required: true }
                // ]}

                >
                    <Input placeholder='Meta Title' />
                </Form.Item>
                <Form.Item
                    name="keywords"
                    label="Meta Keywords"
                // rules={[
                //     { required: true }
                // ]}

                >
                    <Input placeholder='Meta Keywords' />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Meta Description"
                // rules={[
                //     { required: true }
                // ]}

                >
                    <TextArea rows={4} placeholder='Meta Description' />
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