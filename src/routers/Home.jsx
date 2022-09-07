import React from 'react';
import {routeMap} from './const'
import { Link } from 'react-router-dom';

function Home () {
  return (
    <>
      <header className="App-header">
        组件列表：
      </header>
      <ul>
        {routeMap.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
