import style from './index.module.less'
import '@nutui/nutui-react/dist/style.css'
import React, { useState, useEffect } from "react";
import { Icon } from '@nutui/nutui-react';
interface props {
    list?: any,
    edit?: any,
    del?: any
}
const index: React.FC<props> = (props: props) => {
    let [data, setdata]: any = useState([])
    let { list, del, edit } = props
    // console.log(list)
    // setdata(list)
    useEffect(() => {
        // let { list,del,edit } = props
        if (list.length > 0) {
           data.splice(0)
            list.forEach((t: any) => {
                data.push(t)
            });
            setdata([...data])
        }
        // console.log(data)
    }, [list])
    const editlist = (item: any) => {
        edit(item)
    }
    const deletlist = (id: number) => {
        del(id)
    }
    return (
        <div className={style.selectli}>
            <ul>
                {data.map((item: any, i: number) => {
                    return (
                        <li key={i}>
                            <div>
                                <p>
                                    <span>{item.name}</span>
                                    <span>{item.tel}</span>
                                </p>
                                <p>
                                    {item.address}
                                </p>
                                <p>
                                    <span onClick={() => editlist(item)}>  <Icon size="24" color="#111" name="edit" /></span>
                                    <span onClick={() => deletlist(item.id)}> <Icon size="24" color="#111" name="del" /></span>
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );


}
export default index
