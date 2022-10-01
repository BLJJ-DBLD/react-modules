import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import FormRender, { useForm } from 'form-render'
import deepSetProperties from './utils/deepSetProperties'
import widgets from '../FrGenerator/widgets'
import testJson from './testJson/complexSchema.json'
import { Spin } from 'antd'

const SchemaForm = forwardRef(function SchemaForm (props, ref) {
  // const {schema: propsSchema, uiSchema: propsUiSchema} = testJson
  const {schema: propsSchema, uiSchema: propsUiSchema} = props.json
  const form = useForm()
  const promiseAll = useRef([])
  const [spinning, setSpinning] = useState(false)
  const [schema, setSchema] = useState({})
  const [uiSchema, setUiSchema] = useState({})
  const initSchema = () => {
    const curSchema = {...propsSchema}
    const curUiSchema = {...propsUiSchema}
    setSchema(curSchema)
    setUiSchema(curUiSchema)
  }
  const initFetchSchema = () => {
    const curSchema = {...schema}
    deepSetProperties(curSchema, promiseAll.current)
  }
  const initFetchUISchema = () => {
    const curUiSchema = {...uiSchema}
    deepSetProperties(curUiSchema, promiseAll.current)
  }
  useEffect(() => {
    initSchema()
  }, [])
  useImperativeHandle(ref, () => ({
    submit: () => {
      form.submit()
    }
  }))
  const onMount = () => {
    setSpinning(true)
    form.setValues(props.data)
    initFetchSchema()
    initFetchUISchema()
    Promise.allSettled(promiseAll.current).then((results) => {
      let setProperties = {}
      results.forEach((res) => {
        if (res.status === 'fulfilled') {
          setProperties = {
            ...setProperties,
            ...res.value
          }
        }
      })
      form.setSchema(setProperties)
      setSpinning(false)
    })
  }
  return (
    <Spin spinning={spinning}>
      <FormRender
        form={form}
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        onMount={onMount}
        onFinish={props.finish} />
    </Spin>
  )
})

export default SchemaForm
