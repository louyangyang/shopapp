
import React, { useEffect, useState, useRef } from 'react';
import { FormPrevious, Train, More } from 'grommet-icons';
import { useNavigate } from 'react-router-dom'
import style from "./index.module.less"
import { getproduct, getShopCar, addShopCar, deleteShopCar, updataShopCar, addOrder } from '@/api/1'
import LazyLoad from 'react-lazyload';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import placeho from "../../assets/lazy.jpg"
import { store } from '@/store'
import { Button, Cell, Checkbox, InputNumber, Swipe } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';
import { FloatButton } from 'antd';

const Shoping: React.FC = () => {
    const store1 = store.getState()
    let [isshow, setisshow]: any = React.useState(true);
    useEffect((): any => {

        if (store1.user.user.name) {
            setisshow(false)

        }
    }, [])

    // 购物车加减
    const stop = (e: any) => {
        e.stopPropagation();

    }
    const updata = async (num1: any, id1: any) => {
        let a = await updataShopCar({ num: num1, id: id1 });
        console.log('aaaaaaaa', a);
        addgetShopCar()
    }
    const onadd = (item: any) => {
        let num
        num = item.num += 1
        updata(num, item.id)
    }

    const onReduce = (item: any) => {

        let num: any;
        if (item.num > 1) {
            num = item.num -= 1

            updata(num, item.id)

        }
        //    number6()

        // addShopList(item1)



    }
    const dis = (istrue: any) => {
        let a = false;

        number8.forEach((t: number) => {
            if (istrue == t - 1) {

                a = true
            }

        });


        return a

    }
    const single = (a: any, item: any) => {

    }
    const [number8, setnumber8]: any = useState([])


    const [checkboxgroup2, setCheckboxgroup2]: any = useState([])
    const checkboxgroup2Ref = useRef(null)
    const [checkbox1, setCheckbox1] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const navgate = useNavigate()
    let [msg, setMsg]: any = React.useState([]);
    //返回首页
    const go = () => {
        navgate(`/home`)

    }

    //单选结算总价

    useEffect(() => {

        number6()
    }, [number8])

    // 计算总价
    const number6 = () => {
        let a = 0
        number8.forEach((t: number) => {
            let b = shop.filter((item: any, i: number) => i == t - 1)[0]
            a += b.num * b.price

        });
        // console.log(1)
        return a

    }
    // 跳转登录
    const login = () => {
        navgate(`/login`)
    }
    // 跳转商品详情
    const details = (id: any): any => {

        navgate(`/shoping/details?id=${id}`)
    }
    // 谁便逛逛跳转
    const stroll = () => {
        navgate(`/stroll`)
    }
    let [shop, setshop]: any = useState([])
    useEffect((): any => {
        console.log(1)
        addgetShopCar()
    }, [])
    // let [pric,setpric]:any=useState()
    const addgetShopCar = async () => {
        //获取购物车
        await getShopCar({ customer_id: store1.user.user.id }).then((list: any) => {

            shop = list.data || []

            setshop(shop)

        })
    }
    // 删除购物车
    const del = async (item: any, index: any) => {

        await deleteShopCar({ id: item.id });
        addgetShopCar()


    }
    // 添加订单
    const btn = async () => {
        let b: any;
        let arr: any = []
        number8.forEach((t: number) => {
            b = shop.filter((item: any, i: number) => i == t - 1)[0]
            if (b) {
                arr.push({ order_id: b.sku_id, sku_id: b.sku_id, price: b.price, actual_price: b.special_price, num: b.num })
            }
        });
        console.log(arr, '111');
    
        let data = {
            code: "lazypig" + new Date().getTime(),
            store_id: b.store_id,
            customer_id: b.customer_id,
            money: number6(),

            skus: JSON.stringify(arr)
        }
        console.log('xuxu', data.skus, data);
        console.log('xuxu', JSON.parse(data.skus));

        let c:any = await addOrder(data)
        if(c.code==200){
        navgate(`/myOrder?c1`)

        }
        console.log('ccccccccc', c,);

    }

    useEffect((): any => {
        getproduct({ parent_name: '配件' }).then((list: any) => {

            msg = list.res;

            setMsg(msg)

        })
        addgetShopCar()
    }, [])

    return (
        <div className={style.box}>
            <div className={style['car-top']}>
                <span onClick={() => { go() }}><FormPrevious size='large'></FormPrevious></span>

                <span>购物车</span>
                <span></span>
            </div>

            <div className={style['car-login']} style={{ display: !isshow ? 'none' : '' }}>
                <p>
                    <span>请您先</span>
                    <button onClick={() => login()}>登录</button>
                    <span>可以同步电脑和手机的商品</span>
                </p>
                <span> <Train size="large"></Train></span>
                <span>你的购物车毫无商品</span>
                <button onClick={() => { stroll() }}>随便逛逛</button>
            </div>

            <div style={{ display: isshow ? 'none' : 'block' }} className={style['checkout']}>

                <Checkbox.Group
                    ref={checkboxgroup2Ref}
                    direction="horizontal"
                    checkedValue={checkboxgroup2}
                    onChange={(value: any) => {


                        setnumber8([...value])
                        console.log(value.length, shop.length, shop[value - 1])
                        if (value.length === shop.length) {
                            console.log(1)
                            setIndeterminate(false)
                            setCheckbox1(true)
                        } else if (value.length && value.length < msg.length) {

                            setIndeterminate(true)
                            setCheckbox1(true)
                        } else {
                            setCheckbox1(false)
                        }
                    }}
                >
                    {

                        shop.map((item: any, index: any) => {
                            return (

                                <Checkbox key={item.id} label={index + 1} checked={false} onChange={(a: any, n) => { single(a, item) }}>
                                    <Swipe
                                        disabled={dis(index)}

                                        onActionClick={() => del(item, index)}
                                        rightAction={
                                            <Button type="primary" shape="square">
                                                删除
                                            </Button>
                                        }
                                        key={item.id} >

                                        <Cell title="1" roundRadius={0} >
                                            <ul>

                                                <li className={style['addshoping']}>
                                                    <div className={style['addshoping-1']} >
                                                        <div className={style['left']}>
                                                            <img src={item.img} alt="" />
                                                        </div>
                                                        <div className={style['right']}>
                                                            <div className={style['right-1']}> <p>{item.title}</p>
                                                                <p>{item.params}</p>
                                                            </div>
                                                            <div className={style['right-2']}>
                                                                <div>
                                                                    <p>￥{item.price}</p>

                                                                </div>
                                                                <div onClick={(e) => { stop(e) }}>

                                                                    <InputNumber modelValue={item.num
                                                                    }
                                                                        onAdd={() => {
                                                                            onadd(item)
                                                                        }}
                                                                        onReduce={() => {
                                                                            onReduce(item)
                                                                        }}
                                                                    />
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        </Cell>
                                    </Swipe>
                                </Checkbox>
                            )
                        })
                    }
                </Checkbox.Group>



            </div>
            {/* 优选新品 */}
            <div className={style.Shoping}>
                <p> 为你优选新品</p>
                <div>
                    <ul>
                        {
                            msg.map((item: any, i: any) => (

                                <li key={item.id} onClick={() => details(item.id)}>
                                    <div>
                                        <LazyLoad height={200} placeholder={<img src={placeho} />}>
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

            <div className={style['shop-foot']}>
                <div style={{ width: '60%' }}>
                    <Checkbox
                        checked={checkbox1}
                        indeterminate={indeterminate}
                        onChange={(state, label): any => {
                            if (state) {
                                ;
                                setIndeterminate(false)
                                let a: any = []
                                shop.forEach((t: any, i: number) => {
                                    a.push(i + 1)
                                });

                                setnumber8([...a])

                            } else {
                                let a: any = []
                                setnumber8([...a])
                            }; (checkboxgroup2Ref.current as any).toggleAll(state)



                        }}
                    >
                        全选
                    </Checkbox>
                </div>
                <div className={style['shop-foot-1']}>
                    <p>合计：<span>￥{number6()}</span></p>
                    <button onClick={() => { btn() }}>提交订单</button>
                </div>
            </div>
            {/* 返回顶部 */}

            <div>
                <FloatButton.Group shape="circle" style={{ right: 10, bottom: 70 }}>
                    <FloatButton.BackTop />
                </FloatButton.Group>
            </div>
        </div >
    )
}

// #endregion

export default Shoping;