// 这是项目的根组件

import React from 'react'

// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'
import './main.css' // 公共的css
// 导入需要的 Ant Design 组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入模块化的样式
import styles from './css/app.scss'

// 导入 路由相关的组件页面
import About from './components/about/index.jsx';
import Products from './components/Products/index.jsx';
import Applications from './components/applications/index.jsx';
import Services from './components/services/index.jsx';
import Videos from './components/videos/index.jsx';
import Contacts from './components/contacts/index.jsx';
import Foot from './components/foot/index.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    return <HashRouter>
      <Layout className="layout" >
        {/* Header 头部区域 */}
        <Header style={{ height: 100 }}>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '0 8% ' }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            >
              <Menu.Item key="about">
                <Link to="/about">about</Link>
              </Menu.Item>
              <Menu.Item key="products">
                <Link to="/products">products</Link>
              </Menu.Item>
              <Menu.Item key="applications">
                <Link to="/applications">applications</Link>
              </Menu.Item>
              <Menu.Item key="services">
                <Link to="/services">services</Link>
              </Menu.Item>
              <Menu.Item key="videos">
                <Link to="/videos">videos</Link>
              </Menu.Item>
              <Menu.Item key="contacts">
                <Link to="/contacts">contacts</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        {/* 中间的 内容区域 */}
        <Content style={{ backgroundColor: '#fff', flex: 1 }}>
          <div style={{ padding: '0 8% ', background: '#f5f5f5' }}>
            <Route path="/about" component={About}></Route>
            <Route path="/applications" component={Applications}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/videos" component={Videos}></Route>
            <Route path="/contacts" component={Contacts}></Route>
          </div>

        </Content>

        {/* Footer 底部区域 */}
        <Footer style={{ textAlign: 'center', backgroundColor: '#444' }}>
          <div style={{ padding: '0 8% ', background: '#f5f5f5' }}>
            <Foot></Foot>
          </div>

        </Footer>
      </Layout>

    </HashRouter>
  }
}