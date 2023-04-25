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
import { addAddress } from '@/api/use'
import List from './from'
const index: React.FC = () => {
    const [visible, setVisible]: any = useState(false);
    const [list, setList]: any = useState([])
    let [mesage, setmesage] = useState('添加成功')
    let [type, gettype]: any = useState('normal')
    let [lin, getLin] = useState(false)

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

    //编辑地址
    //添加地址
    const add = async (a: any) => {
        const result: any = await addAddress({ ...a })
        // console.log(result)
        if (result.code == 200) {
            // timeNotify(mesage)
            setVisible(true);
            setmesage('添加成功')
            history.go(-1)
            
        }
    }


    //定义地址列表
    //

    useEffect(() => {
        gettype(
            'normal'
        )

    }, [])
    useEffect(() => {

    })
    return (
        <div className={Style.address} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <Icon name="rect-left"></Icon>

                </div>
                <span>添加地址</span>
                <span></span>

            </nav>
            <main>
                <div>
                    <div className={Style.ul}>
                        <List addlist={add}></List>
                    </div>
                    {visible && (
                        <Notification
                            toast
                            status={type}
                            message={mesage}
                            time={800}
                        />
                    )}

                </div>
            </main>

        </div>
    )
}

export default index;