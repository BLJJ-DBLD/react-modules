import { Popover, Modal } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import './index.scss'

const ColorBlock = (props) => {
  const [sub, setSub] = useState(0)
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
  const setColor = (item, index) => {
    props.onChange(item)
    setSub(index)
    setIsModalOpen(false)
  }
  const {values, labels} = useMemo(() => ({
    values: props.schema.enum || [],
    labels: props.schema.enumNames || []
  }), [props.schema])
  useEffect(() => {
    const findSub = values.find((value) => value === props.value)
    setSub(findSub)
  }, [values, labels])
  return (
    <div>
      <div
        className='color-block'
        style={{
          'backgroundColor': labels[sub],
          'color': '#fff'
        }}
        onClick={showModal}
      >{props.value}: {labels[props.value]}</div>
      <Modal
        title="颜色块"
        width="70%"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="block-box">
          {
            values.map((item, index) => (
              <Popover
                key={item}
                content={`${item}: ${labels[index]}`}
                trigger="hover">
                <span
                  className='color-block'
                  style={{'backgroundColor': labels[index]}}
                  onClick={() => setColor(item, index)}
                />
              </Popover>
            ))
          }
        </div>
      </Modal>
    </div>
  )
}

export default ColorBlock
