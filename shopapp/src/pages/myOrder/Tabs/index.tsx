import style from './index.module.less'
import { Tabs } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css'
import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from 'react-router-dom'
interface props {
  toclick?: any
}

const index = (props: props) => {
  const path = useLocation()
  const navigator=useNavigate()
  const [tab7value, setTab7value] = useState(path.search.split('?')[1] || 'c1');
 
  useEffect(() => {
    setTab7value(path.search.split('?')[1] || 'c1')
  }, [path])
  let { toclick } = props
  
  const list6: any = [
    {
      title: '全部',
      paneKey: 'c1',
      // icon: 'dongdong'
    },
    ,
    {
      title: '待付款',
      paneKey: 'c2'
    },
    {
      title: '待发货',
      paneKey: 'c3',

    },
    {
      title: '待收货',
      paneKey: 'c4'
    }
  ]
  const click = (e: string) => {
    setTab7value(e)
    toclick(e)
  }
  return (
    <div className={style.mytas}>
      <Tabs value={tab7value} titleNode={() => {
        return list6.map((item: any, i: number) => (
          <div
            onClick={() => click(item.paneKey)}
            className={`nut-tabs__titles-item ${tab7value == item.paneKey ? 'active' : ''}`}
            key={item.paneKey}
          >
            <span className="nut-tabs__titles-item__text">{item.title}</span>
            <span className="nut-tabs__titles-item__line" />
          </div>
        ))
      }

      }>
      </Tabs>
    </div>
  );


}
export default index
