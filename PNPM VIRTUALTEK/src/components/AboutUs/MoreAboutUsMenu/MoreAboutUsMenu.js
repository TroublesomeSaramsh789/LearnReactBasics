import "./MoreAboutUsMenu.scss"

export default function MoreAboutUsMenu({menuItems,dispatch, state }) {
    
    
    function handleClick(e){
        dispatch({type:"changeSelected", payload:e.target.innerHTML})
        
        
    }
    function handleSelectChange(e){
        
        dispatch({type:"changeSelected", payload:e.target.value})
    }
    return (
        <div className="moreAboutUsMainWrap">
            <p className="menuHeader">More About Us</p>
            <div className="ulMenu">
                <ul>
                    {menuItems.map((menuItem, index) => {
                        if (menuItem === state.menuSelected) {
                            return <li key={index} onClick={(e)=>{handleClick(e)}} className="menuItem active">{menuItem}</li>
                        }
                        return <li key={index} onClick={(e)=>{handleClick(e)}} className="menuItem">{menuItem}</li>
                    })}
                </ul>
            </div>

            <div className="selectMenu">
                <select onChange={(e)=>{handleSelectChange(e)}}>
                    {menuItems.map((menuItem, index) => {
                        if (menuItem === state.menuSelected) {
                            return <option key={index} value={menuItem}  defaultValue>{menuItem}</option>
                        }
                        return <option key={index} value={menuItem}>{menuItem}</option>
                    })}
                </select>
            </div>

        </div>
    )
}