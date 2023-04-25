import React, { useState } from 'react'
// import { SearchOutline } from 'antd-mobile-icons'
import { Search } from 'grommet-icons';
import { useNavigate } from 'react-router-dom'
import Style from './index.module.less'

const index = () => {
  let push = useNavigate()
  const search = ()=>{
    push('/serch')
  }
  return (
    <div className={Style.search} onClick={e=>search()}>
      <div className={Style.older}>
        <div>
          <Search className={Style.icon} />
        </div>
        <p>搜索商品</p>
      </div>
    </div>
  )
}

export default index