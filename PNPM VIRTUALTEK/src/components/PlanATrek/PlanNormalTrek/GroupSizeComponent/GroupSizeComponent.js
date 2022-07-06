import "./GroupSizeComponent.scss"

const sizes = ["Solo", "Couple", "Family", "Group"]

export default function GroupSizeComponent({state, dispatch}){
    function handleClick(e){
        dispatch({type:"changeGroupSize", payload:(e.target.innerHTML)})
    }
    return (
        <div className="GroupSizeCompWrap">
            {sizes.map((size, index)=>{
                if(state.groupSize === size){
                    return <div key={index} className="sizeComp active" onClick={(e)=>{handleClick(e)}}>{size}</div>
                }else{
                    return (
                        <div key={index} className="sizeComp" onClick={(e)=>{handleClick(e)}}>{size}</div>
                    )
                }

            })}
            
        </div>
    )
}