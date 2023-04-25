import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import Style from './index.module.less'
import {
    User,
    Shop, CodeSandbox, HomeRounded, FormPrevious,
    Menu,
    More,
    Projects,
    FormNext,
    Phone,
    Contact,
    StrikeThrough,
    CreditCard,
    Deliver,
    Package
} from 'grommet-icons';
import { Box, Tab, Tabs, DropButton } from 'grommet';
import { createBrowserHistory } from 'history';

import { useNavigate, NavLink } from 'react-router-dom'
//导入库
import { store } from '@/store'
import img from './image/use.jpg'
import img1 from './image/活动1.jpg'
import img2 from './image/活动2.jpg'
//导入请求
import { getTypeOneList } from '@/api/http'
//导入懒加载
import LazyLoad from 'react-lazyload';
//
import { Cell, Infiniteloading } from '@nutui/nutui-react';
const align: any = { top: 'bottom' };
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
const lists1: any = [
    {
        key: 'c2',
        title: '待付款',

        // badge: Badge.dot,
    },
    {
        key: 'c3',
        title: '待发货',
        // badge: '5',
    },
    {
        key: 'c4',
        title: '待收款',

        // badge: Badge.dot,
    },

]
const lists2: any = [
    {
        key: 'c2',
        title: '待付款',

        // badge: Badge.dot,
    },
    {
        key: 'c3',
        title: '待发货',
        // badge: '5',
    },
    {
        key: 'c4',
        title: '待收款',

        // badge: Badge.dot,
    },

]
const icons: any = [<HomeRounded />, <CodeSandbox />, <Shop />, <User />]
const icons2: any = [<CreditCard />, <Package />, <Deliver />,]
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


//
const InfiniteUlStyle: any = {
    // height: '450px',
    width: '100%',
    padding: '0',
    overflowY: 'auto',
    // overflowX: 'hidden'
}

