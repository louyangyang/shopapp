import style from './index.module.less'
import { Tabs } from '@nutui/nutui-react';
import { NoticeBar } from '@nutui/nutui-react'
import '@nutui/nutui-react/dist/style.css'
import React, { useState } from "react";
import img from '@/pages/myOrder/image/default.png'
interface props {
    toclick?: any
}
const index = (props: props) => {

    return (
        <div className={style.orderdefult}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>

                <p>您还没有订单</p>
            </div>
            <div>
                <button>
                    随便逛逛
                </button>
            </div>
        </div>
    );


}
export default index
