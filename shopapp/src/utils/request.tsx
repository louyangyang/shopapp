import axios from 'axios';
import { store } from '@/store'
import { useNavigate } from 'react-router-dom';
import { IUserActionType } from '@/store/reducers/user'
// 创建实例时配置默认值
const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //添加请求头

    const stores = store.getState()
    if (stores.user.user.token) {
        config.headers['Token'] = stores.user.user.token

    } else {
        config.headers['Token'] = ''
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {

    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let data = response.data;
    return data;
}, function (error) {
    //跳转路由
    let Navigate = useNavigate()
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.status == 503) {
        store.dispatch({
            type: IUserActionType.CHANGE,
            payload: { token: '',name:'',emil:'' }
        })
        Navigate('/login')

    }
    if (error.response.status == 504) {

        Navigate('/login')
    }
    return Promise.reject(error);
});


export default instance;