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
import ProductsLevelOne from './components/Products/levelOne/index.jsx';
import ProductsLevelTwo from './components/Products/levelTwo/index.jsx';
import Applications from './components/applications/index.jsx';
import ApplicationsDetail from './components/applications/detail/index.jsx';
import Services from './components/services/index.jsx';
import Videos from './components/videos/index.jsx';
import Contacts from './components/contacts/index.jsx';
import Head from './components/head/index.jsx';
import Foot from './components/foot/index.jsx';
import { provider } from 'react-redux';
import store from './redux/store'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <provider store={store}>
        <HashRouter>
          <Layout className="layout" >
            {/* Header 头部区域 */}
            <Header style={{ height: 100, background: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <Head></Head>
            </Header>
            {/* 中间的 内容区域 */}
            <Content style={{ backgroundColor: '#fff', flex: 1 }}>
              <div style={{ padding: '80px 8% ', background: '#f5f5f5' }}>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/applications" component={Applications}></Route>
                <Route exact path="/applications/detail/:id" component={ApplicationsDetail}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/products/levelOne/:name/:id" component={ProductsLevelOne}></Route>
                <Route exact path="/products/levelTwo/:name/:id" component={ProductsLevelTwo}></Route>
                <Route exact path="/services" component={Services}></Route>
                <Route exact path="/videos" component={Videos}></Route>
                <Route exact path="/contacts" component={Contacts}></Route>
              </div>
            </Content>
            {/* Footer 底部区域 */}
            <Footer style={{ textAlign: 'center', backgroundColor: '#444' }}>
              <div style={{ background: '#f5f5f5' }}>
                <Foot></Foot>
              </div>
            </Footer>
          </Layout>
        </HashRouter>
      </provider>
    )
  }
}