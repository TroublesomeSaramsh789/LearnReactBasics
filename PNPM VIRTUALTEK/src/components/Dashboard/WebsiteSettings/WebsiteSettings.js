import "./WebsiteSettings.scss"

import { BiDetail, BiSlider } from 'react-icons/bi';
import { IoShareSocial } from 'react-icons/io5';
import { RiGalleryLine } from 'react-icons/ri';
import { SiGoogleoptimize } from 'react-icons/si'

import { Tabs } from 'antd'

import DetailsTab from './DetailsTab/DetailsTab';
import SocialTab from './SocialTab/SocialTab';
// import SliderTab from './SliderTab/SliderTab';
import GalleryTab from './GalleryTab/GalleryTab';
import MetaTab from './MetaTab/MetaTab';

import { useWebsiteSettings } from "../../../services/websiteSettingsService";

const { TabPane } = Tabs;

export default function WebsiteSettings() {

    const { isLoading, isError, data } = useWebsiteSettings()

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const settingsData = data?.data;

    return (
        <div className="websiteSettingsDiv">

            <Tabs defaultActiveKey='details'>
                <TabPane
                    tab={
                        <p className='tabIcon'><BiDetail className='inline-block' />Details</p>
                    }
                    key="details"
                >
                    <DetailsTab settingsData={settingsData} />
                </TabPane>
                <TabPane
                    tab={
                        <p className="tabIcon"><IoShareSocial className="inline-block" />Social</p>
                    }
                    key="social"
                >
                    <SocialTab settingsData={settingsData} />
                </TabPane>
                {/* <TabPane
                    tab={
                        <p className="tabIcon"><BiSlider className="inline-block" />Slider</p>
                    }
                    key="slider"
                >

                    <SliderTab settingsData={settingsData} />
                </TabPane> */}
                <TabPane

                    tab={
                        <p className="tabIcon"><RiGalleryLine className="inline-block" />Gallery</p>
                    }
                    key="gallery"
                >
                    <GalleryTab settingsData={settingsData} />
                </TabPane>
                <TabPane
                    tab={
                        <p className="tabIcon"><SiGoogleoptimize className="inline-block" />Meta</p>
                    }
                    key="meta"
                >
                    <MetaTab settingsData={settingsData} />
                </TabPane>
            </Tabs>
        </div>
    )
}