import {Card, Form, Button, Input} from 'antd'
import { useParams } from 'react-router-dom'
import './ResetPassword.scss'
import { useCheckForgetPasswordToken } from '../../services/WebsiteApisService'
import { usePasswordReset } from '../../services/WebsiteApisService'
import LoaderComp from '../LoaderComp/LoaderComp'
import LinkExpired from '../LinkExpired/LinkExpired'

export default function ResetPassword(){
    
    const param = useParams()
    
    const {isLoading:checkPasswordLoading, data} = useCheckForgetPasswordToken(param?.id)
    const {mutate:passwordResetMutate, isLoading:loadingResetPassword} = usePasswordReset()
    
    if(checkPasswordLoading || loadingResetPassword){
        return <LoaderComp/>
    }
    
    if(!data?.data?.valid){
        return <LinkExpired/>
    }

    const submitResetPassword = (values) =>{
        values.token = param.id
        passwordResetMutate(values)
    }
    return (
        <div className='resetPassword'>
              <Card title="Reset Password" style={{ width: 500 }}>
                <Form
                    layout='vertical'
                    onFinish={submitResetPassword}
                >
                    <Form.Item
                        label="New Password"
                        name="password"

                        rules={[{ required: true, message: 'Password Required' }]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}