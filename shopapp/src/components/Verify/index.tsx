import React, { useState, useEffect } from 'react'
import {  RotateRight } from 'grommet-icons';
import Style from './index.module.less'
import { getTypeOneList } from '@/api/http'

interface item {
    brand_id?: number
    category_id?: number
    create_time?: null
    id?: number,
    img?: string
}

interface props {
    onhandle?: any,
    
}

const index = (props: props) => {
    let [data, getData] = useState([])
    let [list, getList] = useState([])
    let patter = [Style.zero, Style.ninety, Style.dora, Style.seven]

    useEffect(() => {
        getTypeOneList({ parent_name: '鞋类' }).then((res: any) => {
            getList(res.res)
            let data: any = []
            if (res.code == 200) {
                for (let i = 0; i < 4; i++) {
                    let index = Math.floor(Math.random() * 75)
                    data.push(res.res[index])
                }
            }
            getData(data)
        })
    }, [])

    const random = () => {
        let data: any = []
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * 75)
            data.push(list[index])
        }
        getData(data)
       props.onhandle(true)
    }

    const spin = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        let lis = document.querySelectorAll('ul li')

        if (e.currentTarget.className == patter[0]) {
            e.currentTarget.className = patter[1]
        } else if (e.currentTarget.className == patter[1]) {
            e.currentTarget.className = patter[2]
        } else if (e.currentTarget.className == patter[2]) {
            e.currentTarget.className = patter[3]
        } else if (e.currentTarget.className = patter[3]) {
            e.currentTarget.className = patter[0]
        }

        if (lis[0].className === patter[0] && lis[1].className === patter[0] && lis[2].className === patter[0] && lis[3].className === patter[0]) {
            props.onhandle(false)
        } else {
            props.onhandle(true)
        }
    }

    return (
        <div className={Style.sect}>
            <div>
                <p>请将下列图片点击翻转至正向朝上</p>
                <span onClick={e => random()}>换一批  <RotateRight /></span>
            </div>
            <ul>
                {
                    data.map((item: item, index: number) => (
                        <li key={index} onClick={e => spin(e)} className={[patter[index]].join(' ')}>
                            <img src={item.img} alt="" />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default index