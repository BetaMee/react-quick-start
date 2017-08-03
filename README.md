## 一个画报app应用

一个小小的单页应用

## Technology Stack

### FrontEnd

- [React](https://github.com/facebook/react)
- [React Router 4](https://reacttraining.com/react-router/)
- [Redux](https://github.com/reactjs/redux)
- [React Router Reudex]()
- [PostCSS]()
- [CSS Modules]()


### BackEnd

- [Nodejs v6.9.0]()
- [Express]()

### Auth
- [jsonwebtoken]()

### Cloud

- [LeanCloud]()

### Development tools

- [npm v5]()
- [Webpack v3]()
- [bundle loader]()
- [Nodemon]()
- [Babel v6](https://github.com/babel/babel)
- [ESLint](https://github.com/eslint/eslint)
- [Webpack-dev-middleware]()
- [Webpack-hot-middleware]()



## Feature

- ECMAScript 6
- Babel-node编译node端es6代码
- 使用VSCode调试node代码
- nodemon监控后端代码，自动重启
- webpack + bundle loader+ react-router v4实现code splitting
- PostCSS搭配autoprefixer，直接使用CSS

## Configuration Progress

- <s>webpack-dev-middleware + webpack-hot-middleware实现前端react代码热加载热替换</s>
- <s>nodemon + babel-node + vscode debugger 实现后端代码配置变化监控、自动重启、调试、编译</s>
- <s>webpack搭配postcss等插件处理css、图片等资源</s>
- <s>webpack处理**多页面**打包，抽取公共chunk</s>
- <s>webpack处理生产环境下的打包</s>

## App Progress

- <s>集成react + react-router + redux，合理设计组件</s>
- <s>react-router+webpack实现code splitting</s>
- 进度条的设计
- 懒加载，占位符，良好的用户体验
- 加入微信账号系统，权限认证
- 页面分享功能


## Problem

- babelrc配置中webpack2和babel-node冲突，webpack2原生支持import，在es2015中加上module=false，但是babel node无法转换，打包时应注意。