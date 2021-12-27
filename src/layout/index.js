import { Component } from 'react';
import { Link } from "react-router-dom";

import { Layout,  Menu, Breadcrumb } from 'antd';

import '../App.less';
import logo from '../logo.png';

// Header, Footer, Sider, The Content component is under the Layout component module
const { Header, Footer, Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
        <Layout className='site-layout'>
            <Header className='site-header'>
            <Link to="/">
                <img className='site-logo' src={logo}></img>
                </Link>
            <Menu theme="light" mode="horizontal">
                <Menu.Item key="1">
                    <Link to="/route1" key="1">Route 1</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/route2" key="1">Route 2</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/404" key="1">404</Link>
                </Menu.Item>
            </Menu>
            </Header>
            <Content className={this.props.breadcrumb == 'disabled' ? 'no-breadcrumb' : ''} style={{ padding: '0 50px', marginTop: 64 }}>
           
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.breadcrumb}</Breadcrumb.Item>
                </Breadcrumb>
                
                <div className="site-main-content" style={{ padding: 24, minHeight: 380 }}>
                    {this.props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>StakeborgDAO.xyz</Footer>
      </Layout>
    )
  }
}

export default BasicLayout;