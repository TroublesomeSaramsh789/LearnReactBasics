import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiOutlineShoppingCart, AiOutlineUnorderedList, } from 'react-icons/ai';
import {ImEarth} from 'react-icons/im'
import { MdPerson,MdLiveTv } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

import './SideNavUser.scss'

const { SubMenu } = Menu

export default function SideNavUser() {

    return (
        <div className="sideNavUser">
            <Menu
                mode="inline"


                defaultSelectedKeys={['dashUser']}
            >
                <Menu.Item key="dashUser" icon={<AiFillDashboard />}>
                    <Link to="/userdashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="myAccount" icon={<MdPerson />}>
                    <Link to="/userdashboard/account">My Account</Link>
                </Menu.Item>
                <SubMenu key="userBookings" icon={<AiOutlineShoppingCart />} title="My Bookings" >
                    <Menu.Item key="virtualBooking">
                        <Link to="/userdashboard/virtualBooking">Virtual Bookings</Link>
                    </Menu.Item>
                    <Menu.Item key="normalBooking">
                        <Link to="/userdashboard/normalBooking">Normal Bookings</Link>
                    </Menu.Item>

                </SubMenu>
                <Menu.Item key="myReviews" icon={<AiOutlineUnorderedList />} >
                    <Link to="/userdashboard/reviews">My Reviews</Link>
                </Menu.Item>
                <SubMenu key="userWishList" icon={<AiOutlineShoppingCart />} title="My Wishlist" >
                    <Menu.Item key="destinationWishList">
                        <Link to="/userdashboard/destwishlist">Destination Wishlist</Link>
                    </Menu.Item>
                    <Menu.Item key="guidesWishList">
                        <Link to="/userdashboard/guidewishlist">Guides Wishlist</Link>
                    </Menu.Item>
                </SubMenu>
                
                <Menu.Item key="livelisting" icon={<MdLiveTv />}>
                    <Link to="/userdashboard/live-listing">Live Listing </Link>
                </Menu.Item>
                <Menu.Item key="visitSite" icon={<ImEarth />}>
                    <Link to="/">Visit Site </Link>
                </Menu.Item>
                <Menu.Item key="logoutUser" icon={<BiLogOut />}>
                    <Link to="/logout">Logout </Link>
                </Menu.Item>
           


            </Menu>
        </div>
    )
}