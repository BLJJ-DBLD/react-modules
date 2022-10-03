import React, { useEffect, useRef, useMemo, useState } from 'react'
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
  DomUtil // 处理 DOM 工具类
} from 'leaflet'
import 'leaflet-contextmenu'
import './index.scss'

const myIcon = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.1/dist/images/marker-icon-2x.png',
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [1, -20]
})

const shengquPoint = {
  lat: 31.18028823211786,
  lng: 121.60310089588167
}

const points = [shengquPoint]

function QuickStartMap (props) {
  const map = useRef(null)
  const gridMap = useRef(null)
  const mapPoints = useRef([])
  const showMenu = useRef(false)

  // 初始化地图显示
  const initMap = () => {
    if (map.current) {return}
    map.current = LMap('map', {
      contextmenu: true,
      contextmenuWidth: 120,
      contextmenuItems: [{
        text: 'Show coordinates'
      }, {
        text: 'Center map here'
      }, '-', {
        text: 'Zoom in',
        icon: 'images/zoom-in.png'
      }, {
        text: 'Zoom out',
        icon: 'images/zoom-out.png'
      }]
    }).setView([shengquPoint.lat, shengquPoint.lng], 13)
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; 自定义署名'
    }).addTo(map.current)
  }
  // 初始化地图坐标点集合
  const initPoints = () => {
    points.forEach((point, index) => {
      savePointInfo(point, index)
    })
  }
  // 初始化栅格图层
  const initGrid = () => {
    gridMap.current = new GridLayer()
    gridMap.current.createTile = function (coords) {
      const tile = DomUtil.create('canvas', 'leaflet-tile')
      const ctx = tile.getContext('2d')
      const size = this.getTileSize()
      tile.width = size.x
      tile.height = size.y
      const nwPoint = coords.scaleBy(size)
      const nw = map.current.unproject(nwPoint, coords.z)
      ctx.strokeRect(nwPoint.x, nwPoint.y, size.x, size.y)

      /* ctx.fillStyle = 'black'
      ctx.fillText(`x: ${coords.x}, y: ${coords.y}, zoom: ${coords.z}`, 50, 60)
      ctx.fillText(`lat: ${nw.lat}, lng: ${nw.lng}`, 50, 80) */
      ctx.strokeStyle = 'black'
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(size.x - 1, 0)
      ctx.lineTo(size.x - 1, size.y - 1)
      ctx.lineTo(0, size.y - 1)
      ctx.closePath()
      ctx.stroke()
      return tile
    }
    gridMap.current.addTo(map.current)
  }
  // 监听地图点击事件
  const onMapClick = (e) => {
    if (showMenu.current) {
      showMenu.current = false
      return
    }
    let flag = false
    let curPointIndex = 0
    const curMapPoints = [...mapPoints.current]
    while (!flag) {
      const {$index} = curMapPoints[curPointIndex] || {}
      if ($index !== curPointIndex) {
        flag = true
      } else {
        curPointIndex += 1
      }
    }
    savePointInfo(e.latlng, curPointIndex)
  }
  // 监听地图鼠标右键菜单事件
  const onMapContextmenu = (e) => {
    showMenu.current = true

    /* let useTooltip = tooltip()
      .setLatLng(e.latlng)
      .setContent('Hello world!<br />This is a nice tooltip.')
      .addTo(map.current) */
  }
  // 监听地点坐标鼠标右键菜单事件
  const onMarkerContextmenu = (e) => {
    showMenu.current = true

    /* let useTooltip = tooltip()
      .setLatLng(e.latlng)
      .setContent('Hello world!<br />This is a nice tooltip.')
      .addTo(map.current) */
  }
  // 保存坐标点
  const savePointInfo = (point, $index) => {
    const pointMarker = marker(point, {
      alt: $index,
      icon: myIcon,
      draggable: true,
      contextmenu: true,
      contextmenuInheritItems: true,
      contextmenuItems: [{
        text: 'Marker item',
        index: 0
      }, {
        separator: true,
        index: 1
      }]
    }).addTo(map.current)
      .bindPopup(`${point.lat}, ${point.lng}`)
    pointMarker.on('contextmenu', onMarkerContextmenu)
    mapPoints.current = [
      ...mapPoints.current,
      {
        $index,
        point,
        marker: pointMarker
      }
    ]
  }
  // 设置地图监听方法
  const setMapListener = () => {
    map.current.on('click', onMapClick)
    map.current.on('contextmenu', onMapContextmenu)
  }
  // 移除地图监听方法
  const removeMapListener = () => {
    map.current.off() // Removes all listeners
  }
  useEffect(() => {
    initMap()
    initPoints()
    // initGrid()
    setMapListener()
    return () => {
      removeMapListener()
    }
  }, [])
  return (
    <div className='map-box'>
      <div id="map"></div>
    </div>
  )
}
export default QuickStartMap
