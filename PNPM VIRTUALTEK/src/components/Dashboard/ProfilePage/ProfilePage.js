import './ProfilePage.scss'
import { useContext } from 'react';
import { Row, Col, Button, Form, Input, Select } from 'antd';

import { AuthContext } from '../../../context/AuthContext';
import { useUpateProfile, useUpdateGuide } from '../../../services/UserGuideUpdate'
import LoaderComp from '../../LoaderComp/LoaderComp';
import { getImageAbsoluteURL, getImageNameFromURI } from '../../../utils/string'
import ImageUploader from '../../Form/ImageUploader';
import { normFile } from '../../../services/normFile/normFile';



const { TextArea } = Input
const {Option} = Select

export default function ProfilePage() {
    const { profile } = useContext(AuthContext)
    const { mutate: updateUserProfileMutate, isLoading: updateLoading } = useUpateProfile()
    const { mutate: updateGuideProfileMutate, isLoading: updateGuideLoading } = useUpdateGuide()


    const updateUserProfile = (values) => {
        // values.profileImageUrl = "default/noimage.jpg"
        delete values.email
        if(values?.profileImageUrl?.[0].response){
            values.profileImageUrl = values.profileImageUrl[0].response.data.path
        }else{
            values.profileImageUrl = profile?.profileImageUrl
        }
        updateUserProfileMutate(values)
    }
    const updateGuideProfile = (values) => {

        updateGuideProfileMutate(values)
    }
    if (updateLoading || updateGuideLoading) {
        return (
            <LoaderComp />
        )
    }

    return (
        <div className="profilePageWrap">
            <div className=''>
                <p className='adminProfileHeading'>Admin Profile</p>
                <Row gutter={32}>
                    <Col span={8}>
                        <div className='imageButtonProfile'>
                            <div className='imageDivProfile'>
                                <img src={getImageAbsoluteURL(profile?.profileImageUrl)} alt="" />
                            </div>
                            <div className='changePasswordWrap'>
                                <Button>Change Password</Button>
                            </div>
                        </div>

                    </Col>
                    <Col span={16}>
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
                                profileImageUrl: profile.profileImageUrl ? [
                                    {
                                        uid: '-1',
                                        name: getImageNameFromURI(profile.profileImageUrl),
                                        status: 'done',
                                        url: getImageAbsoluteURL(profile.profileImageUrl),
                                        path: profile.roadMap
                                    }
                                ] : []

                            }}
                        >
                            <Form.Item
                                label="Admin Name"
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
                                    <Option value = "Male">
                                        Male
                                    </Option>
                                    <Option value = "Female">
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

            {profile.userType === 'Guide'
                &&

                <div className=''>
                    <p className='adminProfileHeading'>Guide Profile Updates</p>
                    <div className='guideProfileEdit'>
                        <Row gutter={32}>
                            <Col span={24}>
                                <Form
                                    layout="vertical"
                                    autoComplete="off"
                                    onFinish={updateGuideProfile}
                                    initialValues={{
                                        quote: profile?.quote || "",
                                        words: profile?.words || "",
                                        twitterLink: profile?.twitterLink || "",
                                        facebookLink: profile?.facebookLink || "",
                                        instagramLink: profile?.instagramLink || "",
                                        skills: profile?.skills || ""
                                    }}
                                >
                                    <Form.Item
                                        label="Quote"
                                        name="quote"
                                        rules={[{ required: true, message: 'Quote Required' }]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                    <Form.Item
                                        label="Words"
                                        name="words"
                                        rules={[{ required: true, message: 'Email Required' }]}
                                    >
                                        <TextArea cols={10} />

                                    </Form.Item>
                                    <Form.Item
                                        label="Twitter Link"
                                        name="twitterLink"
                                    // rules={[{ required: true, message: 'Contact Required' }]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                    <Form.Item
                                        label="Facebook Link"
                                        name="facebookLink"
                                    // rules={[{ required: true, message: 'Facebook Required' }]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                    <Form.Item
                                        label="Instagram Link"
                                        name="instagramLink"
                                    // rules={[{ required: true, message: 'Facebook Required' }]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                    <Form.Item
                                        label="Skills"
                                        name="skills"
                                    // rules={[{ required: true, message: 'Facebook Required' }]}
                                    >
                                        <Input></Input>
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
            }
        </div>
    )
}
