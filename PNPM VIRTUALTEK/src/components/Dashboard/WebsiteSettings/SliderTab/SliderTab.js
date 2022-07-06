import { useState, useEffect } from "react";

import "./SliderTab.scss"

import { Form, Input, Button, Upload, Table, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import { useSliderDetails, useAddSlider, useDeleteSlider, useEditSlider } from "../../../../services/websiteSettingsService";
import ImageUploader from "../../../Form/ImageUploader";
import { getImageAbsoluteURL, getImageNameFromURI } from "../../../../utils/string";

import { normFile } from "../../../../services/normFile/normFile";

const { TextArea } = Input;

export default function SliderTab() {
 
  
  let displayForm = {}
  
  const [activeSliderItem, setActiveSliderItem] = useState(null);
  const [mode, setMode] = useState("create")
  const [form] = Form.useForm();

  useEffect(() => {

    const formInitialValues = {
      country: activeSliderItem?.country || "",
      title: activeSliderItem?.title || "",
      description: activeSliderItem?.description || "",
      image: activeSliderItem?.image ? [

        {
          uid: '-1',
          name: getImageNameFromURI(activeSliderItem?.image),
          status: 'done',
          url: getImageAbsoluteURL(activeSliderItem?.image),
        },
      ] : [],
    }
    form.resetFields();
    form.setFieldsValue({
      ...formInitialValues
    })

  }, [activeSliderItem]);

  const { isLoading, isError, data } = useSliderDetails()
  const { mutate: addSliderMutate, isLoading: addSliderLoading, isSuccess: addSliderSuccess } = useAddSlider()
  const { mutate: deleteSliderMutate, isLoading: deleteSliderLoading } = useDeleteSlider()

  const { mutate: editSliderMutate, isLoading: editSliderLoading, isSuccess:editSuccessful } = useEditSlider()

  const editSlider = (record) => {
    setActiveSliderItem(record)
    setMode("edit")
  }
  const deleteSlider = (id) => {
    deleteSliderMutate(id);
  }

  const confirmDelete = (id) => {

    Modal.confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => { deleteSlider(id) }
    });
  }

  // if (addSliderSuccess || editSuccessful) {
  //   form.resetFields();
  // }
  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  
  if(data.data.docs.length>=3 && mode == 'create'){
    
    displayForm = {display:"none"}
  }
  const addSlider = (values) => {
    if (values?.image?.[0]?.response) {
      values.image = values.image[0].response.data.path;
    } else {
      values.image = activeSliderItem.image || "";
    }
    values["publish"] = true
    if (mode === "create") {
      addSliderMutate(values)
    } else {
      editSliderMutate({ body: values, _id: activeSliderItem._id })
      setMode("create")
      setActiveSliderItem(null)
    }
    form.resetFields();

  }

  const columns = [

    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <button onClick={() => { editSlider(record) }}>Edit</button>
          <a onClick={() => { confirmDelete(record._id) }}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className='sliderTabDiv'>
      <Form
        layout="vertical"
        autoComplete="off"
        form={form}
        onFinish={addSlider}
        style={displayForm}
      >
        <Form.Item
          name="country"
          label="Country"
        >
          <Input placeholder='Country'></Input>
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
        >
          <Input placeholder='Title'></Input>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <TextArea rows={2} placeholder='Description' />
        </Form.Item>
        <Form.Item
          name="image"
          label="Carasouel Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <ImageUploader
            listType="picture-card"
            maxCount={1}
            folder="team"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            <span className='addSliderIcon'><AiOutlinePlusCircle className='inline-block' /></span>{mode === 'create' ? "Add" : "Edit"} Slider
          </Button>
        </Form.Item>
      </Form>
      <Table   columns={columns} dataSource={data.data.docs} />
    </div>
  )
}