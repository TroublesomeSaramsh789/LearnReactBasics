import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import { useQueryClient } from 'react-query'

import { Table, Input, Button, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import { SearchOutlined } from '@ant-design/icons';
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

import { useBlogCategory, useDeleteBlogCategory } from '../../../../services/blogManagement';



const  BlogCategoryDetails =()=> {
    
    const [state, setState] = useState({ searchText: '', searchedColumn: '' })
    const searchInput = useRef(null)
 
  
    const {isLoading:blogCategoryLoading, data:blogCategoryData} = useBlogCategory()
    const {mutate:deleteBlogCategoryMutate, isSuccess:deleteBlogCategorySuccess} = useDeleteBlogCategory()
    if(blogCategoryLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    const deleteBlogCategory = (id)=>{
      deleteBlogCategoryMutate(id);
    }
    
    const  confirmDelete = (id)=>{
      Modal.confirm({
        title: 'Are you sure?',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure you want to delete?',
        okText: 'Yes',
        cancelText: 'No',
        onOk: ()=>{deleteBlogCategory(id)}
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
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                width: '30%',
                ...getColumnSearchProps('title'),
                // sorter: (a, b) => a.name.length - b.name.length,
                // sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Created At',
                dataIndex: 'createdAt',
                key: 'createdAt',
                width: '20%',
                ...getColumnSearchProps('createdAt'),
               
            },
            {
                title: 'Updated At',
                dataIndex: 'updatedAt',
                key: 'updatedAt',
                width: '20%',
                ...getColumnSearchProps('updatedAt'),
         
            },
         
           
            {
                title: 'Action',
                key: 'action',
                render: (record) => (
                    <Space size="middle">
                       <Link to={`/dashboard/blogCategory/edit/${record?._id}`} state={{ blogCat: record }}><BsFillPencilFill /></Link>
                        <a><AiFillDelete className='inline-block'  onClick={()=>{confirmDelete(record?._id)} }/></a>
                    </Space>
                ),
            }

        ];
        return <Table columns={columns} dataSource={blogCategoryData.data.docs} />;
    
}

export default BlogCategoryDetails