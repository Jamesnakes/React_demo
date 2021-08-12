import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
      AppstoreOutlined,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      PieChartOutlined,
      DesktopOutlined,
      MailOutlined,
      HomeOutlined,
} from '@ant-design/icons';
import { DatePicker, TimePicker, Select, Space } from 'antd';
import './home.less';

interface IProps {
      title: string,
      age: number,
}

// 通过接口声明状态
interface IState {
      // count: number
      collapsed: boolean,
      loadings: any,

}

interface IuseState {
      type,
      setType
}

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

function PickerWithType({ type, onChange }) {
      if (type === 'time') return <TimePicker onChange={onChange} />;
      if (type === 'date') return <DatePicker onChange={onChange} />;
      return <DatePicker picker={type} onChange={onChange} />;
}


export default class Home extends React.Component<IProps, IState, IuseState>{
      state = {
            collapsed: false,
            loadings: [],
            type: 'year'
      };

      toggleCollapsed = () => {
            this.setState({
                  collapsed: !this.state.collapsed,
            })
      };

      enterLoading = index => {
            this.setState(({ loadings }) => {
                  const newLoadings = [...loadings];
                  newLoadings[index] = true;

                  return {
                        loadings: newLoadings,
                  };
            });
            setTimeout(() => {
                  this.setState(({ loadings }) => {
                        const newLoadings = [...loadings];
                        newLoadings[index] = false;

                        return {
                              loadings: newLoadings,
                        };
                  });
            }, 6000);
      };

      // public constructor(props: any) {
      //       super(props);
      //       this.state = {
      //             count: 1000
      //       }

      //       this.interval = this.interval.bind(this);
      //       this.sendMsg = this.sendMsg.bind(this);
      // }

      // 实现state
      // readonly state: Readonly <IState> = {
      //       count: 10
      // }

      // interval(): void {
      //       this.setState({
      //             count: 2000
      //       })
      // }

      // sendMsg(): void {
      //       console.log('111');
      // }

      

      navigateTo(): void {
            const callback_url = window.location.href;
            console.log(callback_url);
            window.location.href = 'http://localhost:4200/register?callback_url=' + callback_url;  
      }

      render() {
            const setType = (): void => {
                  
            }
            // const { title, age } = this.props;
            const { loadings, type } = this.state;
            return (
                  <div>
                        {/* <div>Hello: { title } { age }</div>
                        {this.state.count}
                        <button onClick={this.interval}>submit</button>
                        <br />
                        <button onClick={this.sendMsg}>send msg</button> */}

                        <Layout style={{ height: '1089px' }}>
                              <Header className="header" style={{ height: 48, background: '#1890ff' }}>
                                    <div className="logo" />
                              </Header>
                              <Layout>
                                    <Sider className="layoutsider" style={{ background: '#FFFFFF', minWidth: 208, maxWidth: 208 }}>
                                          <div style={{ width: 208 }}>
                                                <div style={{ height: 49 }}>
                                                      <Button className="menubutton" type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                                                      </Button>
                                                </div>
                                                <Menu
                                                      defaultSelectedKeys={['1']}
                                                      defaultOpenKeys={['sub1']}
                                                      mode="inline"
                                                      theme="light"
                                                      inlineCollapsed={this.state.collapsed}
                                                >
                                                      <Menu.Item key="1" icon={<PieChartOutlined />}>
                                                            指标分析
                                                      </Menu.Item>
                                                      <Menu.Item key="2" icon={<DesktopOutlined />}>
                                                            综合评分
                                                      </Menu.Item>
                                                      <SubMenu key="sub1" icon={<MailOutlined />} title="指标数据管理">
                                                            <Menu.Item key="3">数据查看</Menu.Item>
                                                            <Menu.Item key="4">数据录入</Menu.Item>
                                                      </SubMenu>
                                                      <SubMenu key="sub2" icon={<MailOutlined />} title="配置管理">
                                                            <Menu.Item key="5">指标体系管理</Menu.Item>
                                                            <Menu.Item key="6">指标授权</Menu.Item>
                                                            <Menu.Item key="7">评分预警管理</Menu.Item>
                                                      </SubMenu>
                                                      <SubMenu key="sub3" icon={<AppstoreOutlined />} title="预警记录">
                                                            <Menu.Item key="8">预警记录管理</Menu.Item>
                                                            <Menu.Item key="9">预警分析</Menu.Item>
                                                      </SubMenu>
                                                </Menu>
                                          </div>
                                    </ Sider>
                                    <Layout style={{ padding: '0 24px 24px' }}>
                                          <Breadcrumb style={{ margin: '16px 0', fontSize: 14 }}>
                                                <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                                                <Breadcrumb.Item>指标数据管理</Breadcrumb.Item>
                                                <Breadcrumb.Item>数据查看</Breadcrumb.Item>
                                          </Breadcrumb>
                                          <div className="chooseTime" style={{ height: 64, background: '#FFFFFF', borderRadius: 4, marginBottom: 16, display: 'flex' }}>
                                                {/* 时间选择 */}
                                                <div style={{ margin: '21px 16px 0' }}>
                                                      <span style={{ display: 'block', float: 'left', fontSize: '14px', color: '#19202C' }}>时间选择：</span>
                                                      <Space style={{ margin: '-10px 8px 0' }}>
                                                            <Select value={type} onChange={setType}>
                                                                  <Option value="time">Time</Option>
                                                                  <Option value="date">Date</Option>
                                                                  <Option value="week">Week</Option>
                                                                  <Option value="month">Month</Option>
                                                                  <Option value="quarter">Quarter</Option>
                                                                  <Option value="year">Year</Option>
                                                            </Select>
                                                            <PickerWithType type={type} onChange={value => console.log(value)} />
                                                      </Space>
                                                </div>
                                                {/* 科室选择 */}
                                                <div style={{ display: 'block', margin: '16px 0 0 0' }}>
                                                      <span>选择科室：</span>
                                                      <Select defaultValue="lucy" style={{ width: 160 }} allowClear>
                                                            <Option value="lucy">中医科</Option>
                                                            <Option value="lucys">骨科</Option>
                                                      </Select>
                                                </div>
                                                <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)} style={{ height: 32, margin: '16px 0 0 21px', borderRadius: 4}}>
                                                      查询
                                                </Button>
                                                <Button style={{ margin: '16px 0 0 21px', borderRadius: 4 }}>重置</Button>
                                          </div>
                                          <Content
                                                className="site-layout-background"
                                                style={{
                                                      padding: 24,
                                                      margin: 0,
                                                      minHeight: 280,
                                                      background: '#FFFFFF'
                                                }}
                                          >
                                                <div style={{fontSize: 14, cursor:'pointer'}} onClick={this.navigateTo}>点我</div>
                                          </Content>
                                    </Layout>
                              </Layout>
                        </Layout>
                  </div>
            )
      }    
}
