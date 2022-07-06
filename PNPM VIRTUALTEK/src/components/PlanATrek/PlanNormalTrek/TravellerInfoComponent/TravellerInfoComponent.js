import "./TravellerInfoComponent.scss"
import {Form, Input} from 'antd'
export default function TravellerInfoComponent({state, dispatch}){
    const [travellerForm] = Form.useForm()
    const handleChange = (e, typeDef)=>{
        var val = e.target.value
        if(typeDef === "firstName"){
           dispatch({type:"setFirstName", payload:val})
        }
        else if(typeDef === "lastName"){
            dispatch({type:"setLastName", payload:val})
        }
        else if (typeDef==="email"){
            dispatch({type:"setEmail", payload:val})
        }
        else if(typeDef === "contactNumber"){
            dispatch({type:"setContactNo", payload:val})
        }
        else if(typeDef === "country"){
            dispatch({type:"setCountry", payload:val})
        }
        else if (typeDef === "address"){
            dispatch({type:"setAddress", payload:val})
        }

    }
    return <div>
        <Form form={travellerForm}>
            <Form.Item 
                label="Full Name"
            >
                <Input onChange = {(e)=>{handleChange(e, "firstName")}} placeholder="Enter Full Name"></Input>
            </Form.Item>
            <Form.Item 
                label="Last Name"
            >
                <Input onChange = {(e)=>{handleChange(e, "lastName")}} placeholder="Enter Last Name"></Input>
            </Form.Item>
            <Form.Item 
                label="Email"
            >
                <Input onChange = {(e)=>{handleChange(e, "email")}} placeholder="Enter Email"></Input>
            </Form.Item>
            <Form.Item 
                label="Contact Number"
            >
                <Input onChange = {(e)=>{handleChange(e, "contactNumber")}} placeholder="Enter Contact Number"></Input>
            </Form.Item>
            <Form.Item 
                label="Country"
            >
                <Input onChange = {(e)=>{handleChange(e, "country")}} placeholder="Enter Your Country"></Input>
            </Form.Item>
            <Form.Item 
                label="Address"
            >
                <Input onChange = {(e)=>{handleChange(e, "address")}} placeholder="Enter Your Address"></Input>
            </Form.Item>
        </Form>
    </div>   
}