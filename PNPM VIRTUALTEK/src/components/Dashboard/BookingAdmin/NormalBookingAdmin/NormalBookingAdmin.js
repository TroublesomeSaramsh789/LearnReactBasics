import { useState, useRef } from 'react'
import { Table, Input, Button, Space, Modal, Row, Col } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

// for api call
import { useTeamDetails, useDeleteTeam } from '../../../../services/websiteManagement';
import { useGetAllNormalBooking } from '../../../../services/BookingService';


import useDebounce from '../../../../services/Debounce/Debounce';



const NormalBookingAdmin = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")

  const debounceSearch = useDebounce(search,1000)

  
  const { isLoading, isError, data } = useGetAllNormalBooking({page, search:debounceSearch});

  const { mutate: deleteMutate, isLoading: isDeleteLoading } = useDeleteTeam()
  
  const handlePagination = (paginationData) => setPage(paginationData.current)

  const deleteTeam = (id) => {
    deleteMutate(id);
  }
  
  const handleSearch = (e) =>{
      
      setPage(1)
      setSearch(e)
  }

  const confirmDelete = (id) => {
    Modal.confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => { deleteTeam(id) }
    });
  }

  

  

  console.log("From normal trek plan",data)



  const columns = [
    {
      title: 'Trek Title',
      dataIndex: ['trek','title'],
      key: 'trekTitle',
      width: '15%',

    //   sorter: (a, b) => a.trek.title.length - b.trek.title.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      width: '15%',
      render : (data)=>{
          return data.substring(0,10)
      }
    //   sorter: (a, b) => a.fullName.length - b.fullName.length,
    //   sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      width: '20%',
        render:(data)=>{
            return (data.substring(0,10))
        }
    },
    {
      title: 'User Phone Number',
      dataIndex: ['user','contactNumber'],
      key: 'contactNumber',
      width: '20%',

    },
    {
      title: 'User Name',
      dataIndex: ['user','fullName'],
      key: 'email',
    },
   
    {
      title: "Action",
      render: record => {
        return (
          <Space>
            
            <AiFillDelete disable onClick={() => { confirmDelete(record?._id) }} />
          </Space>
        )
      }
    }
  ];

  return (<>
    <Row>
      <Col span={15}></Col>
      <Col span={8}>
        <div className="flex">
        <p>Search:</p><Input onChange={(e)=>{handleSearch(e.target.value)}}></Input>
        </div>
      </Col>
      <br />
    </Row>

    {isLoading && <div>Loading...</div>}

    {!isLoading && !isError && <Table
      columns={columns}
      dataSource={data.data.docs}
      pagination={{
        current: data?.data?.pagination?.page || page,
        pageSize: data?.data?.pagination?.limit || 10,
        total: data?.data?.pagination?.total
      }}
      onChange={handlePagination}
    />}
  </>);

}

export default NormalBookingAdmin;