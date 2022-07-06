import "./TitleTextComponent.scss"
export default function TitleTextComponent({title, detailText}){
    return (
        <div className="titleTextWrap">
            {/* <h3 className="aboutTitle">{title}</h3> */}
            <p className="aboutDetailText">{detailText}</p>
        </div>
    )
}