import { useState, useEffect } from 'react';
import { Form, Input, Button, Table, Space, Row, Col } from 'antd'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import { useParams } from 'react-router-dom'

import { useEditItenary, useUnitEditItenary, useUnitDeleteItenary } from '../../../../services/NormalPackageManagementService'
import CKEditorCustom from '../../CKEditor/CKEditor'
import TextArea from 'antd/lib/input/TextArea';





export default function Itenary({ data, mode }) {

    const params = useParams()
    const [formItenary] = Form.useForm()
    const [activeItenary, setActiveItenary] = useState({})
    const [modeInside, setModeInside] = useState('create')

    useEffect(() => {
      
        const formInitialValues = {
            title: activeItenary?.title || "",
            summary: activeItenary?.summary || "",
            description: activeItenary?.description || "",
            details: {
                meal: activeItenary?.details?.meal || "",
                maxAltitude: activeItenary?.details?.maxAltitude || "",
                walkingHours: activeItenary?.details?.walkingHours || "",
                planHours: activeItenary?.details?.planHours || "",
                driveHours: activeItenary?.details?.driveHours || "",
                trekDistance: (activeItenary?.details?.trekDistance) || ""
            }
        }   
        // formItenary.resetFields()
        // setActiveItenary(null)
        formItenary.setFieldsValue({
            ...formInitialValues
        })
    }, [activeItenary])

    const { mutate: addItenaryMutate, isLoading: loadingItenaryMutate } = useEditItenary(params._id)
    const { mutate: editUnitItenaryMutate, isLoading: loadingEditMutate } = useUnitEditItenary(params._id)
    const { mutate: deleteUnitItenaryMutate, isLoading: loadingDeleteMutate } = useUnitDeleteItenary(params._id)

    const addItenary = (values) => {
        
        if (modeInside === "edit") {
            editUnitItenaryMutate({ body: values, _id: activeItenary._id })
            setModeInside("create")
        } else {
            addItenaryMutate(values)
        }
        setActiveItenary(null)
    }
    const editItenary = (record) => {
      
        setActiveItenary(record)
        setModeInside("edit")
    }

    const deleteItenary = (record) => {
        deleteUnitItenaryMutate(record._id)
    }
    if (loadingItenaryMutate || loadingEditMutate || loadingDeleteMutate) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const columns = [
        {
            title: 'SN',

            key: 'index',
            render: (text,record, index ) => index+1,
        },
        {
            title: 'Day Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Day Summary',
            dataIndex: 'summary',
            key: 'summary',
        },


        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => { editItenary(record) }}><BsFillPencilFill /></a>
                    <a onClick={() => { deleteItenary(record) }}><ImBin /></a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Form
                layout='vertical'
                onFinish={addItenary}
                form={formItenary}
            >
                <Form.Item
                    label="Day Title"
                    name="title"
                    rules={[{ required: true, message: "Day Title is required" }]}
                >
                    <Input placeholder="Day Title" />
                </Form.Item>
                
                {/* <CKEditorCustom
                    initialText = "this"
                    formItemName="description"
                    label="Trip Route"
                    rule={[{ required: true, message: "Trip Route is required" }]}
                /> */}
                <Form.Item
                    name="description"
                    label="Description"
                    rule={[{ required: true, message: "Trip Route is required" }]}
                >
                    <TextArea cols={3}/>
                </Form.Item>

                <Form.Item
                    label="Day Summary"
                    name="summary"
                    rules={[{ required: true, message: "Summary is required" }]}
                >
                    <Input placeholder="Day Summary" />
                </Form.Item>

          


                <Row gutter={32}>
                    <Col span={12}>
                        <Form.Item
                            label="Meal"
                            // rules={[{ required: true, message: "Meal is required" }]}
                            name={["details", "meal"]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Trek Distance"
                            // rules={[{ required: true, message: "Trek Distance is required" }]}
                            name={["details", "trekDistance"]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col span={12}>
                        <Form.Item
                            label="Max Altitude"
                            // rules={[{ required: true, message: "Max Altitude is required" }]}
                            name={["details", "maxAltitude"]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Walking Hours"
                            // rules={[{ required: true, message: "Walking Hours is required" }]}
                            name={["details", "walkingHours"]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={32}>
                    <Col span={12}>
                        <Form.Item
                            label="Plane Hours"
                            // rules={[{ required: true, message: "Plane Hours is required" }]}
                            name={["details", "planHours"]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Drive Hours"
                            // rules={[{ required: true, message: "Drive Hours is required" }]}
                            name={["details", "driveHours"]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        <span className='addSliderIcon'><AiOutlinePlusCircle className='inline-block' /></span>     {modeInside === "edit" ? "Edit" : "Add"}

                    </Button>
                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data.itinerary} />
        </div>
    )
}