import '@/assets/App.less'
import React from 'react'
import Router from './router'


import { IUserState, IUserActionType } from '@/store/reducers/user'

const getFontSize = () => {
  let designWidth = 375 // 设计稿宽度
  document.documentElement.style.fontSize = (window.innerWidth / designWidth) * 100 + "px"
}

getFontSize()
window.onresize = getFontSize

const App: React.FC = () => {


  const tabs: any = [
    {
      key: 'home',
      title: '首页',

      // badge: Badge.dot,
    },
    {
      key: 'classification',
      title: '分类',
      // badge: '5',
    },
    {
      key: 'shoping',
      title: '购物车',

      // badge: '99+',
    },
    {
      key: 'user',
      title: '我的',

    },
  ]
  // const [activeKey, setActiveKey] = useState('todo')
  return (
    <div className='box'>
      <Router></Router>
    </div>

  )
}

export default App
