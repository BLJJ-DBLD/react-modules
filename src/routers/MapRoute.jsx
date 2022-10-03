import React from 'react'
import { Link } from 'react-router-dom'
import QuickStartMap from '../components/Map/QuickStartMap'

function Home () {
  const mapLinks = [{
    name: 'QuickStartMap',
    path: 'QuickStartMap',
    module: QuickStartMap
  }]
  return (
    <>
      <ul>
        {mapLinks.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
