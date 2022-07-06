import {Link} from 'react-router-dom'
import { Tabs, Button } from 'antd';
import TestomonialDetails from './TestomonialDetails/TestomonialDetails';
const { TabPane } = Tabs

export default function Testomonial() {
    const addTestoButton = <Button><Link to ="/dashboard/testomonial/add">Add Testomoinal</Link></Button>
    return (
        <div className='testoDiv' >
            <Tabs defaultActiveKey="testoDetails" tabBarExtraContent={addTestoButton}>
                <TabPane
                    tab={"Testomonial Details"}
                    key="testoDetails"
                >
                    <TestomonialDetails/>
                </TabPane>
                
            </Tabs>

        </div>
    )
}