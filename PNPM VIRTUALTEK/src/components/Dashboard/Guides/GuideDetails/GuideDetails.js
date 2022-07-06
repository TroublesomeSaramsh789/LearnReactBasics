import {useState,useRef} from 'react';


import { Table, Input, Button, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';



import {AiFillDelete} from 'react-icons/ai'

import { useGuideDetails, useDeleteGuide} from '../../../../services/websiteManagement';
import { keys } from '../../../../services/keys';

const  GuideDetails = () => {
  
  const {isLoading, isError, data:guideData} = useGuideDetails()
  const {mutate:deleteGuideMutate, isLoading:isDeleteLoding, isError:isDeleteError, data:deleteData} = useDeleteGuide()

  const [state, setState] = useState({ searchText: '', searchedColumn: '' })
  const searchInput = useRef(null)
 

  if(isLoading){
    return (
      <div>
        Loading...
      </div>
    )
  }  
  const deleteGuide= (id)=>{
    deleteGuideMutate(id)
  }
  
  const  confirmDelete = (id)=>{
    Modal.confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: ()=>{deleteGuide(id)}
    });
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
          title: 'Type',
          dataIndex: 'userType',
          key: 'userType',
          width: '20%',
          ...getColumnSearchProps('userType'),
        },
        {
            title: 'Contact Number',
            dataIndex: 'contactNumber',
            key: 'contactNumber',
            width: '20%',
            ...getColumnSearchProps('contactNumber'),
          },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status', 
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
              <Space size="middle">
                <AiFillDelete className='inline-block' onClick={()=>{confirmDelete(record?._id)}}/>
              </Space>
            ),
        }
          
      ];
      return <Table columns={columns} dataSource={guideData.data.docs} />;
    }
  
  export default GuideDetails;