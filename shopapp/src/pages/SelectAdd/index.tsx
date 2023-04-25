import React, { useState, useEffect } from 'react'
import Style from './index.module.less'
import { Icon } from '@nutui/nutui-react';
import { Notification } from 'grommet';
import '@nutui/nutui-react/dist/style.css'
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom'
// 

import { store } from '@/store'
//引入请求
import { getAddress, deleteAddress } from '@/api/use'
import List from './li'
const index: React.FC = () => {
    const [visible, setVisible]: any = useState(false);
    const [list, setList]: any = useState([])
    let [mesage, setmesage] = useState('删除成功')
    let [type, gettype]: any = useState('normal')
    let [lin, getLin] = useState(false)
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
    const stores: any = store.getState()
    //
    // console.log(stores)
    //获取地址列表
    const get = async () => {
        const stores = store.getState()
        // let a = stores.user.user.id
        const result = await getAddress({ customer_id: stores.user.user.id })
        let a: any = result.data
        // console.log(a)
        if (a) {

            if (a.length > 0) {

                list.splice(0)

                a.forEach((item: any) => {
                    list.push(item)
                });
                setList([...list])
                // console.log(list)
            }
        }
    }
    //编辑地址
    //删除地址
    const deltt = async (id: any) => {
        const result: any = await deleteAddress({ id: id })
        console.log(result)
        if (result.code == 200) {
            // timeNotify(mesage)
            setVisible(true);
            setmesage('删除成功')
            get()
        }
    }
    const del = (id: number) => {
        deltt(id)
    }
    const edit = (item: any) => {
        console.log(item)
        Navigate('/updateAddress', {
            state: item
        })
    }
    //定义地址列表
    //

    useEffect(() => {
        gettype(
            'normal'
        )

        get()

    }, [])
    useEffect(() => {

    })
    return (
        <div className={Style.selectAdd} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <Icon name="rect-left"></Icon>

                </div>
                <span>选择地址</span>
                <span></span>

            </nav>
            <main>
                <div>
                    <div className={Style.ul}>
                        {list ? <List del={del} edit={edit} list={list}></List> : null}
                    </div>
                    {visible && (
                        <Notification
                            toast
                            status={type}
                            message={mesage}
                            time={800}
                        />
                    )}
                    <div className={Style.buttom}>
                        <button onClick={() => Navigate('/addAddress')}>添加新地址</button>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default index;