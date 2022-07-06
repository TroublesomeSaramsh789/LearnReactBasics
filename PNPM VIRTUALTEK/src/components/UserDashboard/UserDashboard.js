
import { Link } from 'react-router-dom'
import './UserDashboard.scss'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import SideNavUser from './SideNavUser/SideNavUser'
import { useContext } from 'react';
import logoImage from "../../assets/logo.png"

import { AuthContext } from '../../context/AuthContext'


import { getImageAbsoluteURL } from '../../utils/string'
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout

export default function UserDashboard() {
   const navigation = useNavigate()
    const { profile } = useContext(AuthContext)

    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <div className="userDashboardHeaderWrap">
            <Header>
              <div className="dashboardHeader">
                <div className="logoDiv">
                  <div onClick={()=> navigation("/")} className="nav-logo pt-2">
                    <img src={logoImage} alt="logo" title="logo" />
                  </div>
                </div>
                <div className="otherDetails">
                  <div className="imageDivDashBoardProfile">
                    <img
                      src={getImageAbsoluteURL(profile?.profileImageUrl)}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </Header>
          </div>

          <Layout className="site-layout-background sideNavUser">
            <Sider breakpoint="lg">
              <SideNavUser />
            </Sider>
            <Content
              style={{ margin: "0 2px", backgroundColor: "white" }}
              className="p-4"
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </>
    );

}