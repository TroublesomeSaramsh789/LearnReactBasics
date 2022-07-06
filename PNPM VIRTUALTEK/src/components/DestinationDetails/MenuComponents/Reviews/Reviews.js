import "./Reviews.scss"
import TravellerReviewComponent from '../../../AboutUs/TravellerReviews/TravellerReviewComponent/TravellerReviewComponent'

const reviewDatas = [
    {
        text: "Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Mr. Sushil Pandey",
        post: "Tourist",
        ratings: "4"

    },
    {
        text: "Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Mr. Sushil Pandey",
        post: "Tourist",
        ratings: "4"

    },
    {
        text: "Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Mr. Sushil Pandey",
        post: "Tourist",
        ratings: "4"

    }
]
export default function Reviews() {
    return (
        <div className="reviewMainDiv">
            <div>
                {reviewDatas.map((reviewData, index) => {
                    return <TravellerReviewComponent key={index} comment={true} text={reviewData.text} name={reviewData.name} post={reviewData.post} ratings={reviewData.ratings} />
                })}
            </div>
        </div>
    )
}