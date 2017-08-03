import React from 'react';
import { Link } from 'react-router-dom';

import S from './Tab.css';

const Tab = () => (
  <div>
    <ul className={S.ul}>
      <li><Link to="/news">画报</Link></li>
      <li><Link to="/funs">有趣</Link></li>
    </ul>
  </div>
);


export default Tab;
