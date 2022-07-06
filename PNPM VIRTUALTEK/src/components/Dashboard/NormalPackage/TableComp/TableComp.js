
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import { Table, Input, Button, Space, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react'

import { AiOutlineUpload } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import { MdOutlinePreview } from 'react-icons/md'


import { useGetNormalTreks, useDeleteNormalPackage, usePublishUnpulishNormal } from '../../../../services/NormalPackageManagementService'

const TableComp = () => {

    const { isLoading, isError, data } = useGetNormalTreks()
    const [state, setState] = useState({ searchText: '', searchedColumn: '' })
    const { mutate: deletePackageNormal, isLoading: loadingDeleteNormalTrek, data: normalTrek } = useDeleteNormalPackage()
    const { mutate: pulishUnpublishNormal, isLoading: pulishUnpublishNormalLoading, data: pulishUnpublishNormalData } = usePublishUnpulishNormal()
    const searchInput = useRef(null)
    if (isLoading || loadingDeleteNormalTrek || pulishUnpublishNormalLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const deletePackage = (id) => {
        const delurl = `trek/deleteTrek/${id}`
        deletePackageNormal(delurl);
    }
    const confirmDelete = (id) => {
        Modal.confirm({
            title: 'Are you sure?',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to delete package?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => { deletePackage(id) }
        });
    }

    const publishPackage = (id) => {

        pulishUnpublishNormal({ trekid: id });
    }


    const confirmPublish = (id) => {
        Modal.confirm({
            title: 'Are you sure?',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to perform this action?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => { publishPackage(id) }
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
            ...getColumnSearchProps('name'),
            sorter: (a, b) => a.title.length - b.title.length,
            sortDirections: ['descend', 'ascend'],
        },
     
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            width: '20%',

        },
        {
            title: 'Status',
            dataIndex: 'isPublished',
            key: 'isPublished',
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
            render: (record) => (
                <Space size="middle">
                    <a><AiOutlineUpload onClick={() => { confirmPublish(record?._id) }} className='inline-block' /></a>
                    <a ><MdOutlinePreview /></a>
                    <Link to={`/dashboard/normalPackage/edit/${record?._id}`} state={{ packageData: record }}><BsFillPencilFill /> </Link>
                    <a onClick={() => { confirmDelete(record?._id) }}><ImBin /></a>

                </Space>
            ),
        }

    ];
    return <Table columns={columns} dataSource={data.data.docs} />;

}
export default TableComp;