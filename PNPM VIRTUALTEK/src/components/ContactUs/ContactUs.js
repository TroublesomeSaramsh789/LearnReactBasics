

import "./ContactUs.scss"
import { Form, Input, Button } from 'antd'
import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"
import ContactUsHeader from "../../assets/aboutUsHeader.webp"
import { useAddContact } from '../../services/WebsiteApisService'
import LoaderComp from "../LoaderComp/LoaderComp"

const {TextArea} = Input
export default function ContactUs() {
    const { mutate: addContactMutate, isLoading } = useAddContact()

    if(isLoading){
        <LoaderComp/>
    }
    const addContactUs = (values) => {
       
        addContactMutate(values)
    }
    return (

        <div className="">

            <HeaderImageComponent image={ContactUsHeader} title={"Contact Us"} />

            <div className="contactUsFormWrap container">
                <div className="row">

                    <div className="col-md-5 col-lg-5">Image here</div>
                    <div className="col-md-7 col-lg-7" >
                        <div className="mainContact">
                            <h3>Get In Touch</h3>
                            <p className="headingAux">Feel Free to contact us</p>
                            <Form
                                layout="vertical"
                                onFinish={addContactUs}
                            >
                                <Form.Item
                                    label="Full Name"
                                    name="fullName"
                                    rules={[{ required: true, message: "Enter your name" }]}
                                >

                                    <Input></Input>
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: "Enter your email" }]}
                                >
                                    <Input></Input>
                                </Form.Item>
                                <Form.Item
                                    label="Contact Number"
                                    name="contactNumber"
                                    rules={[{ required: true, message: "Enter your contact number" }]}
                                >
                                    <Input></Input>
                                </Form.Item>
                                <Form.Item
                                    label="Subject"
                                    name="subject"
                                    rules={[{ required: true, message: "Enter your subject" }]}
                                >
                                    <Input></Input>
                                </Form.Item>
                                <Form.Item
                                    label="Message"
                                    name="message"
                                    rules={[{ required: true, message: "Enter your message" }]}
                                >
                                    <TextArea cols={10}></TextArea>
                                </Form.Item>
                                
                                <Form.Item>
                                    <Button type="button" htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                </div>
                {/* <div className="mapsDiv">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14134.065952909976!2d85.32395955!3d27.670427399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1644235272803!5m2!1sen!2snp" width={1200}   allowfullscreen="" loading="lazy"></iframe>
                </div> */}
            </div>
        </div>
    )
}