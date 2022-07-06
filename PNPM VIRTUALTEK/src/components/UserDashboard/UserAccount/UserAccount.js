import './UserAccount.scss'
import { useContext } from 'react';
import { Row, Col, Button, Form, Input, Select, Popover } from 'antd';
import { AuthContext } from '../../../context/AuthContext';
import { useUpateProfile } from '../../../services/UserGuideUpdate'
import LoaderComp from '../../LoaderComp/LoaderComp';
import { getImageAbsoluteURL, getImageNameFromURI } from '../../../utils/string'
import ImageUploader from '../../Form/ImageUploader';
import { normFile } from '../../../services/normFile/normFile';

import { useChangePassword } from '../../../services/WebsiteApisService';
const { TextArea } = Input
const { Option } = Select




export default function UserAccount() {
    const { profile } = useContext(AuthContext)
    const { mutate: updateUserProfileMutate, isLoading: updateLoading } = useUpateProfile()
    const {mutate:updatePassword, isLoading:updatePasswordLoading} = useChangePassword()

    const updateUserProfile = (values) => {
        delete values.email
        if (values?.profileImageUrl?.[0].response) {
            values.profileImageUrl = values.profileImageUrl[0].response.data.path
        } else {
            values.profileImageUrl = profile?.profileImageUrl
        }
        updateUserProfileMutate(values)
    }
    if (updateLoading) {
        return (
            <LoaderComp />
        )
    }
    const handlePasswordChange = (values) => {
        delete values.confirmPassword
        updatePassword(values)
    }
    const content = (
        <Form
            onFinish={handlePasswordChange}
            layout='vertical'>
            <Form.Item
                label="Old Password"
                name="oldPassword"
                rules={[{ required: true, message: 'Old Password is required' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="New Password"
                name="newPassword"
                rules={[{ required: true, message: 'New Password' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                    { required: true, message: 'New Password' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' >Submit</Button>
            </Form.Item>
        </Form>
    )

    return (
        <div className="profilePageWrap">
            <div className=''>
                <p className='adminProfileHeading'>User Profile</p>
                <Row gutter={32}>
                    <Col lg={8} xs={24}>
                        <div className='imageButtonProfile'>
                            <div className='imageDivProfile'>
                                <img src={getImageAbsoluteURL(profile?.profileImageUrl || "")} alt="" />
                            </div>
                            <div className='changePasswordWrap'>
                                <Popover title="Change Password" content={content} trigger="click">
                                    <Button>Change Password</Button>
                                </Popover>

                            </div>
                        </div>

                    </Col>
                    <Col lg={16} xs={24}>
                        <Form
                            layout="vertical"
                            autoComplete="off"
                            onFinish={updateUserProfile}
                            initialValues={{
                                fullName: profile?.fullName || "",
                                email: profile?.email || "",
                                contactNumber: profile?.contactNumber || "",
                                dob: profile?.dob || "",
                                gender: profile?.gender || "",
                                profileImageUrl: profile?.profileImageUrl ? [
                                    {
                                        uid: '-1',
                                        name: getImageNameFromURI(profile?.profileImageUrl),
                                        status: 'done',
                                        url: getImageAbsoluteURL(profile?.profileImageUrl),
                                        path: profile?.roadMap
                                    }
                                ] : []

                            }}
                        >
                            <Form.Item
                                label="User Name"
                                name="fullName"

                                rules={[{ required: true, message: 'Name Required' }]}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item

                                label="Email Address"
                                name="email"
                                rules={[{ required: true, message: 'Email Required' }]}
                            >
                                <Input disabled={true}></Input>
                            </Form.Item>
                            <Form.Item
                                label="Mobile"
                                name="contactNumber"
                                rules={[{ required: true, message: 'Contact Required' }]}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                label="Date of Birth"
                                // rules={[{required:true, message:'Dob Required'}]}
                                name="dob"
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                label="Gender"
                                name="gender"
                            // rules={[{required:true, message:'Gender Required'}]}
                            >
                                <Select>
                                    <Option value="Male">
                                        Male
                                    </Option>
                                    <Option value="Female">
                                        Female
                                    </Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="profileImageUrl"
                                label="Profile Image"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                rules={[{ required: true, message: "Please upload an image" }]}
                            >

                                <ImageUploader
                                    listType="picture-card"
                                    maxCount={1}
                                    folder="UsersProfile"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    {/* <Col span={6}> <p className='editProfile'>Edit Profile <BsPencil className="inline-block" /></p> </Col> */}
                </Row>
            </div>
        </div>
    )
}