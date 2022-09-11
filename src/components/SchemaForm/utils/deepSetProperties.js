import {cloneDeep, isObject} from 'lodash'
import { setEnum } from './setProperties'

function isSimpleValue (value) {
  return !isObject(value)
}

const continueKeys = ['properties', 'items']
function setPath (source, key, prevPath) {
  if (continueKeys.includes(key)) {return prevPath}
  const isArrayProperty = source[key].type === 'array' && (source[key].items.type === 'array' || source[key].items.type === 'object')
  const keyPath = isArrayProperty ? key + '[]' : key
  const resultPath = prevPath ? prevPath + '.' + keyPath : keyPath
  return resultPath
}

function setProperty (source, promiseAll, path) {
  const cloneSource = cloneDeep(source)
  for (const key in cloneSource) {
    if (Object.prototype.hasOwnProperty.call(cloneSource, key)) {
      if (!cloneSource[key]['ui:fetch']) {continue}
      // 设置需要配置的字段
      const keyPath = setPath(cloneSource, key, path)
      promiseAll.push(setEnum(cloneSource[key], keyPath))
    }
  }
  return cloneSource
}

export default function deepSetProperties (source, promiseAll = [], path = '') {
  const cloneSource = cloneDeep(source)
  if (isSimpleValue(cloneSource)) {return cloneSource}
  for (const key in cloneSource) {
    if (Object.prototype.hasOwnProperty.call(cloneSource, key)) {
      if (key === 'properties') {
        // 处理 properties 内容
        cloneSource[key] = setProperty(cloneSource[key], promiseAll, path)
      }
      // 继续递归
      const nextLevelPath = setPath(cloneSource, key, path)
      deepSetProperties(cloneSource[key], promiseAll, nextLevelPath)
    }
  }
}
