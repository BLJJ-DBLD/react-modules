import validator from '@rjsf/validator-ajv6'
import Form from '@rjsf/antd'
import React from 'react'

export default function SchemaForm (props) {
  return (
    <Form
      schema={props.json.schema}
      uiSchema={props.json.uiSchema}
      validator={validator}
      onChange={props.changeForm}
      onSubmit={props.submitForm}
      onError={props.errorForm} />
  )
}
