import request from '@/utils/request'
// 更改密码
export const getAmend = (data: any) => request({ url: '/user/changePassword', method: 'POST', data })
//验证码
export const getMessage = (data: any) => request({ url: '/user/getMessage', method: 'POST', data })
//注册
export const getSign = (data: any) => request({ url: '/user/register', method: 'POST', data })
//获取地址
//参数
//customer_id
export const getAddress = (data: any) => request({ url: '/user/getAddress', method: 'POST', data })
//获取默认地址
export const getDefaultAddress = (data: any) => request({ url: '/user/getDefaultAddress', method: 'POST', data })
//添加地址
//参数
// customer_id, name, tel, address, prime
export const addAddress = (data: any) => request({ url: '/user/addAddress', method: 'POST', data })
//修改收获地址
//参数
//name, tel, address,id 
export const updateAddress = (data: any) => request({ url: '/user/updateAddress', method: 'POST', data })

//设置默认时候地址
//参数
//id, prime, customer_id
export const defaultAddress = (data: any) => request({ url: '/user/defaultAddress', method: 'POST', data })
//删除地址
//参数
//id
export const deleteAddress = (data: any) => request({ url: '/user/deleteAddress', method: 'POST', data })