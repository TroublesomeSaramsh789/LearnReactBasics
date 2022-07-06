import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import "./SignUpPage.scss"
import SignUpImage from "../../assets/signup.png"

import { useRegsiterNewUser } from '../../services/authApi';
import LoaderComp from '../LoaderComp/LoaderComp'




import GoogleLogin from 'react-google-login';
import { googleClientId } from "../../services/keys";
import { useGoogleLogin } from "../../services/authApi";



export default function SignUpPage() {
    const { mutate: googleLoginMutate } = useGoogleLogin()
    const {mutate:userRegister, isLoading} = useRegsiterNewUser();

    const [registerForm] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    if(isLoading){
        return (
            <LoaderComp/>
        )
    }

    const signUp = (values) => {

        delete values.confirm_password
        values.userType = "User"
        userRegister(values)
    }

    function googleLogged(callback) {

        const payloadGoogle = {
            access_token: callback.tokenObj.id_token
        }

        googleLoginMutate(payloadGoogle)
    }

    return (
        <div className="container signUpPageWrap">

            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="imageDivSignUp">
                        <img src={SignUpImage} alt="" />
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">

                    <Form
                        onFinish={signUp}
                        form={registerForm}
                        layout="vertical"
                        initialValues={{
                            requiredMarkValue: requiredMark,
                        }}
                        onValuesChange={onRequiredTypeChange}
                        requiredMark={requiredMark}
                    >
                        <div className="formDiv">
                            <h4 className="title">Register to Get Full Experience</h4>
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
                            {/* <InputElement label="Username" placeholder="Enter Your User Name" type="text" name="username" /> */}
                            <div className="row">
                                <div className="col-md-6 col-lg-6" >
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
                                    {/* <InputElement label="Email" placeholder="Enter Your Email" type="email" name="Email" /> */}
                                </div>
                                <div className="col-md-6 col-lg-6" >
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

                                    {/* <InputElement label="Contact Number" placeholder="Enter Your Contact Number" type="number" name="contactNo" /> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-6" >
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
                                    {/* <InputElement label="Password" placeholder="Enter Your Password" type="password" name="password" /> */}
                                </div>
                                <div className="col-md-6 col-lg-6" >
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
                                    {/* <InputElement label="Confirm Password" placeholder="Confirm your password" type="password" name="confirmPassword" /> */}
                                </div>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Agree with terms and condition</label>
                            </div>
                            <div className="buttonDiv">
                                <Form.Item>
                                    <Button type="button" htmlType="submit" >SIGNUP</Button>
                                </Form.Item>

                            </div>
                            <div>
                                <GoogleLogin
                                    clientId={googleClientId}
                                    buttonText="Sign Up With Google"
                                    onSuccess={googleLogged}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            <div className="loginOption">
                                <p>Already have an account <span className="loginText">LOGIN HERE</span></p>
                            </div>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    )
}