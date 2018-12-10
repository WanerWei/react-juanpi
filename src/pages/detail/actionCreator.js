
import { ADD_TO_CART } from './actionTypes'

// 不需要异步请求，直接添加
export const addToCartSync = (info) => {
    return {
        type : ADD_TO_CART,
        info
    }
}
