import { Routes, Route, Outlet } from "react-router-dom";

//websites components
import Home from "../components/home/Home";
import MainNav from "../components/MainNav/MainNav";
import HomeLayout from "../components/homeLayout/HomeLayout";
import AboutUs from "../components/AboutUs/AboutUs";
import Guides from "../components/Guides/Guides";
import BestSellingVirtualTrek from "../components/BestSellingVirtualTrek/BestSellingVirtualTrek";
import PopularVirtualTrek from "../components/PopularVirtualTrek/PopularVirtualTrek";
import BestSellingNormalTrek from "../components/BestSellingNormalTrek/BestSellingNormalTrek";
import PopularNormalTrek from "../components/PopularNormalTrek/PopularNormalTrek";
import ContactUs from "../components/ContactUs/ContactUs";
import DestinationDetails from "../components/DestinationDetails/DestinationDetails";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import LoginPage from "../components/LoginPage/LoginPage";
import GuideDetails from "../components/GuideDetails/GuideDetails";
import GuidesListing from "../components/GuidesListing/GuidesListing";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import BecomeAGuide from "../components/BecomeAGuide/BecomeAGuide";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import LinkExpired from "../components/LinkExpired/LinkExpired";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import BlogListing from "../components/Blog/BlogListing/BlogListing";
import BlogSingle from "../components/Blog/BlogSingle/BlogSingle";
// Dashboard Imports
import Dashboard from "../components/Dashboard/Dashboard";
import MainPage from "../components/Dashboard/MainPage/MainPage";
import GuidesDashboard from "../components/Dashboard/Guides/Guides";
import WebsiteSettings from "../components/Dashboard/WebsiteSettings/WebsiteSettings";
import SliderTab from "../components/Dashboard/WebsiteSettings/SliderTab/SliderTab";
import Team from "../components/Dashboard/Team/Team";
import GoLive from "../components/Live/Live";
import Testomonial from "../components/Dashboard/Testomonial/Testomonial";
import BlogCategory from "../components/Dashboard/BlogCategory/BlogCategory";
import Blogs from "../components/Dashboard/Blogs/Blogs";
import ContactMessage from "../components/Dashboard/ContactMessage/ContactMessage";
import RegisteredUsers from "../components/Dashboard/RegisteredUsers/RegisteredUsers";
import Subscribers from "../components/Dashboard/Subscribers/Subscribers";

import ProfilePage from "../components/Dashboard/ProfilePage/ProfilePage";

import AddLive from "../components/Dashboard/AddLive/AddLive";
import MyLives from "../components/Dashboard/MyLives/MyLives";
// Team
import AddTeam from "../components/Dashboard/Team/AddTeam/AddTeam";

//testomonial
import AddTestomonial from "../components/Dashboard/Testomonial/AddTestomonial/AddTestomonial";

//blogs
import AddBlogs from "../components/Dashboard/Blogs/AddBlogs/AddBlogs";
import AddBlogCategory from "../components/Dashboard/BlogCategory/AddBlogCategory/AddBlogCategory";

//normal package
import NormalPackage from "../components/Dashboard/NormalPackage/NormalPackage";
import AddEditNormalPackage from "../components/Dashboard/NormalPackage/AddEditNormalPackage/AddEditNormalPackage";

//virutal package
import VirtualPackage from "../components/Dashboard/VirtualPackage/VirtualPackage";
import AddEditVirtualPackage from "../components/Dashboard/VirtualPackage/AddEditVirtualPackage/AddEditVirtualPackage";

// User Dashboard
import UserDashboard from "../components/UserDashboard/UserDashboard";
import UserDashboardIndex from "../components/UserDashboard/UserDashboardIndex/UserDashboardIndex";
import DestinationWishList from "../components/UserDashboard/DestinationWishlist/DestinationWishlist";
import GuidesWishList from "../components/UserDashboard/GuideWishlist/GuideWishlist";
import MyReview from "../components/UserDashboard/MyReview/MyReview";
import NormalBooking from "../components/UserDashboard/NormalBooking/NormalBooking";
import VirtualBooking from "../components/UserDashboard/VirtualBooking/VirtualBooking";
import UserAccount from "../components/UserDashboard/UserAccount/UserAccount";
import NormalBookingAdmin from "../components/Dashboard/BookingAdmin/NormalBookingAdmin/NormalBookingAdmin";
import VirtualBoookingAdmin from "../components/Dashboard/BookingAdmin/VirtualBookingAdmin/VirtualBookingAdmin";
import LiveListing from "../components/UserDashboard/LiveListing/LiveListing";

import NormalBookingComponent from "../components/BookingComponent/NormalBookingComponent/NormalBookingComponent";

import { RequireAuth, RequireAuthUserGuide } from "./PrivateRoute";

