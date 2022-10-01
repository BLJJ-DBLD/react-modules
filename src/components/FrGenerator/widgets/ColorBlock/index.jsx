import { Popover, Modal } from 'antd'
import React, { useMemo, useState } from 'react'
import './index.scss'
import elementSettings from '../../settings/elementSettings.json'

export const widget = {
  show: true,
  text: '色块选择',
  name: 'ColorBlock',
  useCommon: false,
  schema: {
    title: '色块选择',
    type: 'object',
    widget: 'ColorBlock'
  },
  setting: {
    ...elementSettings
  }
}

export default function ColorBlock ({value = {}, onChange, schema, ...rest}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const setColor = (item) => {
    onChange(item)
    setIsModalOpen(false)
  }
  const enumValues = useMemo(() => schema.enum || [], [schema.enum])
  const enumLabels = useMemo(() => schema.enumNames || [], [schema.enumNames])
  return (
    <div>
      <div
        className='color-block'
        style={{
          'backgroundColor': value.label,
          'color': '#fff'
        }}
        onClick={showModal}
      >{value.value}: {value.label}</div>
      <Modal
        title="颜色块"
        width="70%"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="block-box">
          {
            enumValues.map((value, index) => {
              const label = enumLabels[index]
              return (
                <Popover
                  key={index}
                  content={`${value}: ${label}`}
                  trigger="hover">
                  <span
                    className='color-block'
                    style={{'backgroundColor': label}}
                    onClick={() => setColor({
                      label,
                      value
                    })}
                  />
                </Popover>
              )
            })
          }
        </div>
      </Modal>
    </div>
  )
}
