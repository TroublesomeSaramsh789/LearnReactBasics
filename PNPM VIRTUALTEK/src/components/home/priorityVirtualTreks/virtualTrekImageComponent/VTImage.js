import "./VTImage.scss";
import { getImageAbsoluteURL } from "../../../../utils/string";

export default function VTImage({ latestNormalTrek }) {
  return (
    <div className=" row mainDiv">
      {latestNormalTrek?.map((content, index) => {
        if (index !== 4)
          return (
              <div key={index}  className="imageDiv imageDivPriorityTrek col-sm-6 col-lg-3 col-md-6 ">
              <div className="imageOnlyDiv relative">
                <img
                  className="imageElement"
                  src={getImageAbsoluteURL(content?.sliderImages[0]) || ""}
                  alt="image_of_VT"
                />
                <div className="absolute inset-0 bg-[#0000004d]" />
              </div>

              <div className="titleTextDiv">
                <p className="titleText">{content?.title || ""}</p>
              </div>

              <p className="daysRem">{content?.duration || ""}</p>
            </div>
          );
        else return <></>;
      })}
    </div>
  );
}
