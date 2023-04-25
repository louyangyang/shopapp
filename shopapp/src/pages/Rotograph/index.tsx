import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styles from './index.module.less';
import { getWares } from '@/api/Home';

const index: React.FC = () => {
    let [expect, steExpect] = useState(true)
    let [params, setParams]: any = useState({});
    let [swiperImg, setSwiperImg] = useState('');
    const location = useLocation();
    const push = useNavigate();
    useEffect(() => {
        console.log(location.state, 'useLocation');
        let { params, swiperImg } = location.state;
        let parli = JSON.parse(params);
        setParams(parli);
        setSwiperImg(swiperImg);
        getWareschenage(parli);
    }, []);

    // 为你推荐请求
    let [waresList, setWaresList] = useState([])
    const getWareschenage = async (val: any) => {
        console.log(val, 'params');
        let data = {
            name: val.name,
            series: val.series
        };
        let res: any = await getWares(data);
        let { code, data: list, message } = res;
        if (code === 200) {
            if (list.length < 0) {
                steExpect(false);
            }
            waresList = list;
            setWaresList(waresList);
        } else {
            console.log(message);
        }
    }

    // 跳转详情页
    const details = (id: any) => {
        console.log(id)
        push('/shoping/details?id=' + id)
    }
    return (
        <div className={styles.secondary}>
            <div className={styles.secon_top}>
                <p className={styles.title}>
                    <span>{params.name}_{params.series}</span>
                    <span>Home / SeconDary</span>
                </p>
            </div>
            <div className={styles.content}>
                <img src={swiperImg} />
            </div>
            <div className={styles.footer}>
                <h2>为你推荐</h2>
            </div>
            <div className={expect ? styles.expectNo : styles.expect}>
                <p>暂无更多商品，请敬请期待！</p>
            </div>

            <div className={styles.secon_con}>
                {
                    waresList.map((item: any) => {
                        return (
                            <div className={styles['van-card']} key={item.id} onClick={() => { details(item.id) }}
                            >
                                <div className={styles["van-card__header"]}>
                                    <a className={styles["van-card__thumb"]}>
                                        <div className={styles["van-image"]} >
                                            <img src={item.img} className={styles["van-image__img"]} />
                                        </div>
                                    </a>
                                    <div className={styles["van-card__content"]}>
                                        <div >
                                            <div className={styles["van-card__title"]}>{item.title}
                                            </div>
                                            <div className={styles["van-card__desc"]}>www.stride.fun
                                            </div>
                                        </div>
                                        <div className={styles["van-card__bottom"]}>
                                            <div className={styles["van-card__price"]}><div >
                                                <span className={styles["van-card__price-currency"]}>¥</span>
                                                <span className={styles["van-card__price-integer"]}>{item.special_price}</span>.<span className={styles["van-card__price-decimal"]}>00</span>
                                            </div>
                                            </div>
                                            <div className={styles["van-card__origin-price"]}>¥ {item.price}.00</div>
                                            <div className={styles["van-card__num"]}>x{item.store_id}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default index;