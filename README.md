## React项目脚手架



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



## Problem

- babelrc配置中webpack2和babel-node冲突，webpack2原生支持import，在es2015中加上module=false，但是babel node无法转换，打包时应注意。