import { Form, Input, Space, Button } from 'antd';
import { useParams } from 'react-router-dom';

import { useEditPricesNP } from '../../../../services/NormalPackageManagementService';

export default function Price({data, mode}) {
    const params = useParams()
    const { mutate: editPriceNPMutate, isLoading: editPriceNPLoading } = useEditPricesNP(params._id)
    const editPrice = (values) => {
       
        editPriceNPMutate(values)
    }
    if(editPriceNPLoading){
        return (
            <div>
                Loading ...
            </div>
        )
    }
    return (
        <div>
            <Form
                layout='vertical'
                onFinish={editPrice}
                initialValues = {{
                    strikePrice:data?.strikePrice || "", 
                    discountPercent: data?.discountPercent || "", 
                    price:data?.price || "", 
                    saveUpTo:data?.saveUpTo || "", 
                    normalGroup:{
                        forOne:data?.normalGroup?.forOne || "", 
                        forTwo:data?.normalGroup?.forTwo || "", 
                        uptoSeven:data?.normalGroup?.uptoSeven || "", 
                        eightPlus:data?.normalGroup?.eightPlus || ""
                    }
                }}
            >
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Strike Price"
                            name="strikePrice"
                            rules={[{ required: true, message: "Enter the Strike Price" }]}
                        >
                            <Input placeholder="Strike Price" />
                        </Form.Item>

                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Discount (%)"
                            rules={[{ required: true, message: "Enter the discount Price" }]}
                            name="discountPercent"
                        >
                            <Input placeholder='Discount' />
                        </Form.Item>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true, message: "Enter the  Price" }]}
                        >
                            <Input placeholder="Price" />
                        </Form.Item>

                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            name="saveUpTo"
                            label="Save Upto"
                            rules={[{ required: true, message: "Enter the  Save Upto" }]}
                        >
                            <Input placeholder='Save Upto' />
                        </Form.Item>
                    </div>
                </div>
                <p>Price per number of people (group discount)</p>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item label="1"

                            name={['normalGroup', 'forOne']}
                        >
                            <Input placeholder="1" />
                        </Form.Item>

                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="2"
                            name={['normalGroup', 'forTwo']}

                        >
                            <Input placeholder='2' />
                        </Form.Item>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Upto 7"
                            name={['normalGroup', 'uptoSeven']}
                        >
                            <Input placeholder="Upto 7" />
                        </Form.Item>

                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="8 Plus"

                            name={['normalGroup', "eightPlus"]}
                        >
                            <Input placeholder='8 Plus' />
                        </Form.Item>
                    </div>
                </div>
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