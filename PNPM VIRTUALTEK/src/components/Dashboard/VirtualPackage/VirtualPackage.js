import { Tabs,Button } from 'antd';
import { Link } from 'react-router-dom';
import {AiOutlineTable } from 'react-icons/ai'

import TableComp from './TableComp/TableComp'


const { TabPane } = Tabs;



export default function VirtualPackage() {
    const addVirtualButton = <Button><Link to ="/dashboard/virtualPackage/add">Add Normal Package</Link></Button>
    return (
        <div>
            <Tabs defaultActiveKey="overviewVP" tabBarExtraContent={addVirtualButton}>
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