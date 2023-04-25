import React, { useState, useEffect } from 'react'
import Style from './index.module.less'
import {
    FormPrevious,
} from 'grommet-icons';
import { getWares } from '@/api/http'
import { createBrowserHistory } from 'history';
import { useNavigate, useLocation } from 'react-router-dom'
//底部
import Shpoing from './shoping'


const index: React.FC = () => {
    let [lin, getLin] = useState(false)
    const location = useLocation()
    useEffect(()=>{
        // console.log(location)
    },[])
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
    const click = (e: any) => {
        console.log(e)
    }

    return (
        <div className={Style.Category} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />

                </div>
                <span>商品分类</span>
                <span></span>

            </nav>
            <main>
                <div className={Style.buttom}>
                    <Shpoing></Shpoing>
                </div>
            </main>

        </div>
    )
}

export default index;