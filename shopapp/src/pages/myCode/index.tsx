import React, { useState,useEffect } from 'react'
import Style from './index.module.less'
import {
    FormPrevious,
} from 'grommet-icons';

import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom'
//底部
// import Btttom from './butom'
import img from './image/qrcode_stride.fun.png'
import {store} from '@/store'
const index: React.FC = () => {
    let [lin, getLin] = useState(false)
    let push = useNavigate()
    const history = createBrowserHistory()
    const go = () => {

        history.go(-1)
    }


    const complete = () => {
        if (lin == true) {
            getLin(false)
        }
    }
    const stores=store.getState()
 
    useEffect(() => {
        const stores=store.getState()
    }, [])
    return (
        <div className={Style.myCode} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />

                </div>
                <span>我的二维码</span>
                <span></span>

            </nav>
            <main>
                <div className={Style.buttom}>
                  <p>
                    {stores.user.user.name}
                  </p>
                  <p>{stores.user.user.emil}</p>
                  <img src={img} alt="" />
                </div>
            </main>

        </div>
    )
}

export default index;