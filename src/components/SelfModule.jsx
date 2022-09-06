import React, { useState } from 'react';
import '../assets/styles/dragView.scss'

function SelfModule (props) {
  const [loading, setLoading] = useState(false)
  const [gameId, setGameId] = useState('')
  const [tabsName, setTabsName] = useState('')
  return (
    <div className="main">
      <div className="searchItem"></div>
      <div className="contentMain">
        <div className="tableList">
          <div className="resizeBar">
            <div className="dividing">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <div className="resizeRealBox">
            <div className="vxeTableContent"></div>
          </div>
          <div className="formContent"></div>
        </div>
      </div>
    </div>
  )
}

export default SelfModule
