
// 合并多个reducer
import { combineReducers } from 'redux'

import { reducer as home } from 'pages/home'
import { reducer as cateList } from 'pages/cateList'
import { reducer as cart } from 'pages/detail'
import { reducer as hasSignIn } from 'pages/profile'

// 合并各个状态
export default combineReducers({
    home,
    cateList,
    cart,
    hasSignIn,
})