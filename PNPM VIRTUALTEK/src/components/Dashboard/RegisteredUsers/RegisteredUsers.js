import React from 'react'
import { useState, useRef } from 'react'
import { Table, Input, Button, Space, Modal, Row, Col } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MdOutlinePersonOutline } from 'react-icons/md'
import { AiFillEye,AiOutlinePhone,  AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai'
import {FaBirthdayCake} from 'react-icons/fa'

import { useUsers } from '../../../services/registerUserService';
import { getImageAbsoluteURL } from '../../../utils/string';
import { ISOStringToDate } from '../../../utils/date';

const RegisteredUsers = () => {

  const [visibleUserDetails, setVisibleUserDetails] = useState(false)
  const [userDetails, setUserDetails] = useState(null)

  const [state, setState] = useState({ searchText: '', searchedColumn: '' })
  const { isLoading, isError, data } = useUsers()
  const searchInput = useRef(null)


  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  const openDetails = (record) => {

    setVisibleUserDetails(true);
    setUserDetails(record)
  }
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]?.toString()?.toLowerCase()?.includes(value?.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text?.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ searchText: '' });
  };



  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',
      ...getColumnSearchProps('fullname'),
      sorter: (a, b) => a.fullName?.length - b.fullName?.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '20%',
      ...getColumnSearchProps('type'),
    },

    {
      title: 'Registered On',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a><AiFillEye onClick={() => { openDetails(record) }} className='inline-block' /></a>
        </Space>
      ),
    }

  ];
  return (
    <>
      <Table columns={columns} dataSource={data.data.docs} />
      <Modal
        title={"Registered Users"}
        visible={visibleUserDetails}
        footer={null}
        onCancel={() => {
          setVisibleUserDetails(false);
        }}
      >
        <div className="m-auto h-20 w-20 overflow-hidden rounded-full">
          <img
            className="h-full w-full"
            src={
              userDetails?.profileImageUrl
                ? getImageAbsoluteURL(userDetails?.profileImageUrl)
                : ""
            }
            alt=""
          />
        </div>
        <div className="px-6">
          <Row className="mt-4 ">
            <Col span={20}>
              <p className="text-lg font-bold">
                {" "}
                <MdOutlinePersonOutline
                  size={20}
                  className="inline-block mb-1 text-lg"
                />{" "}
                {userDetails?.fullName || ""}
              </p>
            </Col>
            <Col span={4}>
              <p className="font-bold">{userDetails?.gender || ""}</p>
            </Col>
          </Row>
          {/*  {userDetails?.dob ? ISOStringToDate(userDetails?.dob) : ""} */}
          <p>
            {" "}
            {userDetails?.dob && typeof userDetails?.dob === "string" ? (
              <>
                <FaBirthdayCake className="inline-block mr-2" />{" "}
                {ISOStringToDate(userDetails.dob)}
              </>
            ) : (
              ""
            )}
          </p>
          <p>
            <AiOutlinePhone size={20} className="inline-block mr-2" />
            {userDetails?.contactNumber}
          </p>
          <p>
            <AiOutlineMail size={20} className="inline-block mr-2" />
            {userDetails?.email}
          </p>
          <p>
            <AiOutlineCalendar size={20} className="inline-block mr-2" />
            {`Registerd At: ${userDetails?.createdAt ? ISOStringToDate(
              userDetails.createdAt
            ) : "no date available"}`}
          </p>
        </div>
      </Modal>
    </>
  );
}
export default RegisteredUsers;