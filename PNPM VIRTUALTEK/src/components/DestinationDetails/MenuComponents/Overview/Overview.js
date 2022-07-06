import './Overview.scss'
import { BsPencil, BsClockFill, BsSpeedometer, BsFillCloudSunFill } from 'react-icons/bs'
import { FaMountain, FaWalking, FaPlaneDeparture, FaPlaneArrival, FaRoute } from 'react-icons/fa'
import { ImEarth } from 'react-icons/im'
// const keyValues = [
//     { icon: <BsPencil className='inline-block'/>, key: "Trip-code", value: "EBC-101" },
//     { icon: <BsClockFill className='inline-block'/>, key: "Duration", value: "11 Days" },
//     { icon: <ImEarth className='inline-block'/>, key: "Country", value: "Nepal" },
//     { icon: <BsSpeedometer className='inline-block'/>, key: "Trip Level", value: "Strenous" },
//     { icon: <FaMountain className='inline-block'/>, key: "Max Altitude", value: "5,555m/18,225ft" },
//     { icon: <FaWalking className='inline-block'/>, key: "Activity", value: "Trekking in Nepal" },
//     { icon: <FaPlaneDeparture className='inline-block'/>, key: "Starts At ", value: "Kathmandu" },
//     { icon: <FaPlaneArrival className='inline-block'/>, key: "Ends At ", value: "Kathmandu" },
//     { icon: <FaRoute className='inline-block'/>, key: "Trip Route ", value: "Kathmandu-Lukla-Phakding-Namche Bazar-Tengbouche-Dingbouche-Lobuche-Everest Base Camp-Gorekshep-Kalapathhar-Pheriche-Namche Bazar-Lukla-Kathmandu." },
//     { icon: <BsFillCloudSunFill className='inline-block'/>, key: "Best Season", value: "February,March,April,may,June,September,October,November And December." },
// ]
// const tripHighlights = [
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// ]
const tripDiscription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et magnis dis. In ante metus dictum at tempor commodo ullamcorper a lacus. Et leo duis ut diam quam nulla. Volutpat lacus laoreet non curabitur gravida arcu ac. Massa vitae tortor condimentum lacinia quis. Rutrum quisque non tellus orci ac auctor augue mauris augue. Sagittis nisl rhoncus mattis rhoncus. Odio ut enim blandit volutpat. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Ut eu sem integer vitae justo eget magna fermentum iaculis. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Lectus mauris ultrices eros in cursus turpis. Eu lobortis elementum nibh tellus. Ultrices sagittis orci a scelerisque purus semper eget duis. Mauris a diam maecenas sed enim ut sem. Commodo elit at imperdiet dui accumsan sit amet. Bibendum enim facilisis gravida neque. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Massa ultricies mi quis hendrerit dolor magna. Scelerisque felis imperdiet proin fermentum leo. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Nunc sed augue lacus viverra vitae congue. Urna nunc id cursus metus aliquam eleifend mi in nulla. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Volutpat diam ut venenatis tellus in metus vulputate. Diam sit amet nisl suscipit adipiscing bibendum est. Augue interdum velit euismod in. Lacus sed turpis tincidunt id aliquet. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Tincidunt eget nullam non nisi. Tincidunt dui ut ornare lectus sit amet. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Mus mauris vitae ultricies leo integer. Arcu bibendum at varius vel. Nunc sed velit dignissim sodales ut eu sem. Scelerisque eu ultrices vitae auctor. Vel elit scelerisque mauris pellentesque pulvinar. Congue quisque egestas diam in arcu cursus euismod quis. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Duis at tellus at urna condimentum mattis pellentesque. Est ante in nibh mauris cursus mattis molestie a iaculis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. A lacus vestibulum sed arcu non odio. Neque gravida in fermentum et sollicitudin ac orci. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Mauris pellentesque pulvinar pellentesque habitant morbi."
const icons = [
    <BsPencil className='inline-block' />,
    <BsClockFill className='inline-block' />,
    <ImEarth className='inline-block' />,
    <BsSpeedometer className='inline-block' />,
    <FaMountain className='inline-block' />,
    <FaWalking className='inline-block' />,
    <FaPlaneDeparture className='inline-block' />,
    <FaPlaneArrival className='inline-block' />,
    <FaRoute className='inline-block' />,
    <BsFillCloudSunFill className='inline-block' />,
]

