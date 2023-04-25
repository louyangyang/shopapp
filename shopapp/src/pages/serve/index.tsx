import React, { useState } from 'react'
import Style from './index.module.less'
import {
    FormPrevious,
} from 'grommet-icons';

import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom'
//底部
import Btttom from './butom'


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
    const click = (e:any) => {
        console.log(e)
    }

    return (
        <div className={Style.myorder} onClick={e => complete()}>
            <nav>
                <div className={Style.icon} onClick={() => go()} >
                    <FormPrevious />

                </div>
                <span>SKR线上</span>
                <span></span>
            </nav>
            <main>
                <div className={Style.buttom}>
                    <Btttom toclick={click}></Btttom>
                </div>
            </main>

        </div>
    )
}

export default index;