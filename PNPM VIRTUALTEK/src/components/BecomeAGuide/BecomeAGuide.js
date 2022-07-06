import { Row, Col, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'

import Image from '../../assets/becomeAGuide.webp'
import { useRegsiterNewUser } from '../../services/authApi'
import LoaderComp from '../LoaderComp/LoaderComp'

import "./BecomeAGuide.scss"

export default function BecomeAGuide() {
    const {mutate:guideRegister, isLoading} = useRegsiterNewUser();
    if(isLoading){
        return (
            <LoaderComp/>
        )
    }
    const createGuide = (values) =>{
        delete values.confirm_password
        values.userType = "Guide"
        guideRegister(values)
    }
    return (
        <div className=" container becomeGuideMainPage">
            <Row>
                <Col xl={12} xs={24} xm={12} >
                    <div className='becomeGuideImage'>
                    <img src={Image}></img>
                    </div>
                 
                </Col>
                <Col xl={12} xs={24} xm={12}>
                    <div className='becomeAGuideDiv'>
                        <p className='createNewAccount'> Create New Account  </p>
                        <p className='alreadyAccount'>Already Have an Account? <Link to="/login">Login Here</Link></p>
                        <Form
                            layout="vertical"
                            onFinish={createGuide}
                        >
                            <Form.Item
                                name="fullName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Full Name!',
                                    },
                                ]}
                                label="Full Name"

                                tooltip="This is a required field"
                            >
                                <Input placeholder="Enter your username" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                                label="Email"

                                tooltip="This is a required field"
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item
                                name="contactNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Contact!',
                                    },
                                ]}
                                label="Contact"

                                tooltip="This is a required field"
                            >
                                <Input placeholder="Enter your contact" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                label="Password"
                                hasFeedback
                                tooltip="This is a required field">
                                <Input.Password placeholder="Enter your password here" />
                            </Form.Item>
                            <Form.Item
                                name="confirm_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your confirm password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                                label="Confirm Password"
                                hasFeedback
                                dependencies={['password']}
                                tooltip="This is a required field"

                            >
                                <Input.Password placeholder="Confirm Password Here" />
                            </Form.Item>
                            <Form.Item>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Agree with terms and condition</label>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Button type="button" htmlType="submit" >SIGNUP</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}