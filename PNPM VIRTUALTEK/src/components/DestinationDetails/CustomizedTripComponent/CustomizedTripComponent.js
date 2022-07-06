import "./CustomizedTripComponent.scss"
import { FaTelegramPlane } from "react-icons/fa"


export default function CustomizedTripComponent() {
    return (
        <div className="customizedTripWrap mt-10">
            <h4>Want to customize trip</h4>
            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibu</p>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-4">
                    <div className='bookNowButton'>
                        <button className="btn btn-primary"><FaTelegramPlane size={20} className="inline-block pinkButton" /> <span className="buttonText">Book Now</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}