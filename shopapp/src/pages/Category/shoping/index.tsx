import React, { useEffect, useState } from 'react';
import Style from './index.module.less'
import {

    More,

} from 'grommet-icons';

import { createBrowserHistory } from 'history';

import { useNavigate, useLocation } from 'react-router-dom'
//导入库
import { store } from '@/store'
import img from './image/use.jpg'

//导入请求
import { getWares, getTypeOneList } from '@/api/http'
//导入懒加载
import LazyLoad from 'react-lazyload';
//
import { Cell, Infiniteloading } from '@nutui/nutui-react';
import { strictEqual } from 'assert';

// const icons: any = [<HomeRounded />, <CodeSandbox />, <Shop />, <User />]
// const icons2: any = [<CreditCard />, <Package />, <Deliver />,]
// // 



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

}
const index: React.FC = () => {
    const location = useLocation()
    console.log(location)
    let [list, setlist]: any = useState([])

    let [show, getshow] = useState(false)

    let [lin, getLin] = useState(false)


    const [visible, setVisible]: any = useState(false);
    let Navigate = useNavigate()
    const history = createBrowserHistory()


    const complete = () => {
        if (lin == true) {
            getLin(false)
        }
    }
    const [open, setOpen] = React.useState(false);

    const stores: any = store.getState()
    //控制禁止

    //滚动加载
    const [defultList, setDefultList] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        console.log(list.length)
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


        console.log(list[0])
        // if (list.length) {

        // }

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
    //判断是否已经登录 
    useEffect(() => {
        // console.log(location)
        let { state } = location
        const stores: any = store.getState()
        // console.log(stores.user.user.token)
        if (stores.user.user.token) {
            getshow(true)
        }

        getWares({ name: state.name }).then((res: any) => {
            // setlist(res.res)
            console.log(res)
            let a = res.data
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

    return (
        <div className={Style.shoping} onClick={e => complete()}>

            <div className={Style.Shoping}>
                <ul id="scroll" style={InfiniteUlStyle}>
                    <Infiniteloading
                        containerId="scroll"
                        useWindow={true}
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

        </div>
    )
}

export default index;