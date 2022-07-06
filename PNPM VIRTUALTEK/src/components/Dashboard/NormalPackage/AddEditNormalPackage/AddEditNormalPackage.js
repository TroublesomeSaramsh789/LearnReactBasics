import { Tabs } from 'antd';
import { useLocation } from 'react-router-dom';
import { AiFillEye, AiFillTag, AiOutlineSchedule } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi'
import { ImBubbles } from 'react-icons/im'
import { RiGalleryFill } from 'react-icons/ri'
import { SiGoogleoptimize } from 'react-icons/si'


import Overview from '../Overview/Overview';
import Details from '../Details/Details';
import Price from '../Prices/Price';
import Itenary from '../Iternary/Itenary';
import FAQ from '../FAQ/FAQ';
import Meta from '../Meta/Meta';
import Gallery from '../Gallery/Gallery';

const { TabPane } = Tabs;

export default function AddEditNormalPackage({ mode }) {
    

    var disabledTabs = true;
    const location = useLocation()
    
    if (mode === "edit") {
        disabledTabs = false
    }
    

    return (
        <div>
            <Tabs defaultActiveKey="overviewVP" >

                <TabPane
                    tab={
                        <p className='tabIcon'><AiFillEye className='inline-block mr-2' />Overview</p>
                    }
                    key="overview"
                >
                    <Overview data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>

                <TabPane
                    disabled={disabledTabs}
                    tab={
                        <p className='tabIcon'><BiDetail className='inline-block mr-2' />Details</p>
                    }
                    key="details"
                >
                    <Details data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>
                <TabPane
                    disabled={disabledTabs}
                    tab={
                        <p className='tabIcon'><AiFillTag className='inline-block mr-2' />Prices</p>
                    }
                    key="prices"
                >
                    <Price data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>
                <TabPane
                    disabled={disabledTabs}
                    tab={
                        <p className='tabIcon'><AiOutlineSchedule className='inline-block mr-2' />Itenary</p>
                    }
                    key="itenary"
                >
                    <Itenary data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>
                <TabPane
                    disabled={disabledTabs}
                    tab={
                        <p className='tabIcon'><ImBubbles className='inline-block mr-2' />FAQ</p>
                    }
                    key="faq"
                >
                    <FAQ data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>
                <TabPane
                    disabled={disabledTabs}
                    tab={
                        <p className='tabIcon'><RiGalleryFill className='inline-block mr-2' />Gallery</p>
                    }
                    key="gallery"
                >
                    <Gallery data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>
                <TabPane
                    disabled={disabledTabs}
                    tab={
                        <p className='tabIcon'><SiGoogleoptimize className='inline-block mr-2' />Meta</p>
                    }
                    key="meta"
                >
                    <Meta data = {location?.state?.packageData} mode = {mode}/>
                </TabPane>
            </Tabs>
        </div>
    )
}