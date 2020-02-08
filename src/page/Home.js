import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './main.css'
import axios from 'axios'
import 'antd/dist/antd.css'
import {Link, Route, Switch } from 'react-router-dom'
import Phone from './phone';
import { Button } from 'antd';

const { Header, Sider, Content } = Layout;

    
export default class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            type: '',
            data:[]
        }
    }
    state = {
        collapsed: false,
    };
    handle = (text) => {
        console.log(text)
        this.props.history.push({
            pathname: '/Outdoot',
            state:text
        })
    }
    render() {
        return (
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                     <span>
                    <Link to={{ pathname: '/a', state: { type: '手机数码', data: this.state.data } }}>
                            手机
                    </Link>
                    </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                    <span>
                    <Link to={{ pathname: '/b', state: { type: '美妆护肤', data: this.state.data } }}>
                            美妆
                    </Link> 
                    </span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="video-camera" />
                    <span>
                    <Link to={{ pathname: '/c', state: { type: '电脑办公', data: this.state.data } }}>
                            电脑
                    </Link> 
                    </span>
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="video-camera" />
                    <span>
                        <Link to={{ pathname: '/d', state: { type: '汽车生活', data: this.state.data } }}>
                            汽车
                        </Link> 
                    </span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="upload" />
                  <span>
                        <Link to={{ pathname: '/e', state: { type: '京东超市', data: this.state.data } }}>
                            超市
                        </Link> 
                    </span>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="upload" />
                  <span>
                        <Link to={{ pathname: '/f', state: { type: '运动户外', data: this.state.data } }}>
                            户外
                        </Link> 
                    </span>
                </Menu.Item>
              </Menu>
                </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                
                        <div className='but' style={{ width:'100%', textAlign:'right'}}>
                            <Button type="primary" style={{ marginRight: '30px' }}
                            onClick = {()=>{this.handle('登录页面')}}
                            >Primary</Button>      
                            <Button type="danger"
                            onClick = {()=>{this.handle('注册页面')}}
                            >Danger</Button>
                   </div>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <Switch>
                        <Route path='/b' component={Phone}/>        
                        <Route path='/c' component={Phone}/>        
                        <Route path='/d' component={Phone}/>        
                        <Route path='/e' component={Phone}/>        
                        <Route path='/f' component={Phone} />    
                        <Route path='/a' component={Phone}/>        
                        
                </Switch>
              </Content>
                </Layout>
            </Layout>
        )
    }
    componentDidMount() {
        axios.get('http://localhost:3000/data.json').then((res) => {
            this.setState({
                type: this.state.type,
                data:res.data
            })
        }).catch(() => {
            
        })
    }
}
