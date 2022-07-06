
import './HeaderImage.scss'


export default function HeaderImageComponent({ image, title, detailText }) {
    
    return (
        <div className="headerImageWrap">
            <div>
            <img className="headerImage" src={image}></img>
            <div className="headerImageOverlay"></div>
            </div>
            
            <div className="centerText">{title}</div>
            <div className="centerText--details">{detailText}</div>
        </div>
    )
}