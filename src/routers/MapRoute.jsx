import React from 'react'
import { Link } from 'react-router-dom'
import QuickStartMap from '../components/MapLeaflet/QuickStartMap'
import RichLayerMap from '../components/MapLeaflet/RichLayerMap'

function Home () {
  const mapLinks = [{
    name: 'QuickStartMap',
    path: 'QuickStartMap',
    module: QuickStartMap
  }, {
    name: 'RichLayerMap',
    path: 'RichLayerMap',
    module: RichLayerMap
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
