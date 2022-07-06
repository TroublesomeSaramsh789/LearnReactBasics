import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";
import FooterListBlocks from "./FooterListBlock/FooterListBlock";
import { AiOutlineMail } from "react-icons/ai";

import "./Footer.scss";
import { useWebsiteSettings } from "../../services/WebsiteApisService";
import LoaderComp from "../LoaderComp/LoaderComp";
import Logo from "../../assets/virtual_logo.png";

export default function Footer() {
  const {
    isLoading: isLoadingWebsiteSettings,
    isError: isErrorWebsiteLoading,
    data: websiteSettingData,
  } = useWebsiteSettings();
  if (isLoadingWebsiteSettings) {
    return <LoaderComp />;
  }

  return (
    <div className="">
      <div className="mainFooterDiv">
        <div className="footerUpperDiv row">
          <div className="col-md-6 col-lg-6 leftfUD">
            <div className="row inputEmail">
              <input
                placeholder="  Enter Email"
                className="footerInput col-2"
              ></input>
              <a href="" className="btn btn-outline-secondary col-2 subButton ">
                Subscribe
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 rightfUD">
            <SocialMediaIcons
              size={30}
              spaceBefore={7}
              data={websiteSettingData?.data}
            />
          </div>
        </div>
        <div className="footerLowerDiv row justify-content-center">
          <div className="col col-md-2">
            <FooterListBlocks
              lists={[
                "About Us",
                { title: "About", link: "/about-us" },
                { title: "Team", link: "/about-us" },
              ]}
            />
          </div>
          <div className="col col-md-2">
            <FooterListBlocks
              lists={[
                "Learn",
                { title: "Trek", link: "/best-selling-nt" },
                { title: "FAQ", link: "/about-us" },
              ]}
            />
          </div>
          <div className="col col-md-2">
            <FooterListBlocks
              lists={[
                "Quick Links",
                { title: "Contact Us", link: "/contact-us" },
                { title: "Feedback", link: "" },
              ]}
            />
          </div>
          <div className="col col-md-3">
            <div className=" donationBlock">
              <p className="donationBlockTitle">Write us at</p>
              <p>{websiteSettingData?.data?.writeUsAt}</p>
              <p>
                <span>
                  <AiOutlineMail size={20} className="inline-block" />
                </span>{" "}
                {websiteSettingData.data.email}
              </p>
            </div>
          </div>
          <div className="col-md-2 col-lg-3 ">
            <p className="logo">Logo</p>
            <div className="contactFooter">
              <p>{websiteSettingData?.data?.address}</p>
              <p>{websiteSettingData?.data?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
