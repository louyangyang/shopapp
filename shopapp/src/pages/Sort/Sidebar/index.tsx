import React, { useState, useEffect } from 'react'
// import { SideBar } from 'antd-mobile'
// import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { getTFList } from '@/api/http'
import style from './index.module.less'
import { Tabs } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css'
export default () => {
  const [activeKey, setActiveKey] = useState('鞋类')
  let [tabs, setTabs] = useState([])
  let [result, setResult] = useState([])
  let push = useNavigate()
  useEffect(() => {

    getTFList().then((res: any) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      setTabs(res.data);
      result = res.result;
      setResult(result);
    })

    // setTimeout(() => {
    //   chenageTabs({ title: '服饰' });

    // }, 100)
    // chenageTabs({ title: activeKey })
  }, [])

  useEffect(() => {
    chenageTabs({ title: activeKey })
  }, [tabs])

  let [tabsList, settabsList] = useState([]);

  const chenageTabs = (e: any) => {
    let arr = result;
    console.log(e.title)
    setActiveKey(e.title)
    let list = arr.filter((item: any) => {
      return item.parent_name === e.title
    })
    tabsList = [...list];
    settabsList(tabsList);
  }



  const count = (item: any) => {
    console.log(item)
    push(`/Category`, {
      state: {
        parent_name: item.parent_name,
        name: item.name
      }
    })
  }
  const [tab5value, setTab5value] = useState('0');
  const list5 = Array.from(new Array(2).keys())
  return (
    <div className={style.container}>
      <Tabs
        onClick={(e) => { chenageTabs(e) }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: '0.5rem',
          bottom: 0
        }}
        value={tab5value} onChange={({ paneKey }) => {
          setTab5value(paneKey)
        }}
        titleScroll direction="vertical">
        {
          tabs.map(item =>
            <Tabs.TabPane key={item} title={item}>
              <ul>
                {
                  tabsList.map((item: any) => (
                    <li key={item.id} onClick={e => count(item)}>
                      {item.name}
                    </li>
                  ))
                }
              </ul>
            </Tabs.TabPane>)
        }
      </Tabs>
    </div>
  )
}