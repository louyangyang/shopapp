import style from './index.module.less'
import '@nutui/nutui-react/dist/style.css'
import React, { useState, useEffect } from "react";
import { Form, Input, Switch, Cascader } from '@nutui/nutui-react';
import { store } from '@/store'
import city from '@/assets/area'
import { useLocation } from 'react-router-dom'
interface props {
    addlist?: any,
    datas?: any
}
const index: React.FC<props> = (props: props) => {
    // console.log(city)
    let [data, setdata]: any = useState([])
    let { addlist, datas } = props

    const [state, setState] = useState({
        readonly: '',
        disabled: '',
    })
    const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
    const [value1, setValue1]: any = useState([])
    const [value, setValue]: any = useState('')

    const change1 = (value: any, path: any) => {
        // console.log('onChange', value, path)

        setValue1(value)
        // setValue1(a)
        // console.log(value, value1)
    }

    const licKey = () => {
        // console.log(1)
        setIsVisibleDemo1(true)
    }
    useEffect(() => {
        if (value1) {
            // console.log(value1)
            let a = ''
            value1.forEach((t: any, i: number) => {
                if (i > 0) {

                    a = a + '/' + t
                } else {
                    a = a + t
                }
            });
            setValue(a)

        }
    }, [value1])

    useEffect(() => {
        if (datas) {

            let arr = datas.address.split('-')
            // value.splice(0)
            let a = ''
            arr.forEach((t: any, i: number) => {
                if (i == 0) {
                    a = t
                }
                if (i < arr.length - 1 && i != 0) {
                    a = a + '/' + t
                }
            });
            // console.log(a)
            setValue(a)
            // console.log(setValue(a))
        }
        // console.log(1)
        // setValue()
    }, [datas])

    let [obj, setobj] = useState({
        name: datas.name,
        tel: datas.tel,
        address2: datas.address.split('-')[datas.address.split('-').length - 1] == 'undefined' ? '' : datas.address.split('-')[datas.address.split('-').length - 1],
        prime: datas.prime == 0 ? false : true
    })
    const location = useLocation()
    const submitSucceed = (obj: any) => {
        let id = location.state.id
        // console.log(obj)

        if (obj.name && obj.tel) {

            // console.log(obj)
            let val = value.split('/')
            let p = ''
            // console.log(val)
            if (val.length > 1) {

                val.forEach((element: any, i: number) => {
                    if (i < val.length - 1) {

                        p = p + element + '-'
                    } else {
                        p = p + element
                    }
                });
            } else {
                window.alert('请输入地址')
            }
            // console.log(!obj.address2, p)
            const stores = store.getState()

            let a = {
                id: id,
                name: obj.name,
                tel: obj.tel,
                address: p + (!obj.address2 ? '' : '-' + obj.address2),
                prime: obj.prime ? 1 : 0
            }
            // console.log(a)
            addlist(a)
        } else {
            window.alert('请输入姓名和电话')
        }
    }
    return (
        <div className={style.updataForm}>

            <Form labelPosition={'left'} onFinish={(obj) => submitSucceed(obj)}>
                <Form.Item label='姓名' name="name">
                    <Input
                        className="nut-input-text"
                        placeholder='请输入姓名'
                        type="text"
                        defaultValue={obj.name}
                    />
                </Form.Item>

                <Form.Item label='电话' name="tel">
                    <Input
                        className="nut-input-text"
                        placeholder='收货电话'
                        type="text"
                        defaultValue={obj.tel}
                    />
                </Form.Item>
                <Form.Item label='地址' name="address"  >
                    <>
                        <Input
                            className="nut-input-text"
                            placeholder='请选择/省/市/区'
                            type="text"
                            disabled
                            // defaultValue={state.readonly}
                            defaultValue={value}
                            onClick={() => licKey()}

                        />
                    </>
                </Form.Item>
                <Form.Item label='详细地址' name="address2">
                    <Input
                        className="nut-input-text"
                        placeholder='街道门牌号等信息'
                        type="text"
                        defaultValue={obj.address2}
                    />
                </Form.Item>


                <div className={style.off}>
                    <div>

                        <span>是否要设为默认收获地址</span>
                        <span>
                            <Form.Item name="prime">
                                <Switch checked={obj.prime} />
                            </Form.Item>
                            {/* <Switch /> */}
                        </span>

                    </div>


                    <button type='submit'>保存</button>

                </div>



            </Form>

            <>
                <Cascader
                    visible={isVisibleDemo1}
                    title="地址选择"
                    options={city}
                    closeable
                    value={value1}
                    onClose={() => { setIsVisibleDemo1(false) }}
                    onChange={change1}
                />

            </>

        </div >
    );


}
export default index
