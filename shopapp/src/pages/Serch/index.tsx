import React, { useState, useEffect } from 'react';
import { Icon, SearchBar, Cell, Dialog } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';
import styles from "./idnex.module.less";
import { useNavigate, } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { store } from '@/store'
import { IUserActionType } from '@/store/reducers/serch'
const search: React.FC = () => {
  // 返回上一页

  const history = createBrowserHistory();
  const returnPage = () => {
    history.go(-1);
  }

  // 开关二级菜单跳转
  let [flag, setflag] = useState(true)
  const menuChange = (value: boolean) => {
    setflag(value);
  }


  // 二级菜单路由跳转
  const push = useNavigate();
  const [menuList, stemenuList]: any = useState([
    {
      title: '主页',
      icon: 'home'
    },
    {
      title: '分类',
      icon: 'more-x'
    },
    {
      title: '购物车',
      icon: 'cart2'
    },
    {
      title: '我的',
      icon: 'my2'
    },
  ])
  const menuType = (e: any) => {
    // setflag(!flag);
    if (e.innerHTML === '主页') {
      push('/home');
    } else if (e.innerHTML === '分类') {
      push('/classification');
    } else if (e.innerHTML === '购物车') {
      push('/shoping');
    } else if (e.innerHTML === '我的') {
      push('/user');
    }
  }


  // 搜索框搜索
  let [historical, sethistorical] = useState(true)
  let [sslist, setsslist]: any = useState([]);
  const change = (e: any) => {

    // 判断传过来的数据不为undefined添加到数组
    if (e != null) {
      //  去掉e数据中的空格
      let val = e.trim();
      if (val != undefined && val != '') {
        let arr = [{
          title: val
        }, ...sslist
        ];
        sslist = arr.reverse();
        setsslist(sslist);


        const stores = store.getState();
        if (stores.serch.data.data[0].title) {
          store.dispatch({
            type: IUserActionType.CHANGE,
            payload: { data: [...stores.serch.data.data, { title: val }] }
          })
        } else {
          console.log(stores, 'kkkkkkkkkkkkkkkkkkkk');
          store.dispatch({
            type: IUserActionType.CHANGE,
            payload: { data: [{ title: val }] }
          })
        }

        sethistorical(false);
      }
      push('/serList', { state: { name: e } });
    }
    // 判断历史记录数组长度达到19删除末尾数据，保持只能记录18条数据
    if (sslist.length >= 19) {
      sslist.pop();
      setsslist(sslist);
    }
  }

  // 搜索发现 
  let [SearchList, setSearchList] = useState([
    {
      title: '鞋类',
    },
    {
      title: '服饰',
    },
    {
      title: '配件',
    },
    {
      title: '儿童专区',
    }
  ]);
  const searchJump = (e: any) => {
    console.log('====================================');
    console.log(e.innerHTML);
    console.log('====================================');

    if (e.innerHTML === '鞋类') {
      push('/serList', { state: { name: e.innerHTML } });
    } else if (e.innerHTML === '服饰') {
      push('/serList', { state: { name: e.innerHTML } });
    } else if (e.innerHTML === '配件') {
      push('/serList', { state: { name: e.innerHTML } });
    } else if (e.innerHTML === '儿童专区') {
      push('/serList', { state: { name: e.innerHTML } });
    }
  }
  const stores = store.getState();
  useEffect(() => {
    // 接收reactx里面的数据赋值给sslist
    const stores = store.getState()
    let { data } = stores.serch.data;
    if (data[0].title) {
      let arr = [...data];
      sslist = arr.reverse();
      setsslist(sslist);
    }

    // 判断数组长度sslist大于零时让历史纪录显示
    if (sslist.length > 0) {
      sethistorical(false);
    }

  }, [stores])

  // 清除历史记录
  const del = () => {
    let dele = window.confirm("确定要删除历史记录吗！");
    if (dele) {
      // 历史记录的localStorage清空
      localStorage.removeItem('persist:root');
      // 历史记录的数组清空
      sslist = [];
      setsslist(sslist);
      // 隐藏历史记录
      sethistorical(true);
    }

  }

  return (
    <div className={styles.box}>
      {/* 顶部菜单 */}
      <div className={styles.top}>

        <div className={styles.left} onClick={(e) => { returnPage() }}>
          <Icon name="rect-left"></Icon>
        </div>

        <div className={styles.center} >
          <span>
            搜索
          </span>
        </div>

        <div className={styles.right} onClick={() => { menuChange(!flag) }}>
          <Icon name="category" />
        </div>
      </div>
      {/* 二级菜单 */}
      <div className={flag ? styles.register : styles.rightTwo}>
        <div>
          <ul>
            {
              menuList.map((item: any) => {
                return (
                  <li key={item.icon} >
                    <Icon name={item.icon} />
                    <span onClick={(e) => { menuType(e.target) }}>{item.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      {/* 搜索框 */}
      <div className={styles.searchbox}>
        <SearchBar actionText="搜索" maxLength={10} onSearch={(e: any) => { change(e) }} />
      </div>
      {/* 历史记录 */}
      <div className={historical ? styles.His : styles.Historical}>
        <div className={styles['His-record']}>
          <h3>历史记录</h3>
          <Icon name="del" onClick={() => { del() }} />
        </div>
        <ul>
          {
            sslist.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <span>{item.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>

      {/*搜索发现  */}
      <div className={styles.Historical}>
        <div className={styles['His-record']}>
          <h3>搜索发现</h3>
        </div>
        <ul>
          {
            SearchList.map((item, index) => {
              return (
                <li key={index} onClick={(e) => { searchJump(e.target) }}>
                  <span>{item.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div >
  );
};

export default search;