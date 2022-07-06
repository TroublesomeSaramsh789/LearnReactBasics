
import { useContext } from "react";
import CustomCard from "./CustomCard/CustomCard"


import { Row, Col } from 'antd';
import { Pie, Column } from '@ant-design/plots';
import { config} from "./ChartConfigs/config";

import { AuthContext } from "../../../context/AuthContext"
import { useGetMainDashboardData } from "../../../services/DashboardMainPageService";

export default function MainPage() {

    const {profile} = useContext(AuthContext)
    const {isLoading, data} = useGetMainDashboardData()
    if(profile.userType === "Guide"){
        return (
            <div>
                This is Guide Dashboard
            </div>
        )
    }
    if (isLoading){
        return (
            <div>Loading...</div>
        )
    }
    console.log(data)
    return (
        <div className="mainDashboard m-6 p-2" >
            <h5>Overview</h5>
            <Row gutter={64} className="mb-10">
                <Col span={6}>
                    <CustomCard title="Total Booking" number={data?.data?.totalBooking} />
                </Col>
                <Col span={6}>
                    <CustomCard title="Total Guides" number={data?.data?.totalGuide} />
                </Col>
                <Col span={6}>
                    <CustomCard title="Total Treks" number={data?.data?.totalTrek} />
                </Col>
                <Col span={6}>
                    <CustomCard title="Total Users" number={data?.data?.totalUser} />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className="margin-auto">Bookings</p>
                    <Pie {...config } data={data?.data?.bookings || []} />
                </Col>
                <Col span={12}>
                    <p className="m-auto">Packages</p>
                    <Pie {...config} data={data?.data?.packages}/>
                </Col>
                {/* <Col span={8}>
                    <Column {...config3}/>
                </Col> */}
                
            </Row>
        </div>
    )
}