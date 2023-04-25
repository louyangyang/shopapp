import React from 'react'
import TabBarBaseDemo from '@/components/TabBar'
import { Outlet } from 'react-router-dom'
import Style from './index.module.less'
const index: React.FC = () => {


  return (
    <div className='box'>
        <Outlet></Outlet>
    </div>
  )
}

export default index