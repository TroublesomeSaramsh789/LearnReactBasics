import FAQ from "./DatesAndTime/DatesAndTime"
import Information from "./Information/Information"
import Itenary from "./Itenary/Itenary"
import Overview from "./Overview/Overview"
import Reviews from "./Reviews/Reviews"


// const menuItems = ["Overview", "Itenary", "Dates and Prices", "Information", "Reviews"]

export default function ChooseComponent({menuItem, menuItems, data, mode}){
    switch(menuItem){
        case menuItems[0]:
            return <Overview data={data} mode = {mode}/>
        case menuItems[1]:
            return <Itenary data={data}/>
        case menuItems[2]:
            return <FAQ data={data}/>
        case menuItems[3]:
            return <Information data={data}/>
        case menuItems[4]:
            return <Reviews data={data}/>
    }
    if(menuItem === menuItems[0]){
        return 
    }
    return (
        <div>Choose Component</div>
    )
}