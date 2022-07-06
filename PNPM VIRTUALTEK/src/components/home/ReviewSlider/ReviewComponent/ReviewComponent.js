import "./ReviewComponent.scss";
import AvatarImage from "../../../../assets/super_guide_1.jpg";

import { Rate } from "antd";

export default function ReviewComponent({ name, type, review, rating }) {
  return (
    <div className="reviewComponentMain">
      <div className="row">
        <div className="col col-md-6 col-lg-1 avatarDiv">
          <img src={AvatarImage} className="avatar image" />
        </div>
        <div className="col col-md-6 col-lg-2 nametypeDetails">
          <p className="reviewName">{name}</p>
          <p>{type}</p>
        </div>
        {rating !== "0" && rating !== 0 && (
          <div className="col col-md-6 col-lg-9 reviewStar">
            <p className="ratingReview">
              <Rate
                disabled
                defaultValue={rating}
                className="iconElement"
                allowHalf={true}
              />
              <span className="iconText"> {rating}</span>
            </p>
          </div>
        )}
      </div>
      <div className="reviewText">{review}</div>
    </div>
  );
}
