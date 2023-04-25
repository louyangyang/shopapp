import { Box, DropButton } from 'grommet'
import { CodeSandbox, FormPrevious, HomeRounded, Menu, More, Shop, User } from 'grommet-icons'
import { useNavigate, NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { Tabbar, TabbarItem } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';
import x1 from './tu01.jpg'
import React, { useEffect,useState } from 'react'
import style from './index.module.less'
import { getproduct,getImg } from '@/api/1'
import LazyLoad from 'react-lazyload';
function index() {
    let Navigate = useNavigate()
    const history = createBrowserHistory()

    const go = () => {

        history.go(-1)
    }
    const [open, setOpen] = React.useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
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
    const DropContent = ({ onClose }: any) => (

        <div className={style.li}>

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
    let [msg, setImg]: any = useState([]);
const name1=(a:any)=>{
    getproduct({ parent_name: a }).then((list: any) => {
        let a = list.res
        console.log(list)
        msg.splice(0)
        a.forEach((element: any) => {
            setImg((list: any) => [...list, element])
            msg.push(element)
        });
        setImg([...msg])
    })
}
    const tablelist = (_chird: React.ReactElement<any, string | React.JSXElementConstructor<any>>, _id: number) => {
        var c=['儿童专区','配件','鞋类','服饰']
                    if(_id==1){
                        let b=c[Math.floor(Math.random()*c.length)]
                        name1(b)
                    }
                    if(_id==2){
        let b=c[Math.floor(Math.random()*c.length)]

                        name1(b)
                    }
    }
    const details = (id: any): any => {
        // console.log(id);
        Navigate(`/shoping/details?id=${id}`)
    }
    useEffect((): any => {
        getImg({ parent_name:"鞋类",end:2}).then((list: any) => {
            msg = list
            console.log("!!!!!", list);

            setImg(msg)
            // console.log(msg);
        })
    }, [])
    return (
        <div className={style['stroll']}>
            {/* 头部 */}
            <nav>
                <div className={style.icon} onClick={() => go()} >
                    <FormPrevious />
                    {/* <span>注册</span> */}

                </div>
                <span>个人中心</span>
                <div className={style.li}>

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
            <div className={style['imgs']}>
                <img src={x1} alt="" />
            </div>
            <div className={style['box']}>
                <Tabbar onSwitch={(child, idx) => { tablelist(child, idx) }}>
                    <TabbarItem tabTitle="04月12日" />
                    <TabbarItem tabTitle="本周上新" />
                    <TabbarItem tabTitle="销量" />
                    <TabbarItem tabTitle="筛选" />
                </Tabbar>

                <div className={style.Shoping}>
                    <div>
                        <ul>
                        {
                                msg.map((item: any, i: any) => (

                                    <li key={item.id} onClick={() => details(item.id)}>
                                        <div>
                                    <LazyLoad height={200} placeholder={<img src={''} />}>
                                        <img src={item.img} alt="Real Image" />
                                    </LazyLoad>
                                </div>
                                 
                                        <div className={style.shopli}><p>{item.title}</p></div>
                                        <div className={style.shopli}>
                                            <div>
                                                <span style={{ color: 'red' }}>￥{item.price} </span>
                                                <span style={{ color: '#b0b0b0', textDecoration: "line-through" }}>￥{item.special_price}</span>
                                            </div>
                                            <span>  <More></More> </span>
                                        </div>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index