const InfiniteLiStyle: any = {

    height: '200px',
    width: '200px',
    marginTop: '0',
    fontSize: '14px',
    // color: 'rgba(100, 100, 100, 1)',
    // textAlign: 'center'
}
const index: React.FC = () => {
    let [list, setlist]: any = useState([])

    let [show, getshow] = useState(false)

    let [lin, getLin] = useState(false)


    const [visible, setVisible]: any = useState(false);
    let Navigate = useNavigate()
    const history = createBrowserHistory()

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

    const stores: any = store.getState()
    //控制禁止

    //滚动加载
    const [defultList, setDefultList] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        if (list.length > 0) {

            init()
        }
    }, [list])

    const loadMore = (done: () => void) => {
        // console.log(list)
        if (list.length > 0) {

            setTimeout(() => {
                const curLen = defultList.length

                for (let i = curLen; i < curLen + 10; i++) {
                    if (i < list.length) {

                        defultList.push(list[i])
                    }
                }
                if (defultList.length >= list.length - 1) {
                    setHasMore(false)
                } else {
                    setDefultList([...defultList])
                }
                done()
            }, 500)
        }

    }

    const init = () => {


        // console.log(list[0])

        for (let i = 0; i < 10; i++) {
            if (i < list.length) {

                defultList.push(list[i])
            } 
            if (defultList.length >= list.length - 1) {
                setHasMore(false)
            } else {
                setDefultList([...defultList])
            }

            // console.log(defultList)
        }
        setDefultList([...defultList])

        // console.log(defultList)
    }
    const [desable, setdesable] = useState(false)
    //判断是否已经登录 
    useEffect(() => {
        const stores: any = store.getState()
        if (stores.user.user.token) {
            getshow(true)
        }
        getTypeOneList({ parent_name: '鞋类' }).then((res: any) => {
            // setlist(res.res)
            let a = res.res
            list.splice(0)
            a.forEach((element: any) => {
                //   setlist((list: any) => [...list, element])
                list.push(element)
            });
            setlist([...list])
        })

    }, [])
    const details = (id: any) => {
        console.log(id)
        Navigate('/shoping/details?id=' + id)
    }
    const click = (id: any) => {
        console.log(id)
        Navigate('/myOrder?' + id)
    }
    return (
        <div className={Style.user} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />
                    {/* <span>注册</span> */}

                </div>
                <span>个人中心</span>
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
            <div className={Style.img}>
                <div>

                    <div style={{ display: show ? 'none' : 'inline-block' }} className={Style.usenone}>
                        <span onClick={() => Navigate('/login')}>登录</span>/
                        <span onClick={() => Navigate('/register')}>注册</span>
                    </div>
                    <div onClick={() => Navigate('/personalData')} className={Style.useshow} style={{ display: !show ? 'none' : 'flex' }}>
                        <div className={Style.useshowimg}>
                            <img src={img} alt="" />
                        </div>
                        <div className={Style.useshowp}>
                            <p>{stores.user.user.name}</p>
                            <p>{stores.user.user.emil}</p>
                        </div>
                    </div>
                    <div style={{ display: !show ? 'none' : 'block' }} className={Style.useshowm}>
                        <Projects onClick={() => Navigate('/myCode')}></Projects>
                    </div>
                </div>
            </div>
            <main>
                <div className={Style.text}>
                    <div onClick={() => Navigate('/home')}>
                        <span>默认频道</span>
                        <span>主页<FormNext /></span>
                    </div>
                    <div onClick={() => Navigate('/myOrder')}>
                        <span>我的订单</span>
                        <span>全部订单<FormNext /></span>
                    </div>
                    <div className={Style.box}>
                        <div className={Style.box1}>
                            <Box align="center" pad="medium">
                                <Tabs >
                                    {lists1.map((item: { key: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: Key | number) => (
                                        <Tab key={i} onClick={() => click(item.key)} plain title={item.title} icon={icons2[i]} />
                                    ))}


                                </Tabs>
                            </Box>
                        </div>
                        <div className={Style.box2}>
                            {lists2.map((item: { key: any; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: Key | number) => (
                                <div key={i} >
                                    <button onClick={() => click(item.key)}>
                                        <p>0</p>
                                        <p>{item.title}</p>
                                    </button>
                                </div>
                            ))}




                        </div>


                    </div>

                    <div>
                        <span><CreditCard /> 优惠卷</span>
                    </div>
                    <div>
                        <span><StrikeThrough /> 有货币</span>
                    </div>
                    <div>
                        <span><Contact /> 消息</span>
                    </div>
                    <div onClick={() => Navigate('/serve')}>
                        <span><Phone /> 服务与支持</span>
                    </div>
                </div>

                <div>
                    <div className={Style.imgs}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={Style.imgs}>
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className={Style.Shoping}>
                    <p>| 为你优选</p>
                    <ul id="scroll" style={InfiniteUlStyle}>
                        <Infiniteloading
                            containerId="scroll"
                            useWindow={true}
                            useCapture={true}
                            hasMore={hasMore}
                            threshold={200}
                            onLoadMore={loadMore}
                            pullIcon={" "}
                            pullTxt=' '
                            loadIcon={' '}

                        >
                            {defultList.map((item: any, i: any) => {
                                return (
                                    <li key={i} onClick={() => details(item.id)}>
                                        <div>
                                            <LazyLoad height={200} placeholder={<img src={img} />}>
                                                <img src={item.img} alt="Real Image" />
                                            </LazyLoad>
                                        </div>


                                        <div className={Style.shopli}><p>{item.title}</p></div>
                                        <div className={Style.shopli}>
                                            <div>
                                                <span style={{ color: 'red' }}>￥{item.price} </span>
                                                <span style={{ color: '#b0b0b0', textDecoration: "line-through" }}>￥{item.special_price}</span>
                                            </div>
                                            <span>  <More></More> </span>
                                        </div>
                                    </li>
                                )

                            })}
                        </Infiniteloading>
                    </ul>

                </div>
            </main>

        </div>
    )
}

export default index;