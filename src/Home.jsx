import React from 'react'
import SelfModule from './components/SelfModule'
import { Link, Routes, Route } from 'react-router-dom'

function App () {
  const routeMap = [{
    name: 'SelfModule',
    path: '/SelfModule',
    module: <SelfModule/>
  }]

  return (
    <div className="App">
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
      <Routes>
        {/* {routeMap.map((route, index) => (
          <Route key={index} path={route.path} element={route.module}></Route>
        ))} */}
        <Route path="/SelfModule" element={<SelfModule/>}></Route>
      </Routes>
    </div>
  )
}

export default App
