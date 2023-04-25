import './index.less'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { Box, Tab, Tabs } from 'grommet';
import {  HomeRounded, CodeSandbox,Shop,User } from 'grommet-icons';
import { useLocation, useNavigate } from 'react-router-dom'

interface props {
  list?: any,
}

const TabBarBaseDemo: React.FC<props> = (props:props) => {
  const navgate = useNavigate()
  const path = useLocation()
  const [value, setValue] = useState(path.pathname.split('/')[1] || 'home');
  const click:any = (e:any) => {
    // console.log(e)
    
    setValue(e);

    navgate('/' + e)
  }
  useEffect(() => {
    // const path = useLocation()
    setValue(path.pathname.split('/')[1] || 'home');
  }, [path])
  let { list } = props
  // console.log(props)
  const icons:any = [<HomeRounded   />,<CodeSandbox  />,<Shop  />,<User  /> ]
  return (
    <div className='bottom'>
      <Box align="center" pad="medium">
        <Tabs>
        {list.map((item: { key: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; },i: Key | number) => (
            <Tab key={i} className={value==item.key?'toblue':''} onClick={()=>click(item.key)} plain title={item.title} icon={icons[i]} />
          ))}
        </Tabs>
      </Box>
    </div>
  )
}


export default TabBarBaseDemo;
