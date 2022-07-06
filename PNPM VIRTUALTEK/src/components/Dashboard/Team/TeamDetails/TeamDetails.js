import { useState, useRef } from 'react'
import { Table, Input, Button, Space, Modal, Row, Col } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';




import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

import { useQueryClient } from 'react-query'
// for api call
import { useTeamDetails, useDeleteTeam } from '../../../../services/websiteManagement';

import useDebounce from '../../../../services/Debounce/Debounce';

import { keys } from '../../../../services/keys';

const TeamDetails = () => {

  const [page, setPage] = useState(1);
  
  const [search, setSearch] = useState("")

  const debounceSearch = useDebounce(search,1000)

  
  const { isLoading, isError, data } = useTeamDetails({page, search:debounceSearch});

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

  // if (isLoading || isDeleteLoading) {
  //   return <div>Loading...</div>
  // }

  





  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',

      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: '30%',
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
      width: '20%',

    },
    {
      title: 'Phone Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
      width: '20%',

    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'publish',
      key: 'publish',
      render: (publish) => {

        if (publish === true) {
          return (
            <div style={{ color: "green" }}>Published</div>
          )
        } else {
          return (
            <div style={{ color: "red" }}>Not Published</div>
          )
        }

      }
    },
    {
      title: "Action",
      render: record => {
        return (
          <Space>
            <Link to={`/dashboard/team/edit/${record?._id}`} state={{ team: record }}><BsFillPencilFill /></Link>
            <AiFillDelete onClick={() => { confirmDelete(record?._id) }} />
          </Space>
        )
      }
    }
  ];

  return (<>
    <Row>
      <Col span={15}></Col>
      <Col span={8}>
        <p>Search:<Input onChange={(e)=>{handleSearch(e.target.value)}}></Input></p>
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

export default TeamDetails;