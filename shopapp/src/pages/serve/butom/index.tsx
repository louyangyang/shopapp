import style from './index.module.less'
import React, { useState } from "react";

import { Input } from '@nutui/nutui-react';
interface props {
    toclick?: any
}
const index = (props: props) => {
    let [value, setvalue] = useState('')
    let { toclick } = props
    const change = (e:any) => {
        // console.log(e.target.value)
        setvalue(e.target.value)
    }

    const clickRightIcon = () => {
        toclick(value)
    }
    return (
        <div className={style.servebuttom}>
            <input type="text" onChange={(e)=>change(e)} />
            <button onClick={clickRightIcon}>发送</button>
        </div>
    );


}
export default index
