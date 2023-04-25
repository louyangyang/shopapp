import React, { useState, useEffect } from 'react'
import Style from './index.module.less'
import {
    User,
    Shop, CodeSandbox, HomeRounded, FormPrevious,
    Menu,
    Qr,
    FormNext
} from 'grommet-icons';
import { Box, DropButton } from 'grommet';
import { createBrowserHistory } from 'history';
import { useNavigate, NavLink } from 'react-router-dom'
import img from './image/use.jpg'
import img1 from './image/qrcode_stride.fun.png'
import { store } from '@/store'
import { IUserActionType } from '@/store/reducers/user'
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

    let [show, getshow] = useState('none')
    let [lin, getLin] = useState(false)


    const [visible, setVisible]: any = useState(false);
    let [mesage, setmesage] = useState('退出登录成功')
    let push = useNavigate()
    const history = createBrowserHistory()





    const affirm = () => {
        if (mesage == '退出登录成功') {
            push('/home')
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
    const stores = store.getState()
    //控制禁止
    useEffect(() => {
        const stores = store.getState()
        setuse(stores)
    }, [])
    let [use, setuse]: any = useState({})

    //退出登录
    const tonull = () => {
        store.dispatch({
            type: IUserActionType.CHANGE,
            payload: { token: '', name: '', emil: '',id:'' }
        })
        getshow('block')

    }
    return (
        <div className={Style.personalData} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />
                    {/* <span>注册</span> */}

                </div>
                <span>个人资料</span>
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
                <div className={Style.use}>
                    <div>
                        <span>头像</span>
                        <span><img src={img} alt="" /></span>
                    </div>
                    <div onClick={()=>push('/myCode')}>
                        <span>二维码</span>
                        <span><img src={img1} alt="" /></span>
                    </div>
                    <div>
                        <span>用户名</span>
                        <span>{stores.user.user.name}</span>
                    </div>
                    <div>
                        <span>邮箱</span>
                        <span>{stores.user.user.emil}</span>
                    </div>
                </div>
                <div className={Style.use2}>
                    <div onClick={() => push('/password')}>
                        <span>修改密码</span>
                        <span><FormNext /></span>
                    </div>
                    <div onClick={()=>push('/selectAdd')}>
                        <span>地址管理</span>
                        <span><FormNext /></span>
                    </div>
                    <div onClick={() => tonull()}>
                        <span>退出登录</span>
                        <span><FormNext /></span>
                    </div>
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