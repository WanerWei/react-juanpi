
import { GET_HOME_INFO, GET_CHOICENESSLEFT_INFO, GET_CHOICENESSRIGHT_INFO } from './actionTypes'

export const loadInfosSync = (info) => {
    return {
        type: GET_HOME_INFO,
        info
    }
}

export const loadChoicenessLeftSync = (info) => {
    return {
        type: GET_CHOICENESSLEFT_INFO,
        info
    }
}

export const loadChoicenessRightSync = (info) => {
    return {
        type: GET_CHOICENESSRIGHT_INFO,
        info
    }
}

// 通过 windows.fetch 方法 获取数据（异步）
export const loadInfosAsync = (dispatch) => {
    return () => {
        fetch('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe')
        .then(response => response.json())
        .then(result => {
            // 派发 任务，存储状态（ 同步 ）
            dispatch(loadInfosSync(result))
        })
    }
}

export const loadChoicenessLeftAsync = (dispatch) => {
    return () => {
        fetch('/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc')
        .then(response => response.json())
        .then(result => {
            // 派发 任务，存储状态（ 同步 ）
            dispatch(loadChoicenessLeftSync(result))
        })
    }
}

export const loadChoicenessRightAsync = (dispatch) => {
    return () => {
        fetch('/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp')
        .then(response => response.json())
        .then(result => {
            // 派发 任务，存储状态（ 同步 ）
            dispatch(loadChoicenessRightSync(result))
        })
    }
}