import { Tabs, Button } from 'antd';
import {Link} from 'react-router-dom'
import AddTeam from './AddTeam/AddTeam'
import TeamDetails from './TeamDetails/TeamDetails';

const { TabPane } = Tabs

export default function Team() {
    const addTeamButton = <Button><Link to ="/dashboard/team/add">Add Team</Link></Button>

    return (
        <div className='teamDiv'>
            
            <Tabs defaultActiveKey="teamDetails" tabBarExtraContent={addTeamButton}>
            
                <TabPane
                    tab={"Team Details"}
                    key="teamDetails"
                >
                    <TeamDetails />
                </TabPane>
                
                {/* <TabPane
                    tab={"Add Team"}
                    key="addTeam"
                >
                    <AddTeam />
                </TabPane> */}
            </Tabs>
   
        </div>
    )
}