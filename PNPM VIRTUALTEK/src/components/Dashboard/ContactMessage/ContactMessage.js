
import { useState, useRef } from 'react';

import { Table, Input, Button, Space, Modal, Row, Col } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useContactMessage } from '../../../services/contactMessageService'
import {MdOutlinePersonOutline, MdSubject} from 'react-icons/md'
import { AiFillEye,AiOutlinePhone,  AiOutlineMail } from 'react-icons/ai'
import {BiMessage} from 'react-icons/bi'
import { ISOStringToDate } from '../../../utils/date';


const ContactMessage = () => {


    const [visibleContactMessage, setVisibleContactMessage] = useState(false)
    const [contactRecordDetail, setcontactRecordDetail] = useState(null)

    const { isLoading, isError, data } = useContactMessage();
    const [state, setState] = useState({ searchText: '', searchedColumn: '' })
    const searchInput = useRef(null)

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    const displayDetail = (record) => {
        setcontactRecordDetail(record)
        setVisibleContactMessage(true)
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
            title: 'Name',
            dataIndex: 'fullName',
            key: 'fullName',
            width: '30%',
            ...getColumnSearchProps('fullName'),
            sorter: (a, b) => a.fullName.length - b.fullName.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
            ...getColumnSearchProps('email'),
        },

        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <a onClick={() => { displayDetail(record) }}><AiFillEye className='inline-block' /></a>
                </Space>
            ),
        }

    ];
    return (
        <>
            <Table columns={columns} dataSource={data.data.docs} />
            <Modal
                title={"Message"}
                visible={visibleContactMessage}
                footer={null}
                onCancel={() => { setVisibleContactMessage(false) }}
            >
                <div className='p-2 shadow-sm'>
                    <Row>
                        <Col span={20}>
                            <p className='text-lg font-bold'> <MdOutlinePersonOutline size={20} className='inline-block mb-1 text-lg'/> {contactRecordDetail?.fullName || ""}</p>
                        </Col>
                        <Col span={4}>
                            <p className='opacity-30'>{ISOStringToDate(contactRecordDetail?.createdAt || "")}</p>
                        </Col>
                    </Row>
                    <p> <AiOutlinePhone className='inline-block mb-1 mr-3'/> {contactRecordDetail?.contactNumber || ""}</p>
                    <p> <AiOutlineMail className='inline-block mb-1 mr-3'/> {contactRecordDetail?.email || ""}</p>
                    <p> <MdSubject className='inline-block mb-1 mr-3'/> {contactRecordDetail?.subject}</p>
                    <p> <BiMessage className='inline-block mb-1 mr-3'/> {contactRecordDetail?.message}</p>
                </div>
            </Modal>

        </>


    );

}
export default ContactMessage;