import React, { useEffect, useRef, useMemo, useState } from 'react'
import { Checkbox } from 'antd'
import 'leaflet/dist/leaflet.css'
import 'leaflet-contextmenu/dist/leaflet.contextmenu.min.css'
import {
  map as LMap,
  tileLayer, // 画图工具
  marker, // 添加坐标点
  icon, // icon 图标设置
  popup, // 地图内弹窗
  tooltip, // 地图内提示
  GridLayer, // 栅格图层
  DomUtil, // 处理 DOM 工具类
  layerGroup // 图层组
} from 'leaflet'
import 'leaflet-contextmenu'
import './index.scss'

const myIcon = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon-2x.png',
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [1, -20]
})
const plainOptions = [{
  label: '城市图层坐标',
  value: 'cities'
}, {
  label: '公园图层坐标',
  value: 'parks'
}]
// cities
const littleton = marker([39.61, -105.02], {
    icon: myIcon
  }).bindPopup('This is Littleton, CO.'),
  denver    = marker([39.74, -104.99], {
    icon: myIcon
  }).bindPopup('This is Denver, CO.'),
  aurora    = marker([39.73, -104.8], {
    icon: myIcon
  }).bindPopup('This is Aurora, CO.'),
  golden    = marker([39.77, -105.23], {
    icon: myIcon
  }).bindPopup('This is Golden, CO.')

// parks
const crownHill = marker([39.75, -105.09], {
    icon: myIcon
  }).bindPopup('This is Crown Hill Park.'),
  rubyHill = marker([39.68, -105.00], {
    icon: myIcon
  }).bindPopup('This is Ruby Hill Park.')

const cities = layerGroup([littleton, denver, aurora, golden])
const parks = layerGroup([crownHill, rubyHill])
const osm = tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; 自定义署名'
})

function QuickStartMap (props) {
  const map = useRef(null)
  const layers = {
    cities,
    parks
  }

  // 初始化地图显示
  const initMap = () => {
    if (map.current) {return}
    map.current = LMap('map', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [osm]
    })
  }
  // 显隐图层
  const changeLayerShow = (checkedValues) => {
    console.log('checked = ', checkedValues)
    plainOptions.forEach((plain) => {
      if (checkedValues.includes(plain.value)) {
        layers[plain.value].addTo(map.current)
      } else {
        layers[plain.value].remove(map.current)
      }
    })

  }
  useEffect(() => {
    initMap()
  }, [])
  return (
    <div className='map-box'>
      <div id="map"></div>
      <div className="layers">
        <Checkbox.Group
          options={plainOptions}
          onChange={changeLayerShow} />
      </div>
    </div>
  )
}
export default QuickStartMap
