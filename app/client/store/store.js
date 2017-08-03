import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// 引入中间件
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// 引入根reducer
import rootReducer from '../reducers/index';


// 调用日志打印
const loggerMiddleware = createLogger();
// react-router-redux
const history = createBrowserHistory();
const routermiddleware = routerMiddleware(history);
// 创建一个中间件集合
const middleware = [thunkMiddleware, routermiddleware, loggerMiddleware];

// 使用 devTool 来进行调试
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/**
 * 配置store，默认为{}对象
 * @param {*} preloadedState
 */
const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware),
  ));

  return store;
};

export default configureStore;