import Logout from "../utils/logout";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/live/:id" element={<GoLive />}></Route>

      <Route path="/" element={<HomeLayout />}>
        {/* <Route index element={<Home />} /> */}

        <Route index element={<Home />} />

        <Route element={<OtherPagesLayout />}>
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="link-expired" element={<LinkExpired />} />
          <Route path="reset-password/:id" element={<ResetPassword />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="guides" element={<Guides />} />
          <Route path="best-selling-vt" element={<BestSellingVirtualTrek />} />
          <Route path="popular-vt" element={<PopularVirtualTrek />} />
          <Route path="best-selling-nt" element={<BestSellingNormalTrek />} />
          <Route path="popular-nt" element={<PopularNormalTrek />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="becomeGuide" element={<BecomeAGuide />} />
          <Route path="blog" element={<BlogListing />} />
          <Route path="blog/:slug" element={<BlogSingle />} />
          <Route path="blog/category/:slug" element={<BlogListing />} />
          <Route
            path="normal-trek/:slug"
            element={<DestinationDetails mode="normal" />}
          />
          <Route
            path="virtual-trek/:slug"
            element={<DestinationDetails mode="virtual" />}
          />

          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="guide-details" element={<GuideDetails />} /> */}
          {/* <Route path="plan-nt" element={<PlanNormalTrek />} /> */}
          {/* <Route path="plan-vt" element={<PlanVirtualTrek />} /> */}
          <Route path="guide-listing" element={<GuidesListing />} />
          <Route path="guidelisting/:slug" element={<GuideDetails />} />
          {/* <Route path="plan-normal-trek" element={<PlanNormalTrek />} /> */}
          <Route path="booking" element={<NormalBookingComponent />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainPage />} />
          <Route path="guides" element={<GuidesDashboard />} />
          <Route path="normal-booking-admin" element={<NormalBookingAdmin />} />
          <Route
            path="virtual-booking-admin"
            element={<VirtualBoookingAdmin />}
          />
          <Route path="webSettings" element={<WebsiteSettings />} />
          <Route path="slider" element={<SliderTab />} />
          <Route path="add-live" element={<AddLive />} />
          <Route path="my-lives" element={<MyLives />} />
          {/* team route */}
          <Route path="team" element={<Team />} />
          <Route path="team/add" element={<AddTeam mode="create" />} />
          <Route path="team/edit/:id" element={<AddTeam mode="edit" />} />

          {/* Testomonial route */}
          <Route path="testomonial" element={<Testomonial />} />
          <Route
            path="testomonial/add"
            element={<AddTestomonial mode="create" />}
          />
          <Route
            path="testomonial/edit/:id"
            element={<AddTestomonial mode="edit" />}
          />

          {/* Blog Category */}
          <Route path="blogCategory" element={<BlogCategory />} />
          <Route
            path="blogCategory/add"
            element={<AddBlogCategory mode="create" />}
          />
          <Route
            path="blogCategory/edit/:id"
            element={<AddBlogCategory mode="edit" />}
          />

          {/* Blog */}
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/add" element={<AddBlogs mode="create" />} />
          <Route path="blogs/edit/:slug" element={<AddBlogs mode="edit" />} />

          {/* Normal Package*/}

          <Route path="contactMessage" element={<ContactMessage />} />
          <Route path="registeredUsers" element={<RegisteredUsers />} />
          <Route path="subscribers" element={<Subscribers />} />

          <Route path="profilePage" element={<ProfilePage />} />

          <Route path="normalPackage" element={<NormalPackage />} />
          <Route
            path="normalPackage/add"
            element={<AddEditNormalPackage mode="create" />}
          />
          <Route
            path="normalPackage/edit/:_id"
            element={<AddEditNormalPackage mode="edit" />}
          />

          <Route path="virtualPackage" element={<VirtualPackage />} />
          <Route
            path="virtualPackage/add"
            element={<AddEditVirtualPackage mode="create" />}
          />
          <Route
            path="virtualPackage/edit/:_id"
            element={<AddEditVirtualPackage mode="edit" />}
          />
        </Route>
      </Route>
      <Route element={<RequireAuthUserGuide />}>
        <Route path="/userdashboard" element={<UserDashboard />}>
          <Route index element={<UserDashboardIndex />} />
          <Route path="live-listing" element={<LiveListing />} />
          <Route path="destwishlist" element={<DestinationWishList />} />
          <Route path="guidewishlist" element={<GuidesWishList />} />
          <Route path="reviews" element={<MyReview />} />
          <Route path="account" element={<UserAccount />} />
          <Route path="virtualBooking" element={<VirtualBooking />} />
          <Route path="normalBooking" element={<NormalBooking />} />
        </Route>
      </Route>
    </Routes>
  );
}

const OtherPagesLayout = () => {
  return (
    <>
      {/* <MainNav /> */}
      <Outlet />
    </>
  );
};
