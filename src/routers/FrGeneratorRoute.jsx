import React from 'react'
import FrGenerator from '../components/FrGenerator'

export default function FrGeneratorRoute () {
  const defaultValue = {
    type: 'object',
    properties: {
      inputName: {
        title: '简单输入框',
        type: 'string'
      }
    }
  }

  return (
    <FrGenerator
      height="100vh"
      defaultValue={defaultValue} />
  )
}
