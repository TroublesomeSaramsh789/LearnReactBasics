
import { Link } from "react-router-dom"
import { useState,useContext, useEffect } from "react"
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoPersonOutline } from 'react-icons/io5'
import { BsFillPersonFill, BsKeyFill } from 'react-icons/bs'
import { Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";

import "./LoginPage.scss"
import LoginBg from "../../assets/loginbg.webp"
import { useLoginUser } from "../../services/authApi";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
    const authData = useContext(AuthContext)
   const navigate = useNavigate();
    const [height, setHeight] = useState(window.screen.height)
    const {mutate:loginMutate, isLoading} = useLoginUser() 
    function windowResize() {
        setHeight(window.screen.height)

    }

    useEffect(() => {
        window.addEventListener('resize', windowResize)

    }, [height])
    var styles = {
        height: height,

    }

    const [loginForm] = Form.useForm();
    
   
    
    const login = (values) => {
        loginMutate(values)
    }

    if(authData.isAuthenticated && (authData?.profile?.userType === 'Admin' || authData?.profile?.userType === 'Guide')){
         authData.setUserType(authData?.profile.userType);
            authData.setUserName(authData?.profile.fullName);
            navigate("/dashboard")
     } 
     if(authData.isAuthenticated && authData?.profile?.userType === 'User'){
          authData.setUserType(authData?.profile.userType);
            authData.setUserName(authData?.profile.fullName);
             navigate("/userdashboard")
     }   
    return (
        <div className="mainLoginWrap" style={styles} >
            <img src={LoginBg} alt="" />
            <div className="LoginBlockWrap container">
                <div className="topIcon">
                    <IoPersonOutline size={50} />
                </div>
                <Form
                    onFinish={login}
                    form={loginForm}
                    layout="vertical"
                  
                >
                    <div className="loginWrap">

                        <div className="loginform">
                            <div className="form-group">
                                {/* <label for="username"><BsFillPersonFill className="inline-block" /> Username</label>
                                <input type="username" className="form-control" name="username" placeholder="Username" /> */}
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                    ]}
                                    label={<><BsFillPersonFill className="inline-block" /> Email</>}

                                    tooltip="This is a required field"
                                >
                                    <Input placeholder="Enter your email" />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                {/* <label for="password"> <BsKeyFill className="inline-block" />Password</label> */}
                                {/* <input type="password" className="form-control" name="password" placeholder="password" /> */}
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                    label={<><BsKeyFill className="inline-block" /> Password</>}

                                    tooltip="This is a required field"
                                >
                                    <Input.Password placeholder="Enter your password" />
                                </Form.Item>
                            </div>
                            <div className="forgetPassDiv">
                                <Link to="/forget-password"><p>Forgot Password?</p></Link>
                            </div>
                            <div className="buttonDiv">
                                <button className="btn btn-outline-secondary loginButton">LOGIN</button>
                            </div>
                            <div className="moreWays">
                                <p>More Ways to Sign In</p>
                                <div className="icons">
                                    <FaFacebook size={25} />
                                    <FaGoogle size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>

            </div>
        </div>
    )
}