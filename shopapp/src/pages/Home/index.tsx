import React, { useEffect, useState } from 'react'
import { Menu, FloatButton, Carousel } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from 'antd';
import styles from './index.module.less';
import { Search } from 'grommet-icons';
import { getRotograph, getParentName, getProduct, } from '@/api/Home';
import { Swiper, SwiperItem } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';


const index: React.FC = () => {

  // 跳转路由
  const push = useNavigate();

  // 轮播图数组
  let [imgsList, setingsList] = useState([]);

  // 全部分类 数组
  let [icons_wrapper, seticons_wrapper] = useState([
    {
      img: `//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01ae835d5ae6d9502818daf351ad2db6cf.png?imageView2/2/w/98/h/98/q/60`,
      linkbar: '新品专区'
    },
    {
      img: `//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/011004f5a04caaf9c18d7848049a75981e.png?imageView2/2/w/98/h/98/q/60`,
      linkbar: '人气搭配'
    },
    {
      img: `//img11.static.yhbimg.com/yhb-img01/2017/02/03/09/01d35157ab5942ea40b4f08a11c1680a17.png?imageView2/2/w/98/h/98/q/60`,
      linkbar: '折扣专区'
    },
    {
      img: `//img11.static.yhbimg.com/yhb-img01/2019/12/06/15/017563081b437d62c45c914a983354eb89.png?imageView2/2/w/98/h/98/q/60`,
      linkbar: '有货拼团'
    },
  ]);
  let [icons, seticons] = useState([
    {
      img: `//img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01b097e06ac9fc78bbcc3d3e0dfbe01fcc.png?imageView2/2/w/98/h/98/q/60`,
      linkbar: '全部分类'
    }
  ])
  // 服饰，鞋类 请求数据接收数组
  let [ParentList, setParentList] = useState([]);

  // 鞋类 服饰 配件 遍历的的数组
  const items: MenuProps['items'] = ParentList.map((item: any) => {
    return {
      label: item,
      key: item,
    }
  })
  const [current, setCurrent] = useState('服饰');
  // 鞋类 服饰 配件 数据遍历的的数组
  let [Shoplist, setShopList]: any = useState([]);

  // 服饰，鞋类 导航点击请求数据
  const onClick: MenuProps['onClick'] = (e) => {

    // 服饰，鞋类点击下标
    // console.log('click ', e.key);
    setCurrent(e.key);
    let data = {
      parent_name: e.key
    }

    getProduct(data).then((data: any) => {
      // console.log(data, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
      let { code, message, res } = data;
      if (code === 200) {
        ParentList = res;
        setShopList(ParentList);
      } else {
        // console.log(message);
      }
      // console.log(ParentList, 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
    })
  };

  // 跳转搜索页面
  const search = () => {
    push('/serch')
  }

  // 跳转详情页
  const details = (id: any) => {
    console.log(id)
    push('/shoping/details?id=' + id)
  }
  useEffect(() => {
    // 轮播图请求
    getRotograph().then((data: any) => {
      let { code, message, res } = data
      if (code === 200) {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        setingsList(res);
      } else {
        alert(message);
      }
    })

    // 服饰，鞋类 请求
    getParentName().then((res: any) => {
      let { code, result, data } = res
      if (code === 200) {
        setParentList(data);
      } else {
        alert(result);
      }
    })

    // 进入页面服饰数据请求
    let data = {
      parent_name: '服饰'
    }
    getProduct(data).then((data: any) => {
      // console.log(data, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
      let { code, message, res } = data;
      if (code === 200) {
        ParentList = res;
        setShopList(ParentList);
      } else {
        // console.log(message);
      }
      // console.log(ParentList, 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
    })
  }, [])
  const classIfication = (e: any) => {
    console.log(e.innerHTML, 'llllllllllllllllllllllllllllllllllllll');
    push('/classification');

  }
  // 轮播图二级
  const rotographPush = (data: any) => {
    let { params, swiperImg, spu_id } = data;
    console.log('===============rotograph=====================');
    console.log(data);
    console.log('=================rotograph===================');
    if (data.spu_id) {
      push('/shoping/details?id=' + spu_id)
    } else {
      push('/rotograph', {
        state: {
          params: params,
          swiperImg: swiperImg
        }
      });
    }
  }

  return (
    <div className={styles.box}>
      {/**顶部导航动画 */}
      <div className={styles['van-nav-bar']}>
        <div className={styles['_van-nav-bar_eoua0_1']}>
          <div className={styles.front}></div>
          <div className={styles['front_img']}></div>
        </div>
        {/**搜索 */}
        <div className={styles.search} onClick={search}>
          <Search />
        </div>
      </div>
      {/**轮播图 */}
      <div className={styles.rotograph}>
        <Carousel autoplay>
          {
            imgsList.map((item: any) => {
              return (
                <div key={item.swiperImg} onClick={(e) => { rotographPush(item) }}>
                  <img src={item.swiperImg} />
                </div>
              )
            })
          }
        </Carousel>
      </div>

      {/**全部分类 */}
      <div className={styles['icons-wrapper']}>
        <ul>
          {
            icons_wrapper.map((item: any) => {
              return (
                <li key={item.img}>
                  <img src={item.img} />
                  <span>
                    {item.linkbar}
                  </span>
                </li>
              )
            })
          }
          <li onClick={(e) => { classIfication(e) }}>
            <img src={icons[icons.length - 1].img} />
            <span>
              {icons[icons.length - 1].linkbar}
            </span>
          </li>
        </ul>
      </div>

      {/* 服饰，鞋类。。。 */}
      <div className={styles['van-tabs__wrap']}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>

      {/*遍历的数据列表 */}
      <div className={styles['van-tab__pane']}>
        <ul className={styles.list}>
          {
            Shoplist.map((item: any, index: number) => {
              return (
                <li key={item.img} onClick={() => { details(item.id) }}>
                  <img src={item.img} />
                  <h3>{item.title}</h3>
                  <p className={styles.price}>
                    <b className={styles['price_b']}>
                      <span>￥{item.special_price}</span>
                      <span>￥{item.price}</span>
                    </b>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div >

      {/* 返回顶部 */}
      <div className={styles.top}>
        <FloatButton.Group shape="circle" style={{ right: 10, bottom: 70 }}>
          <FloatButton.BackTop />
        </FloatButton.Group>
      </div>
    </div>
  )
}

export default index 