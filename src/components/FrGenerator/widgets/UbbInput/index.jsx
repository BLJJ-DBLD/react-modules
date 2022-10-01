import React, { useMemo } from 'react'
import './index.scss'
import { Input } from 'antd'
const { TextArea } = Input

export const widget = {
  show: true,
  text: 'Ubb输入框',
  name: 'ubbInput',
  useCommon: true,
  schema: {
    title: 'Ubb输入框',
    type: 'string',
    widget: 'UbbInput'
  },
  setting: {}
}

export default function UbbInput ({value, onChange, ...rest}) {
  const ubbToHtml = (str = '') => {
    str = str.replace(/</ig, '&lt;')
    str = str.replace(/>/ig, '&gt;')
    str = str.replace(/\n/ig, '<br />')
    // str = str.replace(/\[code\](.+?)\[\/code\]/ig, function($1, $2) {return phpCode($2);});

    str = str.replace(/\[hr\]/ig, '<hr />')
    str = str.replace(/\[\/(size|color|font|backcolor)\]/ig, '</font>')
    str = str.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/ig, '<$1>')
    str = str.replace(/\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/ig, '</$1>')
    str = str.replace(/\[\/align\]/ig, '</p>')
    str = str.replace(/\[(\/)?h([1-6])\]/ig, '<$1h$2>')

    str = str.replace(/\[align=(left|center|right|justify)\]/ig, '<p align="$1">')
    str = str.replace(/\[size=(\d+?)\]/ig, '<font size="$1">')
    str = str.replace(/\[color=([^\[\<]+?)\]/ig, '<font color="$1">')
    str = str.replace(/\[backcolor=([^\[\<]+?)\]/ig, '<font style="background-color:$1">')
    str = str.replace(/\[font=([^\[\<]+?)\]/ig, '<font face="$1">')
    str = str.replace(/\[list=(a|A|1)\](.+?)\[\/list\]/ig, '<ol type="$1">$2</ol>')
    str = str.replace(/\[(\/)?list\]/ig, '<$1ul>')

    // str = str.replace(/\[s:(\d+)\]/ig,function($1,$2){ return smilePath($2);});
    str = str.replace(/\[img\]([^\[]*)\[\/img\]/ig, '<img src="$1" border="0" />')
    str = str.replace(/\[url=([^\]]+)\]([^\[]+)\[\/url\]/ig, '<a href="$1">' + '$2' + '</a>')
    str = str.replace(/\[url\]([^\[]+)\[\/url\]/ig, '<a href="$1">' + '$1' + '</a>')
    return {__html: str || '暂无数据'}
  }
  const htmlValue = useMemo(() => ubbToHtml(value), [value])
  return (
    <div className="ubb-input">
      {
        rest.readOnly ? null : (
          <div className="ubb-text">
            <TextArea
              placeholder='请输入内容'
              value={value}
              disabled={rest.disabled}
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        )
      }
      显示内容：<span className="ubb-html" dangerouslySetInnerHTML={htmlValue}></span>
    </div>
  )
}
