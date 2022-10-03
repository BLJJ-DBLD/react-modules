import React, { useMemo, useRef } from 'react'
import Generator from 'fr-generator'
import {defaultSettings, defaultCommonSettings} from './settings'
import widgets from './widgets'

function FrGenerator (props) {
  const defaultValue = useMemo(() => props.defaultValue || {}, [])
  const schemaRef = useRef({})
  const schemaChange = (value) => {
    schemaRef.current = value
  }

  return (
    <div style={{ height: props.height }}>
      <Generator
        defaultValue={defaultValue}
        widgets={widgets}
        settings={defaultSettings}
        commonSettings={defaultCommonSettings}
        onSchemaChange={schemaChange} />
    </div>
  )
}

export default FrGenerator
