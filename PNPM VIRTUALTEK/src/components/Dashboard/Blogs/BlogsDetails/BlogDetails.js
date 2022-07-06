import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { Table, Input, Button, Space, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { useBlog } from '../../../../services/blogManagement';
import { useDeleteBlog } from '../../../../services/blogManagement';

const BlogDetails = () => {
  const [state, setState] = useState({ searchText: '', searchedColumn: '' })
  const { isLoading, isError, data } = useBlog()
  const { mutate: deleteBlogMutate, isLoading: blogDeleteLoading, isError: blogDeleteError, data: blogDeleteData } = useDeleteBlog();
  
  const searchInput = useRef(null)

  if (isLoading || blogDeleteLoading) {
    return (
      <div>
        Loading...
      </div>
    )

  }

  const deleteBlog = (slug) => {
    const delurl = `blog/${slug}`
    deleteBlogMutate(delurl);
  }
  const confirmDelete = (slug) => {
    Modal.confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => { deleteBlog(slug) }
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
      title: 'Blog Title',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('name'),

    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '20%',
      ...getColumnSearchProps('type'),
      render:(category)=>{
        return category.title
      }
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
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Link to={`/dashboard/blogs/edit/${record?.slug}`} state={{ blog: record }}><BsFillPencilFill /></Link>
          <AiFillDelete className='inline-block' onClick={() => { confirmDelete(record?.slug) }} />
        </Space>
      ),
    }

  ];
  return <Table columns={columns} dataSource={data.data.docs} />;

}
export default BlogDetails;