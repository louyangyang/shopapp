import {
    Routes,
    Route,
    Navigate,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Box, Spinner, Text, Layer } from 'grommet';
//导入仓库
import { store } from '@/store'
import { Cell, Infiniteloading } from '@nutui/nutui-react';

const Frame = lazy(() => import('@/pages/Frame'))
const Home = lazy(() => import('@/pages/Home'))
// 搜索
const Serch = lazy(() => import('@/pages/Serch'))
// 搜索下页面
const SerList = lazy(() => import('@/pages/Serch/SerList/index'))
const Logins = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))

const Shoping = lazy(() => import('@/pages/Shoping'))
const Details = lazy(() => import('@/pages/Shoping/Details/index'))
const Stroll = lazy(() => import('@/pages/Shoping/Stroll/index'))

// 轮播图二级
const Rotograph = lazy(() => import('@/pages/Rotograph/index'))

const ClassIfication = lazy(() => import('@/pages/Sort'))
const User = lazy(() => import('@/pages/User'))
const Texts = lazy(() => import('@/components/TabBar'))
const Password = lazy(() => import('@/pages/Password'))
// 个人资料
const PersonalData = lazy(() => import('@/pages/PersonalData'))
//测试
const Textcompute = lazy(() => import('@/pages/text'))
// 订单
const MyOrder = lazy(() => import('@/pages/myOrder'))
//客服
const Serve = lazy(() => import('@/pages/serve'))
const List = lazy(() => import('@/pages/list'))
// 我的二维码
const Mycode = lazy(() => import('@/pages/myCode'))
//管理地址
const SeleceAdd = lazy(() => import('@/pages/SelectAdd'))
//添加地址
const AddAddress = lazy(() => import('@/pages/SelectAdd/address'))
//修改地址
const UpdateAddress = lazy(() => import('@/pages/SelectAdd/updateress'))
//分类商品
const Category = lazy(() => import('@/pages/Category'))
export const router = () => {
    //

    const location = useLocation()

    //声明函数获取token
    let token = () => {
        // 使用redux仓库获token取值

        let stores = store.getState()

        let token = stores.user.user.token

        return token ? true : false
    }
    const navgate = useNavigate()
    useEffect(() => {
        console.log(token())
        //
        // console.log(location)
        routes.forEach(element => {
            if (element.path == location.pathname) {

                if (element.meta.power && !token()) {
                    navgate('/login')
                }
                document.title = element.meta.title

            } else {
                if (element.chidren) {

                    element.chidren.forEach(element => {
                        if (element.path == location.pathname) {

                            if (element.meta.power && !token()) {
                                navgate('/login')
                            }

                            document.title = element.meta.title

                        }
                    });
                }
            }
        });
    }, [location])

    const routes = [
        {
            path: '/',
            element: <Frame />,
            meta: { title: '首页', power: false },

            chidren: [
                {
                    path: '/',
                    element: <Home />,
                    meta: { title: '首页', power: false },
                },
                {
                    path: '/home',
                    element: (<Home />),
                    meta: { title: '首页', power: false }
                },
                {
                    path: '/shoping',
                    element: (<Shoping />),
                    meta: { title: '购物车', power: false }
                },

                {
                    path: '/classification',
                    element: (<ClassIfication />),
                    meta: { title: '商品分类', power: false }
                },
                {
                    path: '/user',
                    element: (<User />),
                    meta: { title: '个人主页', power: false }
                },
                {
                    path: '/personalData',
                    element: (<PersonalData />),
                    meta: { title: '个人资料', power: true }
                },

            ]
        },

        {
            path: '/login',
            element: (<Logins />),
            meta: { title: '登录', power: false }
        },
        {
            path: '/password',
            element: (<Password />),
            meta: { title: '忘记密码', power: false }
        },
        {
            path: '/register',
            element: <Register />,
            meta: { title: '注册', power: false }
        }, {
            path: '/serch',
            element: (<Serch />),
            meta: { title: '搜索', power: false }
        },
        {
            path: '/serList',
            element: (<SerList />),
            meta: { title: '搜索', power: false }
        },
        // 购物车页面商品详情
        {
            path: '/shoping/details',
            element: (<Details />),
            meta: { title: '商品详情', power: false }
        },
        // 随便逛页面
        {
            path: 'stroll',
            element: (<Stroll />),
            meta: { title: '新品到来', power: false }
        },
        // 客服 SKR线上
        {
            path: '/myOrder',
            element: (<MyOrder />),
            meta: { title: '客服', power: false }
        },
        // 订单页
        {
            path: '/serve',
            element: (<Serve />),
            meta: { title: '我的订单', power: false }
        },
        // 订单页
        {
            path: '/list',
            element: (<List />),
            meta: { title: '搜索', power: false }
        },

        // 订单页
        {
            path: '/myCode',
            element: (<Mycode />),
            meta: { title: '我的二维码', power: false }
        },
        // 地址管理
        {
            path: '/selectAdd',
            element: (<SeleceAdd />),
            meta: { title: '选择地址', power: false }
        },
        // 添加管理
        {
            path: '/addAddress',
            element: (<AddAddress />),
            meta: { title: '添加地址', power: false }
        },
        {
            path: '/updateAddress',
            element: (<UpdateAddress />),
            meta: { title: '修改地址', power: false }
        },
        //分类
        {
            path: '/classification',
            element: (<UpdateAddress />),
            meta: { title: '商品分类', power: false }
        },

        //分类页面
        {
            path: '/Category',
            element: (<Category />),
            meta: { title: '商品分类', power: false }
        },

        {
            path: '/text',
            element: (<Textcompute />),
            meta: { title: '测试', power: false }
        },
        // 轮播图二级
        {
            path: '/rotograph',
            element: (<Rotograph />),
            meta: { title: '轮播图二级', power: false }
        },




    ]




    return (
        <Routes>

            {routes.map((item, i) => (
                <Route key={item.path} path={item.path} element={<Suspense fallback={<Layer>
                    <Box
                        align="center"
                        justify="center"
                        gap="small"
                        direction="row"
                        alignSelf="center"
                        pad="large"
                    >
                        <Spinner />
                        <Text>Loading...</Text>
                    </Box>
                </Layer>} >
                    {
                        item.element
                    }
                </Suspense>}>
                    {item.chidren?.map((items, i) => (
                        i == 0 ? <Route key={items.path + i} path={items.path} element={
                            <Navigate to={item.chidren[1].path} />
                        } /> : <Route key={items.path} path={items.path} element={<Suspense fallback={<Layer>
                            <Box
                                align="center"
                                justify="center"
                                gap="small"
                                direction="row"
                                alignSelf="center"
                                pad="large"
                            >
                                <Spinner />
                                <Text>Loading...</Text>
                            </Box>
                        </Layer>} >
                            {
                                items.element
                            }
                        </Suspense>} />
                    ))}
                </Route>
            ))}
        </Routes>
    )
}
export default router
