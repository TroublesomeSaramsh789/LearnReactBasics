import './SocialMediaIcons.scss'
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs'

export default function SocialMediaIcons({ facebook = true, youtube = true, linkedIn = true, instagram = true, size = 20, spaceBefore, data }) {
    var count = []
    for (var i = 0; i < spaceBefore; i++) {
        count.push("Data")
    }

    return (
        <div className="row g-0 socialMediaMainDiv">
            {count.map((dummy_val, index) => {
                return <div key={index} className="col-md-1"></div>
            })}
            <div className="col-md-1">
                {facebook ? <BsFacebook size={size} className="col" /> : <></>}
            </div>
            <div className="col-md-1">
                {youtube ? <BsYoutube size={size} /> : <></>}
            </div>
            <div className="col-md-1">
                {linkedIn ? <BsLinkedin size={size} /> : <></>}
            </div>
            <div className="col-md-1">
                {instagram ? <BsInstagram size={size} /> : <></>}
            </div>


        </div>
    )
}



