import style from './index.module.less'
import React, { useState } from "react";

import { Input } from '@nutui/nutui-react';
interface props {
    toclick?: any
}
const index = (props: props) => {
    let [value, setvalue] = useState('')
    let { toclick } = props
    const change = (value: string) => {
        setvalue(value)
    }

    const clickRightIcon = () => {
        toclick(value)
    }
    return (
        <div className={style.servebuttom}>
            <Input

                clearable
                onChange={change}

            />
            <button onClick={clickRightIcon}>发送</button>
        </div>
    );


}
export default index
