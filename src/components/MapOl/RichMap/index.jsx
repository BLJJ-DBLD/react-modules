import React from 'react'
import './index.scss'

import {
  Col, Row
} from 'antd'
export default function RichMap (props) {
  return (
    <>
      <Row>
        <Col span={18} className='map'>
          地图内容
        </Col>
        <Col span={6} className='tools'>
          <h2>侧边操作栏</h2>
        </Col>
      </Row>
    </>
  )
}
