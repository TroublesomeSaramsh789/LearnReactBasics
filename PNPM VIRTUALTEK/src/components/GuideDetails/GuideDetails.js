

import "./GuideDetails.scss"

import { Form, Button, Input } from 'antd';




import HeaderImageComponent from "../AboutUs/HeaderImage/HeaderImage"
import GuideDetailsCover from "../../assets/guideDetails.webp"

import GuideDetailCard from './GuideDetailCard/GuideDetailCard'
import { useParams } from "react-router-dom";
// import PhotoVideoCardComponent from "./PhotoVideoCardComponent/PhotoVideoCardComponent";


import { useSingleGuideDetail } from "../../services/WebsiteApisService";
import LoaderComp from "../LoaderComp/LoaderComp";


const { TextArea } = Input;




const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} style={{ backgroundColor: "#fd578d", borderColor: "#fd578d" }} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);
export default function GuideDetails() {
    const params = useParams()
    
    const {isLoading, data} = useSingleGuideDetail(params.slug)
   
    if(isLoading){
        return (
            <LoaderComp/>
        )
    }
    
    return (
        <div >


            <div className="guideDetailsWrap">
                <HeaderImageComponent image={GuideDetailsCover} />
                <div className="guideDetailsMainDiv container">
                     <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <div className="negativeMarginCard">
                                <GuideDetailCard data={data.data} />
                            </div>
                        </div>
                        <div className="col-md-7 col-md-7">
                            <div className="wordOfGuide">
                                <h5>Words From {data.data.fullName}</h5>
                                <p>{data.data.words}</p>
                            </div>

                        </div>
                    </div>
                    
                    {/* <div className="mt-16">
                        <PhotoVideoCardComponent />
                    </div>
                    
                    <div className="commentSection">
                        <h4>Provide Feedback</h4>
                        <Rate className="rateDivComment" ></Rate>
                        <div className="commentInput">
                            <Comment
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                                content={
                                    <Editor
                                    //   onChange={this.handleChange}
                                    //   onSubmit={this.handleSubmit}
                                    //   submitting={submitting}
                                    //   value={value}
                                    />
                                }

                            />
                        </div>
                        <div>
                            {reviewDatas.map((reviewData, index) => {
                                return <TravellerReviewComponent comment= {true} text={reviewData.text} name={reviewData.name} post={reviewData.post} ratings={reviewData.ratings} />
                            })}
                        </div>
                    </div> */} 
                </div> 

            </div>
        </div>
    )
}