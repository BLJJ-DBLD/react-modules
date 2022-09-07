import { Popover, Modal } from 'antd'
import React, { useState } from 'react'
import './index.scss'

const App = (props) => {
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
    props.callback(item)
    setIsModalOpen(false)
  }
  return (
    <div>
      <div
        className='color-block'
        style={{
          'backgroundColor': props.color.label,
          'color': '#fff'
        }}
        onClick={showModal}
      >{props.color.value}: {props.color.label}</div>
      <Modal
        title="颜色块"
        width="70%"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="block-box">
          {
            props.colors.map((item, index) => (
              <Popover
                key={index}
                content={`${item.value}: ${item.label}`}
                trigger="hover">
                <span
                  className='color-block'
                  style={{'backgroundColor': item.label}}
                  onClick={() => setColor(item)}
                />
              </Popover>
            ))
          }
        </div>
      </Modal>
    </div>
  )
}

export default App
