import './App.css';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import { UsersContainer } from './containers/Users';
import { PostsContainer } from './containers/Posts/PostsContainer';
import { CommentsContainer } from './containers/Comments/CommentsContainer';
import { H3 } from './components';

const { Header, Content, Footer, Sider } = Layout;

function App() {

  return (
    <Layout>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/users"><H3>Users</H3></Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route exact path="/" render={()=><Redirect to={'/users'}/>}/>
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/posts/:userId?" render={() => <PostsContainer />} />
            <Route path="/comments/:postId?" render={() => <CommentsContainer />} />
            <Route path="*" render={()=><div>404 NOT FOUND</div>}/>
            </Switch>
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
