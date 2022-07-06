import "./SideNav.scss"
import React from 'react'
import { useState, useContext } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom'

import { AiFillDashboard, AiOutlineUsergroupAdd, AiFillSetting, AiOutlineBook, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdLibraryBooks, MdPerson, MdOutlineContacts, MdFreeCancellation } from 'react-icons/md'
import { BiGridAlt, BiLogOut, BiPackage, BiMobile, BiWalk, BiSliderAlt } from 'react-icons/bi'
import { ImBlog, ImBlogger, ImEarth } from 'react-icons/im'
import { BsFillPersonCheckFill, BsFillBookmarkCheckFill } from 'react-icons/bs'
import { RiChatSettingsLine, RiContactsBookLine } from 'react-icons/ri'
import { GrPlan } from 'react-icons/gr'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { AuthContext } from "../../../context/AuthContext";

const { SubMenu } = Menu;

const rootSubmenuKeys = ['webmg', 'blogmgmt', 'packmgmt', 'bookmgmt'];

export default function SideNav() {
    let defaultOpen = 'webmg'
    const [openKeys, setOpenKeys] = useState(['webmg']);
    const { profile } = useContext(AuthContext)




    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="sideNavDashboard">

            <Menu
                defaultSelectedKeys={[defaultOpen]}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                defaultOpenKeys={['webmg']}
                mode="inline"
                theme="dark"

            >   {
                    (profile.userType === 'Admin')
                    && (
                        <>
                            <Menu.Item key="dash" icon={<AiFillDashboard />}>
                                <Link to="/dashboard">Dashboard</Link>
                            </Menu.Item>

                            <SubMenu key="webmg" icon={<MdLibraryBooks />} title="Website Management">
                                <Menu.Item key="teams" icon={<AiOutlineUsergroupAdd className="inline-block" />}>
                                    <Link to="/dashboard/team">Teams</Link>
                                </Menu.Item>
                                <Menu.Item key="guides" icon={<MdPerson className="inline-block" />}>
                                    <Link to="/dashboard/guides">Guides</Link>
                                </Menu.Item>
                                <Menu.Item key="testo" icon={<MdOutlineContacts className="inline-block" />}>
                                    <Link to="/dashboard/testomonial">Testomonial</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="blogmgmt" icon={<ImBlog />} title="Blog Management">
                                <Menu.Item key="blogcat" icon={<BiGridAlt className="inline-block" />}>
                                    <Link to="/dashboard/blogCategory">Blog Category</Link>
                                </Menu.Item>
                                <Menu.Item key="blog" icon={<ImBlogger className="inline-block" />}>
                                    <Link to="/dashboard/blogs">Blogs</Link>
                                </Menu.Item>
                            </SubMenu>

                        </>

                    )

                }

                <SubMenu key="packmgmt" icon={<BiPackage />} title="Package Management">
                    <Menu.Item key="vtpkm" icon={<BiMobile className="inline-block" />}>
                        <Link to="/dashboard/virtualPackage">
                            Virtual Trek
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="ntpkm" icon={<BiWalk className="inline-block" />}>
                        <Link to="/dashboard/normalPackage">
                            Normal Trek
                        </Link>
                    </Menu.Item>
                </SubMenu>

                {/* working area */}
                {
                    profile.userType === 'Admin'
                    &&
                    <>
                        <SubMenu key="bookmgmt" icon={<AiOutlineBook />} title="Booking Management">
                            <SubMenu key="bookedpak" icon={<BsFillBookmarkCheckFill className="inline-block" />} title="Booked Packages">
                                <Menu.Item key="virtualtrekbook" icon={<BiMobile className="inline-block" />}>
                                    <Link to="/dashboard/virtual-booking-admin" />
                                    Virtual Trek
                                </Menu.Item>
                                <Menu.Item key="normaltrekbook" icon={<BiWalk className="inline-block" />}>
                                    <Link to="/dashboard/normal-booking-admin" />Normal Trek
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu disabled key="cancelpak" icon={<MdFreeCancellation className="inline-block" />} title="Canceled Packages">
                                <Menu.Item key="virtualtrekcancel" icon={<BiMobile className="inline-block" />}>Virtual Trek</Menu.Item>
                                <Menu.Item key="normaltrekcancel" icon={<BiWalk className="inline-block" />}>Normal Trek</Menu.Item>
                            </SubMenu>
                            <Menu.Item disabled key="plannedtrips" icon={<GrPlan className="inline-block" />}>Planned Trips</Menu.Item>
                            {/*<Menu.Item key="blog" icon={<ImBlogger className="inline-block" />}>Blogs</Menu.Item> */}
                        </SubMenu>
                        <Menu.Item key="register" icon={<BsFillPersonCheckFill />}>
                            <Link to="/dashboard/registeredUsers">
                                Registered Users
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="websettings" icon={<AiFillSetting />}>
                            <Link to="/dashboard/webSettings">
                                Website Settings
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="slider" icon={<BiSliderAlt />}>
                            <Link to="/dashboard/slider">
                                Slider
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="contactmes" icon={<RiChatSettingsLine />}>
                            <Link to="/dashboard/contactMessage">
                                Contact Messages
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="subs" icon={<RiContactsBookLine />}>
                            <Link to="/dashboard/subscribers">
                                Subscribers
                            </Link>

                        </Menu.Item>
                    </>
                }
                {profile.userType === 'Guide'
                    &&
                    <>
                        <Menu.Item key="addLive" icon={<AiOutlinePlusCircle />}>
                            <Link to="/dashboard/add-live">Add Live</Link>
                        </Menu.Item>
                        <Menu.Item key="mylives" icon={<AiOutlinePlusCircle />}>
                            <Link to="/dashboard/my-lives">My Lives</Link>
                        </Menu.Item>
                    </>

                }

                <Menu.Item key="visitsite" icon={<ImEarth />}>
                    <Link to="/">
                        Visit Site
                    </Link>
                </Menu.Item>
                <Menu.Item key="logout" icon={<BiLogOut />}>
                    <Link to="/logout">Logout</Link>
                </Menu.Item>
            </Menu>
        </div>
    )

}