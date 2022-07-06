import "./TitleComponent.scss"

export default function TitleComponent({title, buttonText}){
    return (
    <div className="mainTitle row container mt-20">
                <div className="col-md-6 col-sm-6 col-lg-6">
                    <h2 className=" titleVlog">
                    &nbsp; &nbsp;{title}
                    </h2>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6">
                    
                </div>
            </div>
    )
}