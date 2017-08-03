import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route,
// } from 'react-router-dom';


const Root = () => (
  <div>
    hello  world
  </div>
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
