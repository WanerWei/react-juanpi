import { GET_CATELIST_INFO } from './actionTypes'

import fetchJsonp from 'fetch-jsonp'

export const loadInfosSync = (info) => {
    return {
        type : GET_CATELIST_INFO,
        info
    }
}

export const loadInfosAsync = (dispatch) => {
    return async () => {
        // fetch 不能访问jsonp（js拍过来的数据）
        // 用插件处理下
        await fetchJsonp('/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1542899041333&callback=jsonp1')
        .then(response => response.json())
        .then(result => {
            dispatch(loadInfosSync(result))
        })
    }
}

