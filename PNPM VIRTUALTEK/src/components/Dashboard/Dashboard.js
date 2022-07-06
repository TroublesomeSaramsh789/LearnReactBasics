import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Layout } from 'antd'
import logoImage from "../../assets/logo.png"

import {AiOutlineBell} from 'react-icons/ai'
import {useNavigate} from "react-router-dom"
import "./Dashboard.scss"

import SideNav from "./SideNav/SideNav"
import {getImageAbsoluteURL} from "../../utils/string"
import { AuthContext } from '../../context/AuthContext'

const { Header, Content, Footer, Sider } = Layout
export default function Dashboard() {
   const navigation = useNavigate()
    
 
    const {profile} = useContext(AuthContext)

    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <div className="dashboardHeaderWrap">
            <Header>
              <div className="dashboardHeader">
                <div className="logoDiv">
                  <div onClick={()=>navigation("/")} className="nav-logo pt-2">
                    <img src={logoImage} alt="logo" title="logo" />
                  </div>
                </div>
                <div className="otherDetails">
                  <p>
                    <AiOutlineBell size={35} />
                  </p>
                  <div className="imageDivDashBoardProfile">
                    <img
                      src={getImageAbsoluteURL(profile.profileImageUrl)}
                      alt="Image-dash"
                    />
                  </div>

                  <div className="nameDesignation">
                    <Link to="/dashboard/profilePage">
                      <p>{profile.fullName} </p>
                      <p> {profile.userType}</p>
                    </Link>
                  </div>
                </div>
              </div>
            </Header>
          </div>

          <Layout className="site-layout">
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <SideNav />
            </Sider>
            <Content style={{ margin: "0 2px", backgroundColor: "white" }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </>
    );

}