// const itenary = [
//     { "day": "Day 1", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 2", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 3", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 4", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 5", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 6", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 7", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 8", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
//     { "day": "Day 9", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." }
// ]
export default function Overview({ data, mode }) {

    const itenary = []

    const tripDetails = {
        "destination": { title: "Destination", value: data?.destination || "" },
        "duration": { title: "Duration", value: data?.duration || "" },
        "country": { title: "Country", value: data?.country || "" },
        "tripLevel": { title: "Trip Level", value: data?.trekLevel || "" },
        "maxAltitude": { title: "Max Altitude", value: data?.maxAltitude || "" },
        "activity": { title: "Activity", value: data?.activity || "" },
        "startPoint": { title: "Starting point", value: data?.startAtAddress || "" },
        "endPoint": { title: "End Point", value: data?.endAtAddress || "" },
        "tripRoute": { title: "Trip Route", value: data?.trekRoute || "" },
        "bestSeason": { title: "Best Season", value: data?.bestSeason || "" }
    }
    data?.itinerary?.map((ite) => {
        itenary.push({
            day: ite.title,
            details: ite.summary
        })
    })
    return (
        <div className="overViewMainWrap">
            <div>
                <div className="row">

                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><BsPencil className='inline-block' /> <span className='titleOV'>{tripDetails.destination.title}</span></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.destination.value}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><ImEarth className='inline-block' /> <span className='titleOV'>{tripDetails.country.title}</span></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.country.value}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><BsSpeedometer className='inline-block' /> <span className='titleOV'> {tripDetails.tripLevel.title}</span></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.tripLevel.value}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><FaMountain className='inline-block' /> <span className='titleOV'>{tripDetails.maxAltitude.title}</span> </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.maxAltitude.value}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><FaWalking className='inline-block' /><span className='titleOV'>{tripDetails.activity.title}</span> </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.activity.value}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><FaPlaneDeparture className='inline-block' /><span className='titleOV'>{tripDetails.startPoint.title}</span> </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.startPoint.value}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 marginDivOV">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p><FaPlaneArrival className='inline-block' /><span className='titleOV'> {tripDetails.endPoint.title}</span></p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>{tripDetails.endPoint.value}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 marginDivOV">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <p><FaRoute className='inline-block' /><span className='titleOV'>{tripDetails.tripRoute.title}</span> </p>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9">
                                <p>{tripDetails.tripRoute.value}</p>
                            </div>
                        </div>
                    </div>
                    {
                        mode !== 'virtual'
                        &&
                        (<div className="col-md-12 col-lg-12 marginDivOV">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <p><BsFillCloudSunFill className='inline-block' /><span className='titleOV'>{tripDetails.bestSeason.title}</span> </p>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9">
                                    <p>{tripDetails.bestSeason.value}</p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>



            </div>
            {/* <table>

                <tr>
                    <td className='titleTab' ></td>
                    <td colSpan={3}>{tripDetails.tripRoute.value}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='titleTab'> <BsFillCloudSunFill className='inline-block' /> {tripDetails.bestSeason.title}</td>
                    <td colSpan={3}>{tripDetails.bestSeason.value}</td>
                    <td></td>
                    <td></td>
                </tr>

            </table> */}
            <div className='tripHighlights' >
                <div className='tripHighlightsTitle'>
                    <h5>Trip Highlights</h5>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.trekHighlights }}>

                </div>


            </div>
            <div className='tripDiscription'>
                <div className='tripDiscriptionHeading'>
                    <h5>Trip Description</h5>
                    <div dangerouslySetInnerHTML={{ __html: data.trekDescription }}></div>
                </div>
            </div>
            <div className='itenaryDiv'>
                <div className='itenaryTitle'>
                    <h5>Itenary</h5>
                    <div className='itenaryMainDiv'>
                        {itenary.map((ite, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className='col-md-2 col-lg-2'>
                                        <div className='itenaryDayDiv'>
                                            <p >{ite.day}</p>
                                        </div>

                                    </div>
                                    <div className='col-md-10 col-lg-10'>
                                        <div className='itenaryDetailsDiv'>
                                            <p className=''>{ite.details}</p>
                                        </div>

                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}