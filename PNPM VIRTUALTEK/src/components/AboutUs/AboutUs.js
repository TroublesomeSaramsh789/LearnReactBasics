import { useReducer } from 'react'


import HeaderImage from "./HeaderImage/HeaderImage"
import HeaderImageImg from '../../assets/aboutUsHeader.webp'
import MoreAboutUsMenu from './MoreAboutUsMenu/MoreAboutUsMenu'

import ChooseComponent from './ChooseComponent/ChooseComponent'
import aboutUsReducer from './aboutUsReducer'
import "./AboutUs.scss"



const menuItems = ["Know About Us", "Why Virtual Trek", "Meet Our Team", "Traveller Reviews", "Terms and Conditions", "How to make Payment", "Legal Documents"]

export default function AboutUs() {
    const [state, dispatch] = useReducer(aboutUsReducer, { menuSelected: menuItems[0] })

    return (
        <>
    
          <div className=" aboutUsMain">
            <HeaderImage image={HeaderImageImg} title={state.menuSelected} />
            <div className="container row aboutUsContent">
                <div className="col-md-8 col-lg-8">
                    <ChooseComponent title={state.menuSelected} />
                </div>
                <div className="col-md-4 col-lg-4">
                    <MoreAboutUsMenu menuItems={menuItems} activeMenu={menuItems[1]} dispatch={dispatch} state={state} />
                </div>
            </div>
        </div>
        </>
      

    )
}