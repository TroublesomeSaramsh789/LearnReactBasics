import "./TextButtonComponent.scss";
import { Rate, Button } from "antd";
import { Link } from "react-router-dom";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
export default function TextButtonComponent({
  guideName,
  guideGender,
  guidePP,
  titleText,
  rating,
  price,
  crossedPrice,
  isGuide,
  guideSlug,
  trekSlug,
  virtualTrek,
}) {
  return (
    <>
      <div className="textButtonMain">
        {isGuide ? (
          <div className="profilePictureDiv my-2">
            <div className="m-auto flex justify-center gap-2 mt-2">
              <div className="ppTextDiv">
                <h5 className="font-semibold">{guideName}</h5>
                {/* <p>More About Us</p> */}
              </div>
              <div className="iconDiv">
                {guideGender?.toLowerCase() === "male" ? (
                  <BsGenderMale size={22} />
                ) : (
                  <BsGenderFemale size={22} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="topicText my-2">{titleText}</div>
        )}
        {!isGuide &&
          (rating && rating !== "0" && rating !== 0 && 
            <div className="flex">
              <Rate
                disabled
                defaultValue={rating}
                className="iconElement"
                allowHalf={true}
              />
              <p>
              <span className="iconText"> {rating}</span>
            </p>
            </div>
          )}
        {!isGuide ? (
          <>
            <div className="priceBookDiv">
              <div className="priceDiv">
                <p className="crossed">${crossedPrice}</p>
                <p className="price">
                  <span className="boldblue">${price}</span> per Adult
                </p>
              </div>
              <div className="bookButtonDiv">
                {virtualTrek ? (
                  <Link to={`/virtual-trek/${trekSlug}`}>
                    <Button size="large">See More</Button>
                  </Link>
                ) : (
                  <Link to={`/normal-trek/${trekSlug}`}>
                    <Button size="large">See More</Button>
                  </Link>
                )}
                {/* <a className="btn btn-outline-secondary btn-md BookNowBtn">BOOK NOW</a> */}
              </div>
            </div>
          </>
        ) : (
            <div className="moreAboutMe w-max">
              <Link  to={`/guidelisting/${guideSlug}`}>
                <div classname="block mx-auto my-2">
                <Button className="mx-auto" shape="round" size="large" >
                  More About Me
                </Button>
                </div>
              </Link>
              {/* <a className="btn btn-outline-secondary btn-md BookNowBtn">BOOK NOW</a> */}
            </div>

        )}
        {}
      </div>
    </>
  );
}
