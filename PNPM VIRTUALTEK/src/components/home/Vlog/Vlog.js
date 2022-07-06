import VlogComponent from "./VlogComponent/VlogComponent"


import "./Vlog.scss"
import {getImageAbsoluteURL} from '../../../utils/string'



export default function Vlog({blogData}) {
    console.log("This is blog data",blogData)
    var flipImage = false
    return (
        <div className="container vlogMain mt-20 ">
            <h2 className="titleVlog">&nbsp; &nbsp; From our vlogs</h2>
            {blogData?.map((vlogDetail, index)=>{
                if(index === 1){
                    flipImage  = true
                }
                if(index >1){
                    return null
                }
               return  <VlogComponent key={index} vlogImage={getImageAbsoluteURL(vlogDetail?.image)} vlogTitle={vlogDetail?.title} vlogDetail={vlogDetail?.shortDescription} flipImage={flipImage} slug = {vlogDetail?.slug}/>
            })}
            
        </div>

    )
}