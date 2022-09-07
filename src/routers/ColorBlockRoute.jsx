import React, { useState } from 'react'
import ColorBlock from '../components/ColorBlock'

export default function ColorBlockRoute (props) {
  const namecolor = [{
    label: '#000000',
    value: 0
  }, {
    label: '#800000',
    value: 1
  }, {
    label: '#008000',
    value: 2
  }, {
    label: '#808000',
    value: 3
  }, {
    label: '#000080',
    value: 4
  }, {
    label: '#800080',
    value: 5
  }]

  const [color, setColor] = useState({
    label: '#efa54a',
    value: 94
  })

  return (
    <ColorBlock
      color={color}
      colors={namecolor}
      callback={(color) => {
        setColor(color)
      }}
    />
  )
}
