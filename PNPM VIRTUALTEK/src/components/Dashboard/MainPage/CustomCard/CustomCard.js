import "./CustomCard.scss"
export default function CustomCard({title, number}) {
    return (
        
        <div className="cardMain">
            <div className="cardTitleDiv">
                <p className="cardTitleText">{title}</p>
            </div>
            <div className="numberDiv">
                <p className="numberText">{number}</p>
            </div>
        </div>
    )
}