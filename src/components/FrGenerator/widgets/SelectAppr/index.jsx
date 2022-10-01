import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  Image,
  Modal,
  Col,
  Row,
  Input,
  Card,
  Spin
} from 'antd'
import classNames from 'classnames'
import './index.scss'

export const widget = {
  show: true,
  text: '图片选择',
  name: 'selectAppr',
  useCommon: false,
  schema: {
    title: '图片选择',
    type: 'object',
    widget: 'SelectAppr'
  },
  setting: {
    'ui:fetch': {
      'title': '请求数据',
      'type': 'object',
      'properties': {
        'url': {
          'title': '请求路径',
          'type': 'string',
          'required': true,
          'props': {}
        },
        'method': {
          'title': '请求方式',
          'type': 'string',
          'enum': [
            'get',
            'post'
          ],
          'enumNames': [
            'get',
            'post'
          ],
          'widget': 'radio',
          'default': 'get'
        },
        'enumMap': {
          'title': '字段枚举',
          'type': 'object',
          'properties': {
            'label': {
              'title': 'label',
              'type': 'string',
              'default': 'label',
              'required': true,
              'props': {}
            },
            'value': {
              'title': 'value',
              'type': 'string',
              'default': 'value',
              'required': true,
              'props': {}
            }
          }
        }
      }
    }
  }
}

export default function SelectAppr ({value = {}, onChange, ...rest}) {
  const [imgSpining, setImgSpining] = useState(true)
  const [imgList, setImgList] = useState([])
  const [activeData, setActiveData] = useState({
    ...value
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterText, setFilterText] = useState('')
  const filterList = useMemo(() => imgList.filter((item) => item.label.includes(filterText)), [filterText, imgList])
  const cardBoxEl = useRef()
  const showModal = () => {
    setIsModalOpen(true)
    setActiveData(value)
  }
  const handleOk = () => {
    setIsModalOpen(false)
    if (value.id !== activeData.id) {onChange(activeData)}
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
  const getImgList = async () => {
    setImgSpining(true)
    try {
      const imgList = []
      for (let i = 0; i < 80; i++) {
        imgList.push({
          id: i,
          img: `https://picsum.photos/id/${1000 + i}/200/200`,
          label: '#' + i + '：图片'
        })
      }
      setImgList(imgList)
      setImgSpining(false)
    } catch (error) {
      console.error('接口请求出错。')
      setImgSpining(false)
    }
  }
  useEffect(() => {
    getImgList()
  }, [])

  return (
    <div className='select-appr'>
      <div className="img-box" onClick={showModal}>
        <Image
          height={50}
          preview={false}
          src={value.img || 'error'}
          fallback="https://picsum.photos/id/237/200/300"
        />
        <p className='label'>{value.id}: {value.label}</p>
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
            <Spin spinning={imgSpining}>
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
                        src={item.img || 'error'}
                        fallback="https://picsum.photos/id/237/200/300"
                      />
                      <p className='label'>{item.label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Spin>
          </Col>
          <Col span={8}>
            <p className="title">待选区</p>
            <Card style={{ width: '100%', height: '60vh' }}>
              <div className="img-box" onClick={setCardScorllTop}>
                <Image
                  height={150}
                  preview={false}
                  src={activeData.img || 'error'}
                  fallback="https://picsum.photos/id/237/200/300"
                />
                <p className='label'>{activeData.label}</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}
