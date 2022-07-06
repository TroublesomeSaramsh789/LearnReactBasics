import "./TravellerReviewComponent.scss";
import Image from "../../../../assets/super_guide_1.jpg";
import { Avatar, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getImageAbsoluteURL } from "../../../../utils/string";

const lorem =
  "Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
export default function TravellerReviewComponent({
  comment,
  text,
  name,
  post,
  ratings,
  image,
}) {
  var commentStyleWrap = {};
  var commentTextStyle = {};
  if (comment === true) {
    commentStyleWrap = { display: "flex", flexDirection: "column-reverse" };
    commentTextStyle = { marginTop: "1rem" };
  }
  return (
    <div className="travellerReviewMain">
      <div style={commentStyleWrap}>
        <div style={commentTextStyle}>
          <p className="travellerReviewText">{text}</p>
        </div>
        <div>
          <div className=" d-flex justify-content-between">
            <div className="nameAvatarWrap">
              <div className="avatarWrap ">
                {image ? (
                  <Avatar
                    size={60}
                    icon={<img src={getImageAbsoluteURL(image)} />}
                  />
                ) : (
                  <Avatar size={60} icon={<UserOutlined />} />
                )}
              </div>
              <div className="travellerNamePost">
                <h6>{name}</h6>
                <p>{post}</p>
              </div>
            </div>

            <div className="travellerRatingDiv  ">
              {ratings && ratings !== "0" && ratings !== 0 && (
                <p className="pull-right">
                  <Rate
                    disabled
                    defaultValue={ratings}
                    className="iconElement"
                    allowHalf={true}
                  />
                  <span className="iconText"> {ratings}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
