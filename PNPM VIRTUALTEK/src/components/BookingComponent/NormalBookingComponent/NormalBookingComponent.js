import {useLocation} from 'react-router-dom'

import StepFormMain from "../StepForm/StepFormMain"



export default function NormalBookingComponent (){
    
    const location = useLocation ()
    
    return (
        <div>
            <StepFormMain trekData = {location?.state?.trekData || {}}/>
        </div>
    )
}