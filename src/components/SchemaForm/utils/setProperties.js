import {notification} from 'antd'

function fetchErrorTip (error, url) {
  notification.error({
    message: '接口请求错误',
    description: url
  })
}

async function fetchData (request) {
  const {
    url,
    method = 'get'
  } = request
  try {
    const response = await fetch('http://rap2api.taobao.org/app/mock/306508' + url, {
      method
    })
    if (response.status === 200) {return response.json()}
    throw response.json()
  } catch (error) {
    fetchErrorTip(error, url)
    throw error
  }
}

export async function setEnum (source, path) {
  const {enumMap = {}} = source['ui:fetch']
  const enumList = []
  const enumNameList = []
  try {
    const {list} = await fetchData(source['ui:fetch'])
    list.forEach((item) => {
      enumList.push(item[enumMap.value || 'value'])
      enumNameList.push(item[enumMap.label || 'label'])
    })
    return {
      [path]: {
        enum: enumList,
        enumNames: enumNameList
      }
    }
  } catch (error) {
    console.log(error)
    return {
      [path]: {
        enum: enumList,
        enumNames: enumNameList
      }
    }
  }
}
