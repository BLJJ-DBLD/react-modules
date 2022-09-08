import React, { useState } from 'react'
import schemaJson from './schema.json'
import {
  Modal,
  Row,
  Col,
  Input,
  Button,
  Divider, Radio, Table
} from 'antd'
import SchemaForm from '../SchemaForm'

const { TextArea } = Input

export default function DecomposeGoods (props) {
  const [tableData, setTableData] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      setSelectedRowKeys(selectedRowKeys)
    }
  }
  const handleOk = () => {
    props.onSuccess()
  }
  const handleCancel = () => {
    props.onCancel()
  }
  const handleAddGoods = () => {
    const lastId = tableData.length !== 0 ? tableData[tableData.length - 1].id + 1 : 0
    setTableData([
      ...tableData,
      {
        id: lastId,
        prevText: '',
        descText: '',
      }
    ])
  }
  const handleDelGoods = () => {
    const curTableData = [...tableData]
    const filteCurTableData = curTableData.filter((data) => !selectedRowKeys.includes(data.id))
    setTableData(filteCurTableData)
    setSelectedRowKeys([])
  }
  const handleChangeTab = (e, index, key) => {
    const curTableData = [...tableData]
    const text = e.target.value
    curTableData[index][key] = text
    setTableData(curTableData)
  }
  const columns = [
    {
      title: '前缀',
      dataIndex: 'prevText',
      render: (_, {prevText}, index) => <Input placeholder="请输入前缀" value={prevText} onChange={(e) => handleChangeTab(e, index, 'prevText')} />,
    }, {
      title: '修饰文本',
      dataIndex: 'descText',
      render: (_, {descText}, index) => <TextArea placeholder="请输入修饰文本" value={descText} rows={1} onChange={(e) => handleChangeTab(e, index, 'descText')} />,
    }
  ]

  return (
    <div className='decompose-goods'>
      <Modal
        title="批量物品生成"
        width="80%"
        open={props.isOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Row gutter={24}>
          <Col span={14}>
            <Row justify="space-between">
              <Button onClick={handleAddGoods}>新增物品</Button>
              <Button type="primary" danger disabled={selectedRowKeys.length === 0} onClick={handleDelGoods}>删除</Button>
            </Row>
            <Table
              rowKey="id"
              rowSelection={{
                type: 'checkbox',
                ...rowSelection,
              }}
              pagination={{
                pageSize: 6
              }}
              columns={columns}
              dataSource={tableData} />
          </Col>
          <Col span={10}>
            <SchemaForm json={schemaJson}/>
          </Col>
        </Row>
      </Modal>
    </div>
  )
}
