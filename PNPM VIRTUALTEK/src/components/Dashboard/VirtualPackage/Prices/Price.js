import { Form, Input, Space, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useEditPriceVP } from '../../../../services/VirtualPackageManagementService';

export default function Price({data, mode}) {
    const params = useParams()
    const { mutate: editPriceMutate, isLoading: editPriceLoading } = useEditPriceVP(params?._id)

    const editPrice = (values) => {
        editPriceMutate(values)
    }
    if(editPriceLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <Form
                layout='vertical'
                onFinish={editPrice}
                initialValues= {{
                    strikePrice:data.strikePrice, 
                    discountPercent:data.discountPercent, 
                    price:data.price
                }}

            >
                <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Strike Price"
                            name="strikePrice"
                            rules={[{ required: true, message: "Required Strike Price" }]}
                        >
                            <Input placeholder="Strike Price" />
                        </Form.Item>

                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <Form.Item
                            label="Discount (%)"
                            name="discountPercent"
                            rules={[{ required: true, message: "Required Discount Price" }]}
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
                            rules={[{ required: true, message: "Required Price" }]}
                        >
                            <Input placeholder="Price" />
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