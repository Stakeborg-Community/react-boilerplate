import { Component } from 'react';
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

export default class LeftSidebarLayout extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
        <Layout >
          <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
            Sider
          </Sider>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>StakeborgDAO.xyz</Footer>
      </Layout>
    )
  }
}
