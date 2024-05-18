import React, { useState } from 'react';
import { Table, Space, Button , Typography } from 'antd'; 
import Search from 'antd/es/transfer/search';
const { Text } = Typography;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Home = () => {

  const[reportNumber,setNumber] = useState('22')
  const columns = [
    {
      title: '#',
      dataIndex: 'key', 
      key: 'key', 
    },
    {
      title: 'Report Name',
      dataIndex: 'Report_Name',
      key: 'Report_Name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'created at',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'created by',
      dataIndex: 'created_by',
      key: 'created_by',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Update',
      key: 'update',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleUpdate(record)}>Update</Button>
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Space size="middle">
          <Button danger onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      ),
    },
  
   
  ];

  const data = [
    {
      key: '1',
      Report_Name: 'Task1',
      created_at: '22:00:00',
      created_by:'Adham'
    },
    {
      key: '2',
      Report_Name: 'Task2',
      created_at: '02:00:00',
      created_by:'Eyad'
    },
    {
      key: '3',
      Report_Name: 'Task3',
      created_at: '12:00:00',
      created_by:'Osos'
    },
    {
      key: '4',
      Report_Name: 'Task3',
      created_at: '12:00:00',
      created_by:'ALI'
    },
    {
      key: '5',
      Report_Name: 'Task3',
      created_at: '12:00:00',
      created_by:'JOE'
    },
  ];

  const handleUpdate = (record) => {
    console.log('Update:', record);
  };

  const handleDelete = (record) => {
    console.log('Delete:', record);
  };
  return (
    <>
      <div className="">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="d-flex justify-content-between mt-5">
        <h4>dashboard</h4>
        <span>total reports: <Text strong> {reportNumber}</Text></span>
      </div>
      <div className="mt-4">
      <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Home;
