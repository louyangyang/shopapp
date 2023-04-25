import request from '@/utils/request'

// 购物车底部优选商品
export const getproduct = (data: any) => {
    return request({
        method: 'post',
        url: '/type/getproduct',
        data
    })
}
// 商品详情信息
export const getSku = (data: any) => {
    return request({
        method: 'post',
        url: '/store/getSku',
        data
    })
}
// 新品到了
export const getImg = (data: any) => {
    return request({
        method: 'post',
        url: '/type/getImg',
        data
    })
}

export const getShopCar = (options={}) => {
    return request({
        method: 'post',
        url: '/shopcar/getShopCar',
        data:options
    })
}
// 增加购物车商品

export async function addShopCar(options={}){
    return await request({
        method:'post',
        url:'/shopCar/addShopCar',
        data:options
    })
}
// 删除购物车商品列表

export async function deleteShopCar(data:any){
    return await request({
        method:'post',
        url:'/shopCar/deleteShopCar',
        data
    })
}

// 购物车加减 
export async function updataShopCar(data:any){
    return await request({
        method:'post',
        url:'/shopCar/updataShopCar',
        data
    })
}

export async function addOrder(data:any){
    return await request({
        method:'post',
        url:'/order/addOrder',
        data
    })
}
