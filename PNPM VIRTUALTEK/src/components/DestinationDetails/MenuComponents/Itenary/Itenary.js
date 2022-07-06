import "./Itenary.scss"
import { Collapse } from "antd"
import { ImSpoonKnife } from 'react-icons/im'
import { FaMountain, FaPlane } from 'react-icons/fa'
import { GiPathDistance } from 'react-icons/gi'
import { BiWalk } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'

const { Panel } = Collapse;


export default function Itenary({ data }) {

    const iternaryData = []
    data?.itinerary?.map((itenary) => {
        iternaryData.push({
            key: itenary._id,
            title: itenary.title,
            heading: itenary.description,
            meal: (itenary?.details?.meal.length !== 0) ? (itenary?.details?.meal) : null,
            trekDistance: (itenary?.details?.trekDistance.length !== 0) ? (itenary?.details?.trekDistance) : null,
            maxAltitude: (itenary?.details?.maxAltitude.length !== 0) ? itenary?.details?.maxAltitude : null,
            walkHours: (itenary?.details?.walkingHours.length !== 0) ? itenary?.details?.walkingHours : null,
            planeHours: (itenary?.details?.planHours.length !== 0) ? itenary?.details?.planHours : null,
            driveHours: (itenary?.details?.driveHours.length !== 0) ? itenary?.details?.driveHours : null
        })
    })

    return (
        <div className="mainIternaryDiv">
            <Collapse defaultActiveKey={['1']} expandIconPosition={"right"}>
                {iternaryData.map((itenary, index) => {
                    return (
                        <Panel header={itenary.title} key={itenary.key}>
                            <p>{itenary.heading}</p>
                            <div className="iconsDiv">

                                {itenary.meal
                                    &&
                                    <div >
                                        <ImSpoonKnife size={20} />
                                        <h5>Meal</h5>
                                        <p>{itenary.meal}</p>
                                    </div >
                                }




                                {itenary.trekDistance
                                    &&
                                    <div>
                                        < GiPathDistance size={20} />
                                        <h5>Trek Distance</h5>
                                        <p>{itenary.trekDistance}</p>
                                    </div>}


                                {itenary.maxAltitude
                                    &&
                                    <div>
                                        <FaMountain size={20} />
                                        <h5>Max Altitude</h5>
                                        <p>{itenary.maxAltitude}</p>
                                    </div>

                                }


                                {itenary.walkHours
                                    &&
                                    <div>
                                        <BiWalk size={20} />
                                        <h5>Walk Hours</h5>
                                        <p>{itenary.walkHours}</p>
                                    </div>
                                }



                                {
                                    itenary.planeHours
                                    &&
                                    <div>
                                        <FaPlane size={20} />
                                        <h5>Plane Hours</h5>
                                        <p>{itenary.planeHours}</p>
                                    </div>
                                }


                                {
                                    itenary.driveHours
                                    &&
                                    <div>
                                        <AiFillCar size={20} />
                                        <h5>Drive Hours</h5>
                                        <p>{itenary.driveHours}</p>
                                    </div>
                                }

                            </div>
                        </Panel>
                    )
                })}
            </Collapse>,
        </div>
    )
}