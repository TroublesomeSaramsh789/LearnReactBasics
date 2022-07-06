import { Form, Input, Button, Space, Radio, Card, message } from 'antd';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { useAddTeam, useEditTeam } from '../../../../services/websiteManagement';
import ImageUploader from '../../../Form/ImageUploader';
import { getImageNameFromURI, getImageAbsoluteURL } from "../../../../utils/string";


import { normFile } from '../../../../services/normFile/normFile';

const { TextArea } = Input

export default function AddTeam({ mode }) {

    const [addTeamForm] = Form.useForm();

    var params = useParams();

    const { mutate: addTeamMutate, isLoading } = useAddTeam();
    const { mutate: editTeamMutate, isLoading: isEditLoading } = useEditTeam(params?.id)


    const location = useLocation();




    if (isLoading || isEditLoading) {
        return (
            <div>Loading...</div>
        )
    }
    const addTeam = (values) => {
        const body = {
            fullName: values.fullName,
            designation: values.designation,
            position: values.position,
            contactNumber: values.contactNumber,
            email: values.email,
            message: values.message,
            publish: values.publish
        }

        if (values?.image?.[0]?.response) {
            body.image = values.image[0].response.data.path;
        } else {
            body.image = location?.state?.team?.image || "";
        }

        if (mode === "create") {
            addTeamMutate(body)
        } else {
            editTeamMutate(body)
        }
    }
    return (
        <div>
            <Card type="inner" title="Add Team">
                <Form
                    form={addTeamForm}
                    layout="vertical"
                    autoComplete="off"
                    initialValues={{
                        fullName: location?.state?.team?.fullName || "",
                        designation: location?.state?.team?.designation || "",
                        position: location?.state?.team?.position || "",
                        contactNumber: location?.state?.team?.contactNumber || "",
                        email: location?.state?.team?.email || "",
                        message: location?.state?.team?.message || "",
                        image: location?.state?.team?.image ? [

                            {
                                uid: '-1',
                                name: getImageNameFromURI(location.state.team.image),
                                status: 'done',
                                url: getImageAbsoluteURL(location.state.team.image),
                            },
                        ] : [],
                        publish: location?.state?.team?.publish || false
                    }}
                    onFinish={addTeam}
                >
                    <Form.Item
                        name="fullName"
                        label="Name"
                        rules={[{ required: true, message: "Please input name" }]}
                    >
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item
                        name="designation"
                        label="Designation"
                        rules={[{ required: true, message: "Please input designation" }]}
                    >
                        <Input placeholder='Designation'></Input>
                    </Form.Item>

                    <Form.Item
                        name="position"
                        label="Position"
                        rules={[{ required: true, message: "Please input position" }]}
                    >
                        <Input placeholder='Position'></Input>
                    </Form.Item>
                    <Form.Item
                        name="contactNumber"
                        label="Phone Number"
                        rules={[{ required: true, message: "Please input phone number" }]}
                    >
                        <Input placeholder='Phone Number'></Input>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: "Please input email" }]}
                    >
                        <Input placeholder='Email'></Input>
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Message"
                    >
                        <TextArea rows={4} placeholder='message' />
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
                            folder="team"
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