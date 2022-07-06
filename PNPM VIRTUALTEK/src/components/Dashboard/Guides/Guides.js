import { Tabs } from 'antd';
import GuideDetails from './GuideDetails/GuideDetails';

const { TabPane } = Tabs

export default function Guides() {
    return (
        <div className='guideDiv'>
            <Tabs defaultActiveKey="guideDetails">
                <TabPane
                    tab={"Guide Details"}
                    key="guideDetails"
                >
                    <GuideDetails/>
                </TabPane>
            </Tabs>

        </div>
    )
}