import "./Information.scss"




export default function Information({data}){
   
    return (
        <div className="informationMainWrap">
            <div className="tripDesDiv">
                <h5>Trip Description</h5>
                <div dangerouslySetInnerHTML={{__html:data?.trekDescription}}/>
            </div>
            <div className="includeExcludeDiv">
                <h5>Include Exclude</h5>
                <div dangerouslySetInnerHTML={{__html:data?.includeExclude}}></div>
            </div>
           
        </div>
    )
}