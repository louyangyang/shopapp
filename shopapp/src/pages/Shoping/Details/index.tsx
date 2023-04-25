
import React, { useEffect, useState } from 'react'
import { FormPrevious, Phone, ShareRounded, Star, FormNext } from 'grommet-icons';
import style from './index.module.css'
import { getSku,deleteShopCar,addShopCar,getShopCar } from '@/api/1'
import { useSearchParams, useNavigate } from 'react-router-dom'
import x3 from './imgs/size.jpg'
import { Popup, Tabbar, TabbarItem } from '@nutui/nutui-react';
import '@nutui/nutui-react/dist/style.css';
import { Icon, Collapse, CollapseItem, Overlay } from '@nutui/nutui-react';
import { Swiper, SwiperItem } from '@nutui/nutui-react';
import {store} from '@/store/index'
export default function index() {
  const [initPage1, setInitPage1] = useState()
  //input change
  const change = () => {

  }
  const navgate = useNavigate()
  

  // 头部返回上一级页面
  const go = () => {
    window.history.back()
  }
  // 跳客服页面
  const phone1=()=>{
    navgate('/serve')
  }
  let phone = (a: any, id: any) => {
    // console.log(a, id);

    if (id == 0) {

      navgate('/serve')

    } else if (id == 1) {
      // console.log(111111111);
      navgate(`/shoping`)
    }
  }
  // 弹出框
  // 分享
  const [showBottom5, setShowBottom5] = useState(false);
  //分期
  const [showBottom, setShowBottom] = useState(false);
  //
  const [showBottom1, setShowBottom1] = useState(false);
  // 最近购买
  const [showBottom2, setShowBottom2] = useState(false);
  //底部添加购物车
  const [showBottom3, setShowBottom3] = useState(false);
  // 底部立即购买
  const [showBottom4, setShowBottom4] = useState(false);


  // 路由接受参数
  const [search, setSearch] = useSearchParams();
  // 图片
  let [msg, setMsg]: any = React.useState([]);
  // 轮播图
  let [imgs, setImgs]: any = React.useState([]);
  // 底部弹出框 颜色选择
  let [colorText, setColorText]: any = React.useState([]);
  let [stock, setstock]: any = React.useState([]);
  let [sizex, setsize]: any = React.useState([]);
// 获取加入购物车参数

 // 添加购物车信息
 const  addShopList= async(item:any)=>{

  await deleteShopCar({ id:item.id });
    // console.log("add购物测",item);
    setTimeout(async() => {
   let a = await addShopCar({
      customer_id: item.customer_id,
      sku_id: item.sku_id,
      num: item.num,
      params: item.params,
    });
    // console.log("123456789",a);
    
    });
    
  };


  // 获取数据
  useEffect((): any => {
    // console.log(search,)
    let id = search.get('id')
    console.log(search, id)
    // console.log(id);
    getSku({ spu_id: id }).then(list => {

      msg = list.data||[]
      let a = JSON.parse(msg[0].imgs.replace(/\n/g, "\\n").replace(/\r/g, "\\r"))
      // console.log(a, 'sssssssssss');
      let text = JSON.parse(msg[0].param.replace(/\n/g, "\\n").replace(/\r/g, "\\r"))

      let size = JSON.parse(msg[0].param.replace(/\n/g, "\\n").replace(/\r/g, "\\r"))
      imgs = a||[];
      colorText = text
      sizex=size
      // console.log(list.data);
      // console.log(list.data[0].stock);
     let stock=JSON.parse(list.data[0].stock)
    //  console.log(stock)
      setImgs(imgs||[])
      setMsg(msg||[])
      setColorText(colorText)
      setstock(stock)
    //  console.log('list1111111',msg);
     
    })
  }, [])
  // console.log("list", msg);
// 弹出框
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const handleToggleShow1 = () => {
    setVisible(true)


  }
  const onClose1 = () => {
    setVisible(false)
  }
  // 跳转登录
  const login = () => {
 let useid=store.getState();
 setShowBottom3(false)

 let item1={
  customer_id: useid.user.user.id,
  sku_id:msg[0].id
  ,
  num:add,
  params: [colorText[isAll],size1[isall].toString()],
 }
 addShopList(item1)
    // console.log(colorText[isAll],size1[isall],add,id);


if(useid.user.user.name)
    navgate(`/shoping`)
  }
  // 颜色选择
  const [isAll, setisAll] = useState(0)
  const border = (index: number) => {
    setisAll(index)
   
    
  }
  // 选着尺码
  const size1 = [36, 37, 38, 39, 40, 41, 42, 43]
  const [isall, setall] = useState(0)
  const size = (index: any) => {
    setall(index)
    // console.log(index);

  }
  // 购物车加减
  let [add, setadd] = useState(1)
  const add1 = () => {
    add++
    setadd(add++)
    // console.log(1111);

  }
  const minus = (e: any) => {
    // console.log(e);

    if (add <= 0) {

      e.target.dataset.disabled = false
    } else {
      add--

      setadd(add--)

    }

  }
  return (
    <div className={style['box']}>
      <div className={style['details-top']}>
        <div className={style['details-top-left']}> <span onClick={() => {
          go()
        }}><FormPrevious></FormPrevious></span></div>

        <div className={style['details-top-right']}>
          <span onClick={() => {
            phone1()
          }}><Phone></Phone></span>
          <span onClick={() => { setShowBottom5(true) }}><ShareRounded></ShareRounded>

          <Popup  visible={showBottom5} style={{ height:'30%' }} position="bottom" onClose={() => { setShowBottom5(false) }} className={style.share}> 
          <div className={style.share1}>
     <p>立即分享给好友</p>
             <div className={style['img']}>
              <img src="	https://img01.yzcdn.cn/vant/share-sheet-weibo.png" alt="" />
               <span>微信</span>
             </div>
           <p>取消</p>
    
           </div>
       </Popup>
          </span>
          <span><Star></Star></span>
       
        </div>
       
      </div>
    
      {/*轮播图 有 bug */}

      <div className={style['details-clothes']} >
        <Swiper
          height='350'
          paginationColor="#426543"
          paginationBgColor='#426ddd'
          autoPlay="3000"
          initPage={initPage1}
          paginationVisible
        >

          {
            imgs.map((item: any, index: string | number) => {
              return (
                <SwiperItem key={index} >
                  <img src={item.normal} alt="" />
                </SwiperItem>
              )
            })
          }


        </Swiper>
      </div>

      {
        msg.map((item: any, index: any) => {
          return (
            <div key={index}><div className={style['price']} >

              <p>{item.title}</p>
              <p>￥{item.price}</p>
            </div><div className={style['staging']}>
                <div className={style['staging-div']}>
                  <span>分期</span>
                  <span onClick={() => { setShowBottom(true); }}>最低月付16.58元
                    <FormNext></FormNext>
                    <Popup visible={showBottom} style={{ height: '40%' }} position="bottom" onClose={() => { setShowBottom(false); }} className={style.bd}>
                      <div className={style.mask}>
                        <ul>
                          <li>3期分期每期仅需￥{Math.ceil(item.price / 3)}</li>
                          <li>6期分期每期仅需￥{Math.ceil(item.price / 6)}</li>
                          <li>9期分期每期仅需￥{Math.ceil(item.price / 9)}</li>

                        </ul>
                        <button >确认分期</button>

                      </div>
                    </Popup>
                  </span>

                </div>

                <div className={style['staging-div']}>
                  <span>服务</span>
                  <span onClick={() => { setShowBottom1(true); }}>超时赔付 假一赔三<FormNext></FormNext>
                    <Popup visible={showBottom1} style={{ height: '70%' }} position="bottom" onClose={() => { setShowBottom1(false); }} className={style.bd1}>
                      <ul>
                        <li>
                          <p><Icon name="checked"></Icon>超时赔付 </p>
                          <span>若卖家因未能在规定时间内发货导致交易被关闭,需索赔一定金额给买家。平台还会额外补贴给买家价值170元的组合优惠券</span>
                        </li>
                        <li>
                          <p><Icon name="checked"></Icon>超时赔付 </p>
                          <span>若卖家因未能在规定时间内发货导致交易被关闭,需索赔一定金额给买家。平台还会额外补贴给买家价值170元的组合优惠券</span>
                        </li><li>
                          <p><Icon name="checked"></Icon>超时赔付 </p>
                          <span>若卖家因未能在规定时间内发货导致交易被关闭,需索赔一定金额给买家。平台还会额外补贴给买家价值170元的组合优惠券</span>
                        </li>
                      </ul>
                    </Popup>
                  </span>
                </div><div className={style['staging-div']}>
                  <span>运费</span>
                  <span>回归好礼-包邮</span>
                </div><div className={style['staging-div']}>
                  <span className={style['tuijian']}>相关推荐</span>
                  <span>查看更多<FormNext></FormNext></span>
                </div>
                <div className={style['staging-div']}>
                  <span>最近购买(516)</span>
                  <span onClick={() => { setShowBottom2(true); }}>查看更多<FormNext></FormNext>
                    <Popup visible={showBottom2} style={{ height: '40%' }} position="bottom" onClose={() => { setShowBottom2(false); }} className={style.bd}>

                      <ul className={style.recently2}>
                        <li className={style.recently3}>
                          <div><span>催到</span></div>
                          <div>22</div>
                          <div>￥222</div>
                          <div>5天前</div>
                          <div>留言：这鞋子真不错呀</div>
                        </li>

                      </ul>
                    </Popup>
                  </span>

                </div>
                <div>
                  <ul className={style.recently}>
                    <li className={style.recently1}>
                      <div>催到</div>
                      <div>22</div>
                      <div>￥222</div>
                      <div>5天前</div>
                    </li>
                    <li className={style.recently1}>
                      <div>催到</div>
                      <div>22</div>
                      <div>￥222</div>
                      <div>5天前</div>

                    </li><li className={style.recently1}>
                      <div>催到</div>
                      <div>22</div>
                      <div>￥222</div>
                      <div>5天前</div>

                    </li>
                  </ul>
                </div>
                <div style={{ height: '8px', backgroundColor: 'rgb(236, 236, 233)' }}></div>

              </div></div>
          )
        })

      }
      <div className={style['evaluation']}>
        <span className={style['spn1']}>商品评价(99+)</span>
        <span className={style['spn2']}> 查看更多<FormNext></FormNext>
        </span>
        <div className={style['evaluation1']}>
          <div ><span>偏小</span><span>9</span></div>
          <div ><span>偏小</span><span>9</span></div>
          <div ><span>偏小</span><span>9</span></div>

        </div>
      </div>
      <div style={{ height: '8px', backgroundColor: 'rgb(236, 236, 233)' }}></div>
      {/* 穿搭精选 */}
      <div className={style['wear']}>
        <p>穿搭精选(2)</p>
        <div className={style['imgs']}>{
          imgs.map((item: any, index: any) => {

            return <div key={index} >
              <img src={imgs[index].normal} alt="" onClick={handleToggleShow1} />
              <Overlay visible={visible} onClick={onClose1} id={style['show']}>
                <div className={style['imgs-1']}>
                  <img src={imgs[index].normal} alt="" />
                </div>
              </Overlay>
            </div>

          })
        }

        </div>
      </div>
      <div style={{ height: '8px', backgroundColor: 'rgb(236, 236, 233)' }}></div>
      {/* 参数 */}
      <div className={style['parameter']}>
        <div className={style['parameter1']}>
          <span>参数</span>
          <span >商品信息有疑问 ?</span>

        </div>
        {
          msg.map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
            return (
              <div key={index}>
                <ul>
                  <li><p>品牌</p> <p>安踏</p></li>
                  <li><p>名称</p> <p>{item.title}</p></li>
                  <li><p>发售价格</p> <p>￥199(仅供参考)</p></li>
                </ul>
                <div className={style['expansion']}>

                  <Collapse activeName={['1', '2']} icon="arrow-down" iconSize="14" iconColor="#999" className={style['expansion']}>
                    <CollapseItem title="点击展开" name="1" className={style['expansion1']}>
                      <ul>
                        <li><p>品牌</p> <p>安踏</p></li>
                        <li><p>名称</p> <p>{item.title}</p></li>
                        <li><p>发售价格</p> <p>￥{item.price}</p></li>
                      </ul>
                    </CollapseItem>

                  </Collapse>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* 细节展示 */}
      <div className={style['details-presentation']}>
        <span>细节展示</span>

        {
          // imgs[1]?<img src={imgs[0].normal} alt="" />:''
          imgs.map((item: any, index: any) => {
            return <div key={index}><img src={imgs[index].normal} alt="" onClick={handleToggleShow} />
              <Overlay visible={visible} onClick={onClose} >
                <div className={style['imgs-1']}>
                  <img src={imgs[index].normal} alt="" />
                </div>
              </Overlay>
            </div>
          })

        }

      </div>

      <div style={{ height: '8px', backgroundColor: 'rgb(236, 236, 233)' }}></div>

      {/* {尺码对照} */}
      <div className={style['size']}>
        <img src={x3} alt="" />
        <div style={{ height: '8px', backgroundColor: 'rgb(236, 236, 233)' }}></div>

      </div>
      {/* 购物须知 */}
      <div className={style['notice']}>
        <h1>购物须知</h1>
        <p>关于商品</p>
        <span>由于生产批次，产地的不同以及商品更新升级和品跑方图片调整，实物的材质，外观细节、配件和包装等可能与商品图片存在细微差异，具体请以收到的实物为准。如商品上绑有调包扣或贴有防伪纸，请您收到后先确认上无误再进行拆除</span>
        <p>关于色差：</p>
        <span>因手机、电脑等显示设备的色彩偏差和个人对颜色理解不同，导致实物可能会与照片存在一定色差，请您以收到的实物为准</span>
        <p>关于气味：</p>
        <span>新商品可能会存在一些气味，这些气味来自材料，鞋底，胶水等，您可以将商品放置在通风处一段时间、减少气味后再穿着</span>
        <p>关于尺码：</p>
        <span>商品详情页的尺码表仅供参考，由于品牌尺码标准，产品款型及测量方法不同，商品实际尺寸可能会存在些误差，均属于正常情况</span>
        <p>保养说明：</p>
        <span>请定期清洁，针对不同材质与工艺进行清洁和保养，可以使用干净柔软白色湿棉或软毛刷擦拭，最好使用专业清洁剂，切勿使用刷子猛刷；避免曝晒和火烤，避免阳光曝晒引起老化、变形、褪色及断裂</span>
        <p>自然氧化：</p>
        <span>部分球鞋由于生产年代久远以及鞋面和鞋底等处的材质特殊与空气长期接触后会发生自然氧化是属正常现象无法避免</span>
      </div>
      <div style={{ height: '8px', backgroundColor: 'rgb(236, 236, 233)' }}></div>

      {/* 为你推荐 */}
      <div className={style['food']}>为你推荐</div>
      <div className={style['food-shop']}>


        <div className={style['food-shop-button']}>
          <div className={style['food-shop-button-left']}>
            <Tabbar onSwitch={(child, id) => { phone(child, id) }}>
              <TabbarItem tabTitle="客服" icon="dongdong" />
              <TabbarItem tabTitle="购物车" icon="cart" />
            </Tabbar>
          </div>
          <div className={style['food-shop-button-right']}>
            <button onClick={() => { setShowBottom3(true) }}>加入购物车</button>
            <button onClick={() => { setShowBottom4(true) }}>立即购买</button>
          </div>

        </div>
        {/* 加入购物车模块 */}
        <Popup visible={showBottom3} style={{ height: '80%', width: '100%' }} position="bottom" onClose={() => { setShowBottom3(false) }} className={style['food-shop-add']}>
          <div className={style['clear']} > <Icon name="close-little" onClick={() => { setShowBottom3(false) }} ></Icon></div>
          <div className={style['food-shop-add-1']}>
            <div className={style['shop-img']}>
              {
                imgs.map((item: any, index: React.Key | null | undefined) => {
                  return <img src={imgs[isAll].small} alt="" key={index} />

                })
              }
            </div>

            <p>选择颜色：</p>
            <div className={style['shop-color']} >
              {
                colorText.map((item: string, index: number) => {
                  return (
                    <div key={index}>
                      <div onClick={e => border(index)} className={`${isAll === index ? style.border : ''} ${style.buff}`}
                      >{item}
                      </div>
                    </div>
                  )
                })

              }

            </div>
            <p>选择尺码：</p>
            <div className={style['shop-size']}>
              <ul>
                {
                  size1.map((item: any, index: number) => {
                    return <li onClick={e => { size(index) }} className={isall == index ? style['size-border'] : ''} key={index}>
                      {item}
                    </li>
                  })
                }
              </ul>
            </div>
            <p>库存：{stock[isAll]}</p>
            <div className={style['shop-number']}>
              <div className={style['number']}>购买数量:</div>
              <div className={style['shop-btn']}>
                <button id={style['btn']} onClick={(e) => { minus(e) }}>-</button><input type="text" onChange={() => change()} value={add} /> <button id={style['btn']} onClick={() => { add1() }}>+</button>
              </div>
            </div>
            <button id={style['bttn']} onClick={() => login()}>加入购物车</button>
          </div>
        </Popup>

        {/* 立即购买 */}
        <Popup visible={showBottom4} style={{ height: '80%', width: '100%' }} position="bottom" onClose={() => { setShowBottom4(false) }} className={style['food-shop-add']}>
          <div className={style['clear']} >
            <Icon name="close-little" onClick={() => { setShowBottom4(false) }} ></Icon>
          </div>
          <div className={style['food-shop-add-1']}>
            <div className={style['shop-img']}>
              {
                imgs.map((item: any, index: React.Key | null | undefined) => {
                  return <img src={imgs[isAll].small} alt="" key={index} />

                })
              }
            </div>

            <p>选择颜色：</p>
            <div className={style['shop-color']} >
              {
                colorText.map((item: string, index: number) => {
                  return (
                    <div key={index}>
                      <div onClick={() => border(index)} className={`${isAll === index ? style.border : ''} ${style.buff}`}
                      >{item}
                      </div>
                    </div>
                  )
                })

              }

            </div>
            <p>选择尺码：</p>
            <div className={style['shop-size']}>
              <ul>
                {
                  size1.map((item: any, index: number) => {
                    return <li onClick={() => { size(index) }} className={isall == index ? style['size-border'] : ''} key={index}>
                      {item}
                    </li>
                  })
                }
              </ul>
            </div>
            <p>库存:
                {stock[isAll]}
                </p>
            <div className={style['shop-number']}>
              <div className={style['number']}>购买数量:</div>
              <div className={style['shop-btn']}>
                <button id={style['btn']} onClick={(e) => { minus(e) }}>-</button><input type="text" value={add}  onChange={() => change()} /> <button id={style['btn']} onClick={() => { add1() }}>+</button>
              </div>
            </div>
            <button id={style['bttn']} onClick={() => login()}>立即购买现在购买仅需0元</button>
          </div>
        </Popup>

      </div>


    </div >

  )
}
