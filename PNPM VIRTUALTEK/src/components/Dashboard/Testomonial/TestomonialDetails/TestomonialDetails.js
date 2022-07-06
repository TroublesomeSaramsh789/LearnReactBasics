import { useState, useRef } from 'react'


import {Link} from 'react-router-dom'

import { Table, Input, Button, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { useTestoDetails, useDeleteTestomonial } from '../../../../services/websiteManagement';



const TestomonialDetails = () => {


  const [state, setState] = useState({ searchText: '', searchedColumn: '' })
  const {isLoading, isError, data:testomonialData} = useTestoDetails()
  const {mutate:deleteMutate, isLoading:isDeleteLoading}  = useDeleteTestomonial()
  const searchInput = useRef(null)
  
  
  const deleteTesto = (id)=>{
      deleteMutate(id)
  }
  const  confirmDelete = (id)=>{
    Modal.confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: ()=>{deleteTesto(id)}
    });
  }
  if (isLoading){
    return (
      <div>
        Loading...
      </div>
    )
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
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
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
          textToHighlight={text ? text.toString() : ''}
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
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',
      ...getColumnSearchProps('fullName'),
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
      width: '20%',
      ...getColumnSearchProps('designation'),
    },

    {
      title: 'Publish',
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
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Link to={`/dashboard/testomonial/edit/${record?._id}`} state={{ testo: record }}><BsFillPencilFill /></Link>
          <a><AiFillDelete className='inline-block' onClick={()=>{confirmDelete(record?._id)}}/></a>
        </Space>
      ),
    }

  ];
  return <Table columns={columns} dataSource={testomonialData.data.docs} />;

}
export default TestomonialDetails;