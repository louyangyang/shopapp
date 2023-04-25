import request from '@/utils/request'
// 一级分类
export const getTFList = () => request({ url:'/type/getParentName', method: 'POST', })
//分类列表
export const getWares = (data: any) => request({ url: '/wares/getSpu', method: 'POST', data })
// 登录
export const getRegister = (data: any) => request({ url: '/user/login', method: 'POST', data })
// 一级列表
export const getTypeOneList = (data: any) => request({ url: "/type/getproduct", method: 'POST', data })

