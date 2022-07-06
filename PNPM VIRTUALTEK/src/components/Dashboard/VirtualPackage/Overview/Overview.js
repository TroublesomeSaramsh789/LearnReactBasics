
import { Form, Input, Button, Space, DatePicker } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from 'react-router-dom';
import moment from "moment";

import { useAddOverviewVP, useEditOverviewVP } from '../../../../services/VirtualPackageManagementService';
import CKEditorCustom from "../../CKEditor/CKEditor"

const { TextArea } = Input

const { RangePicker } = DatePicker

export default function Overview({ data, mode }) {
    const params = useParams()
    const { mutate: addOverViewVPMutate, isLoading: addOverViewVPLoading } = useAddOverviewVP()
    const { mutate: editOverViewVPMutate, isLoading: editOverViewVPLoading } = useEditOverviewVP(params?._id)

    const addOverViewVP = (values) => {

        const times = values["timePeriod"]
        delete values.timePeriod
        values["startDate"] = times[0].toISOString()
        values["endDate"] = times[1].toISOString()

        values["trekType"] = "Virtual"
        if (mode === "create") {
            addOverViewVPMutate(values)
        } else {
            editOverViewVPMutate(values)
        }
    }
    if (addOverViewVPLoading || editOverViewVPLoading) {
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
                onFinish={addOverViewVP}
                initialValues={{
                    title: data?.title || "",
                    subTitle: data?.subTitle || "",
                    name: data?.subTitle || "",
                    content: data?.content || "",
                    destination: data?.destination || "",
                    country: data?.country || "",
                    trekLevel: data?.trekLevel || "",
                    maxAltitude: data?.maxAltitude || "",
                    activity: data?.activity || "",
                    startAtAddress: data?.startAtAddress || "",
                    endAtAddress: data?.endAtAddress || "",
                    trekRoute: data?.trekRoute || "",
                    timePeriod: data?.startDate && data?.endDate ? [moment(data.startDate), moment(data.endDate)] : ""
                }}
            >
                <Form.Item
                    label="Package Title"
                    name="title"
                    rules={[{ required: true, message: "Please enter Title" }]}
                >
                    <Input placeholder="Package Title" />
                </Form.Item>

                <Form.Item
                    label="Package Subtitle"
                    name="subTitle"
                    rules={[{ required: true, message: "Please enter Subtitle" }]}
                >
                    <Input placeholder="Package Sub Title" />
                </Form.Item>
                <Form.Item
                    label="Package Content"
                    name="content"
                    rules={[{ required: true, message: "Please enter content" }]}
                >
                    <TextArea rows={5} placeholder='Package Content' />
                </Form.Item>
                <Form.Item
                    label="Destination"
                    name="destination"
                    rules={[{ required: true, message: "Please enter destination" }]}

                >
                    <Input placeholder='Destination' />
                </Form.Item>

                <Form.Item
                    label="Time Period"
                    name="timePeriod"
                >
                    <RangePicker showTime />
                </Form.Item>

                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Form.Item
                            label="Country"
                            name="country"
                            rules={[{ required: true, message: "Enter country" }]}
                        >
                            <Input placeholder='Country Level' />
                        </Form.Item>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Trip Level"
                            name="trekLevel"
                            rules={[{ required: true, message: "Enter country" }]}
                        >
                            <Input placeholder='Trip Level' />
                        </Form.Item>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Form.Item
                            label="Max Altitude"
                            name="maxAltitude"
                            rules={[{ required: true, message: "Enter max altitude" }]}
                        >
                            <Input placeholder='Max Altitude' />
                        </Form.Item>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Activity"
                            name="activity"
                            rules={[{ required: true, message: "Enter max altitude" }]}
                        >
                            <Input placeholder='Activity' />
                        </Form.Item>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Form.Item
                            label="Starts At"
                            name="startAtAddress"
                            rules={[{ required: true, message: "Enter start addresss" }]}

                        >
                            <Input placeholder='Starts At' />
                        </Form.Item>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Ends At"
                            name="endAtAddress"
                            rules={[{ required: true, message: "Enter start addresss" }]}
                        >
                            <Input placeholder='Ends At' />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item
                    label="Trek Route"
                    name="trekRoute"
                    rules={[{ required: true, message: "Enter trek Route" }]}
                >
                    <TextArea cols={5}/>
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