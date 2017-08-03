import React from 'react';
import ReactDOM from 'react-dom';
import {
  // BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

// readux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/store';
// 使用react-router的代码分割
import Bundle from '../lib/bundle';

// 组件
import Tab from './views/layout/Tab';
import Loading from './views/layout/Loading';
// 按这个格式来，&name=client是指定chunkName的名字，webpack会处理
import News from 'bundle-loader?lazy&name=[name]!./views/news/News.jsx';
import Funs from 'bundle-loader?lazy&name=[name]!./views/funs/Funs.jsx';
// 全局CSS
import S from './App.css';

const history = createBrowserHistory();

/**
 * code spliting
 * @param {*} Component
 */
const createModule = Component => () => (
  <Bundle load={Component}>
    {Mod => (Mod ? <Mod /> : <Loading />)}
  </Bundle>
);

const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div className={S.base}>
        <Tab />
        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/news" />
          )}
        />
        <Route path="/news" component={createModule(News)} />
        <Route path="/funs" component={createModule(Funs)} />
      </div>
    </ConnectedRouter>
  </Provider>
);

// 开发环境热替换
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
