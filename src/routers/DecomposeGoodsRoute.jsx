import React, { useState } from 'react'
import { Button } from 'antd'
import DecomposeGoods from '../components/DecomposeGoods'

export default function DecomposeGoodsRoute () {
  const [isShowDialog, setIsShowDialog] = useState(false)
  const handleSuccess = (data) => {
    console.log(data)
    setIsShowDialog(false)
  }
  const handleCancel = () => {
    setIsShowDialog(false)
  }

  return (
    <>
      <Button onClick={() => setIsShowDialog(true)}>批量物品生成</Button>
      <DecomposeGoods
        isOpen={isShowDialog}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
    </>
  )
}
