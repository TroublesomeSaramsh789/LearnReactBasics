import { useEffect, useState } from 'react'
import { Form, Input, Table, Space, Button } from 'antd'


import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import { useParams } from 'react-router-dom'
import { useEditFAQ, useUnitEditFAQ, useUnitDeleteFAQ } from '../../../../services/NormalPackageManagementService'

const { TextArea } = Input



export default function FAQ({ data, mode }) {

  const params = useParams()

  const [formFAQ] = Form.useForm()
  const [activeFAQ, setActiveFAQ] = useState(null)
  const [modeInside, setModeInside] = useState('create')

  useEffect(() => {
    
    const formInitialValues = {
      title: activeFAQ?.title || "",
      content: activeFAQ?.content || ""
    }
    formFAQ.resetFields()
    formFAQ.setFieldsValue({
      ...formInitialValues
    })
  }, [activeFAQ])



  const { mutate: addFAQMutate, isLoading: loadingFAQMutate } = useEditFAQ(params._id, 'virtual')
  const { mutate: editUnitMutate, isLoading: loadingEditMutate } = useUnitEditFAQ(params._id, 'virtual')
  const { mutate: deleteUnitMutate, isLoading: loadingDeleteMutate } = useUnitDeleteFAQ(params._id, 'virtual')

  const editFAQ = (record) => {
    setActiveFAQ(record)
    setModeInside("edit")
  }

  const deleteFAQ = (record) => {
    deleteUnitMutate(record._id)
  }

  const addFAQ = (values) => {

    
    if (modeInside === "edit") {
      setModeInside("create")
      editUnitMutate({ body: values, _id: activeFAQ._id })
    } else {
      addFAQMutate(values)

    }

    formFAQ.resetFields()

  }
  if (loadingFAQMutate || loadingEditMutate || loadingDeleteMutate) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      key: '_id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'FAQ Title',
      dataIndex: 'title',
      key: 'faqTitle',
    },
    {
      title: 'FAQ Description',
      dataIndex: 'content',
      key: 'faqDescritption',
    },


    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a onClick={() => { editFAQ(record) }}><BsFillPencilFill /></a>
          <a onClick={() => { deleteFAQ(record) }}><ImBin /></a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Form
        layout='vertical'
        onFinish={addFAQ}
        form={formFAQ}
      >
        <Form.Item
          label="Title"
          name="title"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="content"
        >
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            <span className='addSliderIcon'><AiOutlinePlusCircle className='inline-block' /></span> {modeInside === "edit" ? "Edit" : "Add"} FAQ
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data.faqs} />
    </div>
  )
}