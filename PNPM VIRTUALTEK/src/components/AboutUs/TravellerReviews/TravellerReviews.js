import TravellerReviewComponent from "./TravellerReviewComponent/TravellerReviewComponent"
const reviewDatas = [
    {
        text:"Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"Mr. Sushil Pandey",
        post:"Tourist",
        ratings:"4"

    },
    {
        text:"Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"Mr. Sushil Pandey",
        post:"Tourist",
        ratings:"4"

    },
    {
        text:"Lrem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"Mr. Sushil Pandey",
        post:"Tourist",
        ratings:"4"

    },
     {
        text:"Mero Review",
        name:"Mr. Troublesome",
        post:"Tourist",
        ratings:"0"

    },{
        text:"Mero Review Part 2",
        name:"Mr. Troublesome",
        post:"Tourist",
        ratings:0

    }
]
export default function TravellerReview(){
    return <>
        <div className="py-6">
            {reviewDatas.map((reviewData, index)=>{
                return <TravellerReviewComponent key={index} text={reviewData.text} name={reviewData.name} post={reviewData.post} ratings = {reviewData.ratings}/>
            })}
        </div>
    </>
}