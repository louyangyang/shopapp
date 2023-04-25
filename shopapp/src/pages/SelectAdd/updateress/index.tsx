import React, { useState, useEffect } from 'react'
import Style from './index.module.less'
import { Icon } from '@nutui/nutui-react';
import { Notification } from 'grommet';
import '@nutui/nutui-react/dist/style.css'
import { createBrowserHistory } from 'history';
import { useNavigate, useLocation } from 'react-router-dom'
// 


import { store } from '@/store'
//引入请求
import { updateAddress } from '@/api/use'
import Froms from './from'
const index: React.FC = () => {
    const [visible, setVisible]: any = useState(false);
    const [list, setList]: any = useState([])
    let [mesage, setmesage] = useState('修改成功')
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

    //编辑地址
    //修改地址
    const add = async (a: any) => {
        
        console.log(a)
        const result: any = await updateAddress({...a })
        console.log(result)
        if (result.code == 200) {
            // timeNotify(mesage)
            setVisible(true);
            setmesage('修改成功')
            history.go(-1)

        }
    }


    //定义地址列表
    //

    const location = useLocation()
    const [uset, setuset] = useState(location.state || [])
    useEffect(() => {
        console.log(location)
        gettype(
            'normal'
        )

        // console.log(uset)
    }, [])
    useEffect(() => {

    },[])
    return (
        <div className={Style.updateAddress} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <Icon name="rect-left"></Icon>

                </div>
                <span>修改地址</span>
                <span></span>

            </nav>
            <main>
                <div>
                    <div className={Style.ul}>
                        <Froms datas={uset} addlist={add}></Froms>
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