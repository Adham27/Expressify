import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const ProtectedRoute = ({ isAuthenticated }) => {
  // if (!isAuthenticated) { 
  //   return <Navigate to="/" replace />;
  // }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="p-2 text-white">
          {collapsed ? <h2>Exfy</h2> : <h2>EXPRESSIFY</h2>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: '2',
              icon: <AppstoreOutlined />,
              label: <Link to="/app">app</Link>,
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="/profile">profile</Link>,
            },
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className='  '
        >
          <div className="d-flex justify-content-between">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
                  <Button danger className='mt-3 m-4' >Logout</Button>

          </div>
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="container height-container">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default ProtectedRoute;