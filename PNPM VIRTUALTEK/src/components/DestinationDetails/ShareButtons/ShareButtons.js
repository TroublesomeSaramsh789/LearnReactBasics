import SocialMediaIcons from "../../Footer/SocialMediaIcons/SocialMediaIcons"
import "./ShareButton.scss"
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs"

const size = 15
export default function ShareButton() {
    return (
        <div className="shareButton">
            <p className="shareThis">Share This Trip</p>
            <ul className="socialMediaMainDiv">
                <li>
                    <BsFacebook size={size} />
                </li>
                <li>
                    <BsYoutube size={size} />
                </li>
                <li>
                    <BsLinkedin size={size} />
                </li>
                <li>
                    <BsInstagram size={size} />
                </li>
            </ul>
        </div>
    )
}