import "./BookDetailsComponent.scss";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
export default function BookDetailsComponent({ data, profile }) {
  return (
    <div className="bookDetailsCompWrap">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="ratingDivDD">
            <p className="ratingText">Ratings</p>
            {data.ratings !== "0" && data.ratings !== 0 && (
              <p className="pull-right">
                <Rate
                  disabled
                  defaultValue={data.ratings}
                  className="iconElement"
                  allowHalf={true}
                />
                <span className="iconText"> {data.ratings}</span>
              </p>
            )}
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="getBookingDD">
            <p>Get your booking before its too late!</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="priceDivDD">
            <p>
              <span className="priceDD">Pirce: $ {data?.price || ""}</span> per
              person
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 buttonDiv">
          <div className="enquiryButton">
            <li>
              <BsFileEarmarkRichtext
                size={22}
                className="inline-block blueButton"
              />{" "}
              <span className="buttonText">Enquiry Now</span>
            </li>
          </div>
        </div>
        <div className="col-lg-2 col-sm-3 buttonDiv">
          <div className="bookNowButton">
            <Link to="/booking" state={{ trekData: data }}>
              {" "}
              <FaTelegramPlane
                size={22}
                className={`inline-block pinkButton ${
                  profile?.userType === "User"
                    ? "enableButton"
                    : "disableButton"
                }`}
              />{" "}
              <span className="buttonText">Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
