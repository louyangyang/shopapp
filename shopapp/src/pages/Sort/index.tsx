import React from 'react'
import Search from './Search'
import Sidebar from './Sidebar'
import Style from './index.module.less'

const index:React.FC= () => {
  return (
    <div>
      <Search></Search>
      <Sidebar></Sidebar>
    </div>
  )
}

export default index