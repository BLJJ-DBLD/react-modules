import React, { useMemo, useRef } from 'react'
import Generator, {
  defaultSettings
} from 'fr-generator'
import UbbInput, {widget as UbbInputWidget} from './widgets/UbbInput'

defaultSettings[1].widgets.push(UbbInputWidget)

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
        widgets={{
          UbbInput
        }}
        settings={defaultSettings}
        onSchemaChange={schemaChange} />
    </div>
  )
}

function areEqual (prevProps, nextProps) {

  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  console.log(prevProps, nextProps)
}

export default React.memo(FrGenerator, areEqual)
