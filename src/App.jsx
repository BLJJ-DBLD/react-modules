import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {routeMap} from './routers/const'
import './App.css'

function App () {
  return (
    <div className="App">
      <Routes>
        {routeMap.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.module />}></Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
