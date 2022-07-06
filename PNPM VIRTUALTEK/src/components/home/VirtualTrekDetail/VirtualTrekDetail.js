import "./VirtualTrekDetail.scss"
import WomenLaptop from '../../../assets/womenLaptop.png'

const detailText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
export default function VirtualTrekDetail({}){
    return (
        <div className=" container mt-20 ">
            <div className="row virtualTrekDetailDiv">
            <div className="col-md-6">
                <img src= {WomenLaptop}></img>
            </div>
            <div className="col-md-6 rightDiv">
                <h2 className="title">Virtual Trek</h2>
                <p className="detailText">{detailText}</p>
                <div className="row smallImageDiv">
                    <img className="smallImage" src={WomenLaptop}></img>
                    <img className="smallImage" src={WomenLaptop}></img>
                    <img className="smallImage" src={WomenLaptop}></img>
                </div>
            </div>
            </div>
        </div>
    )
}