import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Image,
  Modal,
  Col,
  Row,
  Input,
  Card
} from 'antd'
import classNames from 'classnames'
import './index.scss'

export default function SelectAppr (props) {
  const [activeData, setActiveData] = useState({
    ...props.data
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterText, setFilterText] = useState('')
  const filterList = useMemo(() => props.list.filter((item) => item.label.includes(filterText)), [filterText])
  const cardBoxEl = useRef()
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
    if (props.data.id !== activeData.id) {props.changeData(activeData)}
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleChangeFilter = (e) => {
    setFilterText(e.target.value)
  }
  const setCardScorllTop = () => {
    const parent = cardBoxEl.current
    const activeChild = cardBoxEl.current.querySelector('.active')
    parent.scrollTop = activeChild.offsetTop
  }

  return (
    <div className='select-appr'>
      <div className="img-box" onClick={showModal}>
        <Image
          height={50}
          preview={false}
          src={props.data.img}
        />
        <p className='label'>{props.data.id}: {props.data.label}</p>
      </div>
      <Modal
        title="选择外观"
        width="80%"
        style={{top: '50px'}}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Row gutter={16}>
          <Col span={16}>
            <Input
              placeholder='请输入外观名称进行筛选'
              bordered={false}
              value={filterText}
              onChange={handleChangeFilter}></Input>
            <Card
              style={{ width: '100%' }}
              bodyStyle={{padding: '0'}}>
              <div ref={cardBoxEl} className="card-box">
                {filterList.map((item, index) => (
                  <div
                    key={index}
                    className={classNames('img-box', {'active': item.id === activeData.id})}
                    onClick={() => setActiveData(item)}>
                    <Image
                      height={50}
                      preview={false}
                      src={item.img}
                    />
                    <p className='label'>{item.id}: {item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <p className="title">待选区</p>
            <Card style={{ width: '100%', height: '60vh' }}>
              <div className="img-box" onClick={setCardScorllTop}>
                <Image
                  height={150}
                  preview={false}
                  src={activeData.img}
                />
                <p className='label'>{activeData.id}: {activeData.label}</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}
