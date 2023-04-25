import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Icon, Menu, MenuItem, } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';
import { getProduct } from '@/api/Home';
import styles from './index.module.less';


const index: React.FC = () => {
    const history = createBrowserHistory();
    // 返回上一级路由
    const returnPage = () => {
        history.go(-1);
    }
    // 开关二级菜单跳转
    let [flag, setflag] = useState(true)
    const menuChange = (value: boolean) => {
        setflag(value);
    }

    // 二级菜单路由跳转
    const push = useNavigate();
    const [menuList, stemenuList]: any = useState([
        {
            title: '主页',
            icon: 'home'
        },
        {
            title: '分类',
            icon: 'more-x'
        },
        {
            title: '购物车',
            icon: 'cart2'
        },
        {
            title: '我的',
            icon: 'my2'
        },
    ])
    const menuType = (e: any) => {
        // setflag(!flag);
        if (e.innerHTML === '主页') {
            push('/home');
        } else if (e.innerHTML === '分类') {
            push('/classification');
        } else if (e.innerHTML === '购物车') {
            push('/shoping');
        } else if (e.innerHTML === '我的') {
            push('/user');
        }
    }

    let [Shoplist, setShoplist]: any = useState([]);
    let [menu, setmenu] = useState(true)



    // 获取路由数据
    const location = useLocation();
    const locationList = () => {
        if (location.state.name != '鞋类' &&
            location.state.name != '服饰' &&
            location.state.name != '配件' &&
            location.state.name != '儿童专区') {
            menu = true;
            setmenu(menu)
            let data = {
                parent_name: '服饰'
            }
            getProduct(data).then((data: any) => {
                console.log(data);
                let { code, message, res } = data;
                if (code === 200) {
                    Shoplist = res;
                    setShoplist(Shoplist);
                } else {
                    console.log(message);
                }

            })
        } else {
            menu = false;
            setmenu(menu);
            let data = {
                parent_name: location.state.name
            }
            getProduct(data).then((data: any) => {
                console.log(data);
                let { code, message, res } = data;
                if (code === 200) {
                    Shoplist = res
                    setShoplist(Shoplist);
                } else {
                    console.log(message);
                }
            })
        }
    }
    useEffect(() => {
        locationList();

    }, [])

    // 菜单列表
    const [options] = useState([
        { text: '全部商品', value: 0 },
    ])
    const [options1] = useState([
        { text: '默认排序', value: 'a' },
        { text: '价格排序', value: 'b' },
        { text: '销量排序', value: 'c' },
    ])



    const maopao = (val: any) => {

        let arr = Shoplist;
        if (val.text === '价格排序') {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j].price < arr[j + 1].price) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            Shoplist = [...arr];
            setShoplist(Shoplist);
        } else if (val.text === '默认排序') {
            locationList();
        }
    }
    // 跳转详情页

    const details = (id: any) => {
        console.log(id)
        push('/shoping/details?id=' + id)
    }

    return (
        <div className={styles.box}>
            {/* 顶部菜单 */}
            <div className={styles.top}>

                <div className={styles.left} onClick={(e) => { returnPage() }}>
                    <Icon name="rect-left"></Icon>
                </div>

                <div className={styles.center} >
                    <span>
                        搜索
                    </span>
                </div>

                <div className={styles.right} onClick={() => { menuChange(!flag) }}>
                    <Icon name="category" />
                </div>
            </div>
            {/* 二级菜单 */}
            <div className={flag ? styles.register : styles.rightTwo}>
                <div>
                    <ul>
                        {
                            menuList.map((item: any) => {
                                return (
                                    <li key={item.icon}>
                                        <Icon name={item.icon} />
                                        <span onClick={(e) => { menuType(e.target) }}>{item.title}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* 菜单 */}
            <div className={menu ? styles['menu-none'] : styles.menu}>
                <div className="demo full">
                    <Menu activeColor="black">
                        <MenuItem options={options} value={0} />
                        <MenuItem options={options1} value="a" onChange={(e) => { maopao(e) }} />
                    </Menu>
                </div>
            </div>

            <div className={menu ? styles.noFind : styles['menu-none']}>
                <p>抱歉，没有找到相关商品，为你推荐以下热门商品</p>
            </div>


            {/*遍历的数据列表 */}
            <div className={styles['van-tab__pane']}>
                <ul className={styles.list}>
                    {
                        Shoplist.map((item: any, index: number) => {
                            return (
                                <li key={item.img} onClick={() => { details(item.id) }}>
                                    <img src={item.img} />
                                    <h3>{item.title}</h3>
                                    <p className={styles.price}>
                                        <b className={styles['price_b']}>
                                            <span>￥{item.special_price}</span>
                                            <span>￥{item.price}</span>
                                        </b>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div >

        </div>
    );
};

export default index;