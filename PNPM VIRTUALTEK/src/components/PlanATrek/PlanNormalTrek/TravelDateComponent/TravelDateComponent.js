import "./TravelDateComponent.scss"
import { AiFillCalendar } from 'react-icons/ai'

import ChooseTravelDateComponent from "./ChooseTravelDateComponent/ChooseTravelDateComponent"

const travelDateTypes = ["Fixed", "Approx", "Not Fixed"]
export default function TravelDateComponent({ state, dispatch }) {
    
    function handleClick(e){
        dispatch({type:"changeDateType", payload:e.target.id})
    }
    return (
        <div className="travelDateComponentWrap">
            <div className="datetype">
            {travelDateTypes.map((travelDateType, index) => {
                if (state.travelDateType === travelDateType) {
                    return (<div key={index} className="iconDate active" id={travelDateType} onClick ={(e)=>{handleClick(e)}}>
                    <AiFillCalendar size={30}/>
                    <p>{travelDateType}</p>
                </div>)
                }
                else {
                    return (<div className="iconDate" id={travelDateType} onClick ={(e)=>{handleClick(e)}}>
                        <AiFillCalendar size={30} />
                        <p>{travelDateType}</p>
                    </div>)
                }

            })}
            </div>
           
            <ChooseTravelDateComponent travelDateType = {state.travelDateType} dispatch = {dispatch} state={state} />
        </div>
    )
} 