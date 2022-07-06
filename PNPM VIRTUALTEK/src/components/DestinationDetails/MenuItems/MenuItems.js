import "./MenuItems.scss"
import { useState, useEffect, useRef } from "react"
import { AiOutlineEye, AiOutlineSchedule, AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdOutlinePreview } from 'react-icons/md'

const menuIcons = [
    <AiOutlineEye className="inline-block" />,
    <AiOutlineSchedule className="inline-block" />,
    <AiOutlineCalendar className="inline-block" />,
    <HiOutlineInformationCircle className="inline-block" />,
    <MdOutlinePreview className="inline-block" />
]
export default function MenuItems({ menuItems, selectedMenu, setSelectedMenu }) {
    const refScrollTo = useRef("")
    const [sideMenuClass, setSideMenuClass] = useState("initialHide")
    const listenToScroll = () => {
        let heightToHideFrom = 550;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        

        if (winScroll > heightToHideFrom) {    
            setSideMenuClass("show");
        } else {
            setSideMenuClass("hide");
        }  
    };
    useEffect(() => {
        
        window.addEventListener("scroll", listenToScroll);
        
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    
    
    
    function handleClick(e) {
        setSelectedMenu(e.target.className)
    }
    function handleSelectChange(e) {
        setSelectedMenu(e.target.value)
    }
    function handleClickSide(e) {
        window.scrollTo(0,500)
        setSelectedMenu(e.target.parentElement.className)
    }
    return (
        <>
            <div className="menuItemsDDWrap" ref = {refScrollTo}>
                <ul className="ulMenu">
                    {menuItems.map((menuItem, index) => {
                        if (menuItem === selectedMenu) {
                            return <li key={index}  className={menuItem} id="active" onClick={(e) => { handleClick(e) }}>{menuIcons[index]} {menuItem} </li>
                        } else {
                            return <li key={index}  className={menuItem} onClick={(e) => { handleClick(e) }}>{menuIcons[index]} {menuItem} </li>
                        }

                    })}
                </ul>
                <select className="selectMenu" name="" id="" onChange={(e) => { handleSelectChange(e) }}>
                    {menuItems.map((menuItem, index) => {
                        if (menuItem === selectedMenu) {
                            return <option key={index} value={menuItem} selected>{menuItem}</option>
                        }
                        else {
                            return <option key={index} value={menuItem}>{menuItem}</option>
                        }

                    })}

                </select>

            </div>
            {
                <div className="floatMenuWrap" >
                    <ul className={"floatMenu " + sideMenuClass}>
                        {menuIcons.map((menuIcon, index) => {
                       if (index === menuItems.indexOf(selectedMenu)) {
                                return <li key={index} className={menuItems[index]} id="active" onClick={(e) => handleClickSide(e)}>{menuIcon}</li>
                            } else {
                                return <li key={index} className={menuItems[index]} onClick={(e) => handleClickSide(e)}>{menuIcon}</li>
                            }

                        })}
                    </ul>
                </div>
            }


        </>

    )
}