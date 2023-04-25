import axios from '@/utils/request';
// 一级分类
export const getTFList = () => axios({
    url: '/type/getParentName',
    method: 'POST',
})
export const getRegister = (data: any) => axios({
    url: '/user/login',
    method: 'POST', data
})
// 一级列表
export const getTypeOneList = (data: any) => axios({
    url: "/type/getproduct",
    method: 'POST',
    data
})

// home轮播图
export const getRotograph = () => axios({
    url: '/type/getSwiper',
    method: 'POST',
})

// 鞋类，服饰，配件，儿童专区 
export const getParentName = () => axios({
    url: '/type/getParentName',
    method: 'POST',
})

// 获取一级分类所有商品
export const getProduct = (parent_name: any) => axios({
    url: '/type/getproduct',
    method: 'POST',
    data: parent_name
})

//分类列表
export const getWares = (data: any) => axios({
    url: '/wares/getSpu',
    method: 'POST',
    data
})