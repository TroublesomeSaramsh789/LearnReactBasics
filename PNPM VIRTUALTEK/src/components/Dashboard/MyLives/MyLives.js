import { useState } from "react"
import { Link } from "react-router-dom"
import { Table, Button } from 'antd'
import { useGetMyLives } from "../../../services/LiveService"
import LoaderComp from "../../LoaderComp/LoaderComp"
import './MyLives.scss'
import { ISOStringtoDateTime } from "../../../utils/date"
import { useChangeLiveStatus } from "../../../services/LiveService"




export default function MyLives() {

    const [page, setPage] = useState(1);

    const { isLoading, error, data } = useGetMyLives({ page })
    const { mutate: changeStatusMutate, isLoading: changeStatusLoading } = useChangeLiveStatus()

    if (isLoading || changeStatusLoading) {
        return <LoaderComp />
    }



    const handlePagination = (paginationData) => setPage(paginationData.current)


    const changeStatus = (id, status) => {
        changeStatusMutate({ _id: id, status: { status: status } })
    }



    const columns = [
        {
            title: "Package Title",
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: "Start Date Time",
            dataIndex: 'startAt',
            key: 'startAt',
            render: (date) => {
                return (ISOStringtoDateTime(date))
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',

        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                if (status === "Not Started") {
                    return <div className="text-[#FF7E0C]">{status}</div>
                }
                else if (status === "Live") {
                    return <div className="text-[#0FC326]">{status}</div>
                }
                else if (status === "Finished") {
                    return <div className="text-[#F31F1F]">{"Live Ended"}</div>
                }
                else if (status === "Discarded") {

                    return <div className="text-[#A34747]">{"Discarded"}</div>
                }
            }
        },
        {
            title: 'Actions',
            render: (record) => {

                return (
                    <div className="flex myLiveActionDiv">
                        {
                            record.status !== "Discarded"
                            &&
                            <>
                                {
                                    record.status === "Live"
                                    &&
                                    <>
                                        <div className="goToLiveButton">
                                            <Link to={`/live/${record._id}`}><Button> Go To Live</Button></Link>
                                        </div>
                                        <div className="endliveButton">

                                            <Button onClick={() => { changeStatus(record._id, "Finished") }} className="mr-2 ">End Live</Button>
                                        </div>
                                    </>
                                }

                                {record.status === "Not Started" &&
                                    <>
                                        <Button onClick={() => { changeStatus(record._id, "Live") }} type="primary" className="mr-2">Start Live</Button>
                                        <Button onClick={() => { changeStatus(record._id, "Discarded") }} type="link" className="text-[#D01010]">Cancel</Button>
                                    </>
                                }
                            </>
                        }
                    </div>
                )
            }
        }

    ]

    return (
        <div className="myLivesMainDiv">
            <Table
                columns={columns}
                dataSource={data.data.docs}
                pagination={{
                    current: data?.data?.pagination?.page || page,
                    pageSize: data?.data?.pagination?.limit || 10,
                    total: data?.data?.pagination?.total
                }}
                onChange={handlePagination}
            />
        </div>
    )
}