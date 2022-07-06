import "./VlogComponent.scss"

import { Link } from "react-router-dom"
import { Button } from 'antd'
import { AiOutlineArrowRight } from "react-icons/ai"


export default function VlogComponent({ vlogImage, vlogTitle, vlogDetail, flipImage = false, slug }) {
    var styles = {}

    if (flipImage) {
        styles = {
            flexDirection: "row-reverse",

        }


    } else {
        styles = {}
    }

    return (
        <div className="row" style={styles}>
            <div className="imageDiv col-md-6 col-lg-6">
                <img className="vlogImage" src={vlogImage} ></img>
            </div>

            <div className="textDiv col-md-6 col-lg-6" >
                <h1 className="vlogTitle">{vlogTitle}</h1>
                <p className="vlogDetail">{vlogDetail}</p>
                <Link to={`/blog/${slug}`}>
                    <div className="blogButtonDiv">

                        <Button size="large" type="primary">View Blog</Button>
                    </div>
                </Link>

            </div>
        </div>
    )
}