import React, { useState } from 'react'
import Style from './index.module.less'
import {
    User,
    Shop, CodeSandbox, HomeRounded, FormPrevious,
    Menu
} from 'grommet-icons';
import { Box, Notification, DropButton } from 'grommet';
import { createBrowserHistory } from 'history';
import { getAmend } from '@/api/use'
import Verify from '@/components/Verify'
import { useNavigate, NavLink } from 'react-router-dom'
const align = { top: 'bottom' };
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
    let [username, getUsername] = useState('')

    let [password, getPassword] = useState('')
    let [flag, getFlag] = useState(true)
    let [show, getshow] = useState('none')
    let [lin, getLin] = useState(false)


    const [visible, setVisible]: any = useState(false);
    let [mesage, setmesage] = useState('账号不存在')
    let push = useNavigate()
    const history = createBrowserHistory()
    const customer = (e: any) => {
        getUsername(e.target.value)
    }

    // 修改密码的请求
    const register = () => {
        getAmend({ username, password }).then((res: any) => {
            // console.log(res)
            
            if (res.code == 200) {
                setmesage('修改密码成功')
                getshow('block')

            }
            if (res.code == 402) {
                setmesage('账号不存在')
                getshow('block')
            }
        })
    }
    
  

    const custopassword = (e: any) => {
        getPassword(e.target.value)
    }
    const affirm = () => {
        if (mesage=='修改密码成功') {
            push('/login')
        }
        setTimeout(() => {
            getshow('none')
           
        }, 100)
    }

    const handle = (val: boolean) => {
        getFlag(val)
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

    //控制禁止
   
    return (
        <div className={Style.password} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />
                    {/* <span>注册</span> */}

                </div>
                <span>修改密码</span>
                <div className={Style.li}>

                    <Box align="center">
                        <DropButton
                            label={<Menu />}
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
                <div className={Style.usename}>
                    <User />
                    <input type="text" placeholder='请输入账号' onInput={e => customer(e)} />
                </div>
                <div className={Style.usename}>
                    <User />
                    <input type="password" placeholder='请输新入密码' onInput={e => custopassword(e)} />
                </div>
    
                <section>
                    <Verify onhandle={handle} />
                </section>
                <div className={Style.btn}>
                    <button disabled={flag} className={flag ? Style.register : Style.register2} onClick={e => register()} >修改密码</button >
                </div>
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