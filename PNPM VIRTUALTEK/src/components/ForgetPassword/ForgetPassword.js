import { Card, Form, Input, Button } from 'antd'

import './ForgetPassword.scss'
import { useForgetPassword } from '../../services/WebsiteApisService'
import LoaderComp from '../LoaderComp/LoaderComp'
export default function ForgetPassword() {
    const { mutate, isLoading } = useForgetPassword()
    if (isLoading) {
        return <LoaderComp />
    }
    const submitResetPassword = (values) =>{
        mutate(values)
    }
    return (
        <div className='forgetPasswordDiv'>
            <Card title="Forget Password" style={{ width: 500 }}>
                <Form
                    layout='vertical'
                    onFinish={submitResetPassword}
                >
                    <Form.Item
                        label="Email"
                        name="email"

                        rules={[{ required: true, message: 'Email Required' }]}
                    >
                        <Input></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}