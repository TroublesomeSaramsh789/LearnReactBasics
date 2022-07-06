import { Tabs, Button } from 'antd';
import {AiOutlineTable } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import TableComp from './TableComp/TableComp'


const { TabPane } = Tabs;



export default function NormalPackage() {
    const addNormalButton = <Button><Link to ="/dashboard/normalPackage/add">Add Normal Package</Link></Button>
    return (
        <div>
            <Tabs defaultActiveKey="overviewVP" tabBarExtraContent={addNormalButton}>
                <TabPane
                    tab={
                        <p className='tabIcon'><AiOutlineTable className='inline-block mr-2' />Table</p>
                    }
                    key="tableComp"
                >
                    <TableComp />
                </TabPane>

            </Tabs>
        </div>
    )
}