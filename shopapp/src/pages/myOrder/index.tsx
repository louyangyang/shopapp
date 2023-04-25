import React, { useState } from 'react'
import Style from './index.module.less'
import {
    User,
    Shop, CodeSandbox, HomeRounded, FormPrevious,
    Projects
} from 'grommet-icons';
import { Box, DropButton } from 'grommet';

import { createBrowserHistory } from 'history';
import { useNavigate, NavLink } from 'react-router-dom'
import Noticebar from './Noticebar'
import Tabs from './Tabs'
import Main from './main'
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

const icons: any = [<HomeRounded />, <CodeSandbox />, <Shop />, <User />]
// 
const DropContent = ({ onClose }: any) => (

    <div className={Style.li}>

        {
            tabs.map((item: { key: string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | number) => {
                return (
                    <div key={i}>
                        <NavLink to={'/' + item.key}>
                            {icons[i]}
                            <span>{item.title}</span>
                        </NavLink>
                    </div>
                )
            })
        }
    </div>
);
const index: React.FC = () => {

    let [show, getshow] = useState('none')
    let [lin, getLin] = useState(false)


    const [visible, setVisible]: any = useState(false);
    let [mesage, setmesage] = useState('账号不存在')
    let push = useNavigate()
    const history = createBrowserHistory()
    
    
  

 
    const affirm = () => {
        if (mesage=='修改密码成功') {
            push('/login')
        }
        setTimeout(() => {
            getshow('none')
           
        }, 100)
    }



    const align = { top: 'bottom' };
    const go = () => {

        history.go(-1)
    }


    const complete = () => {
        if (lin == true) {
            getLin(false)
        }
    }
    const [open, setOpen] = React.useState(false);
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //tabs切换
    const click=(e:any)=>{
       push('/myOrder?'+e)
    }
   
    return (
        <div className={Style.myorder} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />
                    {/* <span>注册</span> */}

                </div>
                <span>我的订单</span>
                <div className={Style.li}>

                    <Box align="center">
                        <DropButton
                            label={<Projects />}
                            open={open}
                            onOpen={onOpen}
                            onClose={onClose}
                            dropContent={<DropContent />}
                        // dropProps={{ align }}
                        />
                    </Box>
                </div>

            </nav>
            <main>
                <div>
                <Noticebar></Noticebar>
                </div>
                <div>
                <Tabs toclick={click}></Tabs>
                </div>
                <div>
                <Main ></Main>
                </div>
                <div></div>
            </main>
            <div className={Style.coverage} style={{ display: show }}>
                <div className={Style.cover}>
                    <div className={Style.dial}>
                        <p>{mesage}</p>
                    </div>
                    <div>
                        <button onClick={e => affirm()}>确认</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;