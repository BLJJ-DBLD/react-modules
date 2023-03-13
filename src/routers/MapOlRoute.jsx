import React from 'react'
import { Link } from 'react-router-dom'
import RichMap from '../components/MapOl/RichMap'

function Home () {
  const mapLinks = [{
    name: 'RichMap',
    path: 'RichMap',
    module: RichMap
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
