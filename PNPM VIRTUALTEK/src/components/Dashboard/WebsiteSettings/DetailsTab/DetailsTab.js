import { useEffect } from 'react';
import { Form, Input, message, Button, Space } from 'antd';

import { useEditDetails } from '../../../../services/websiteSettingsService';

export default function DetailsTab({ settingsData }) {

    const [form] = Form.useForm();

    useEffect(() => {
        const formInitialValues = {
            contactNumber: settingsData?.contactNumber || "",
            email: settingsData?.email || "",
            secondaryContactNumber: settingsData?.secondaryContactNumber || "",
            address: settingsData?.address || "",
            writeUsAt: settingsData?.writeUsAt || ""
        }
        form.resetFields();
        form.setFieldsValue({
            ...formInitialValues
        })
    }, [settingsData]);

    const { mutate: editDetailsMutate, isLoading: editDetailsLoading } = useEditDetails()

    const editDetails = (values) => {
        editDetailsMutate(values)

    }

    if (editDetailsLoading) {
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
                onFinish={editDetails}
            >
                <Form.Item
                    name="contactNumber"
                    label="Phone Number"
                    rules={[
                        { required: true }
                    ]}

                >
                    <Input placeholder='Phone Number' />
                </Form.Item>
                <Form.Item
                    name="secondaryContactNumber"
                    label="Secondary Phone Number"
                    rules={[
                        { required: true }
                    ]}

                >
                    <Input placeholder='Secondary Phone Number' />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true }
                    ]}

                >
                    <Input placeholder='Email' />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        { required: true }
                    ]}

                >
                    <Input placeholder='Address' />
                </Form.Item>
                <Form.Item
                    name="writeUsAt"
                    label="Write us at"
                    rules={[
                        { required: true }
                    ]}

                >
                    <Input placeholder='Write Us' />
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