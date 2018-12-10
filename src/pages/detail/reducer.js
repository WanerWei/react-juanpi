import { ADD_TO_CART } from './actionTypes'

import { fromJS, Map, List } from 'immutable'

// const defaultState = {
//     goods : [],
// }

const defaultState = fromJS({
  goods: [],
  hasCheckAll: false
})

export default (state = defaultState, action) => {
  if (action.type === ADD_TO_CART) {
    // let goodsTemp = state.goods
    // return {
    //     goods : [...state.goods, action.info]
    // }

    // 获取 goods
    let oriGoods = state.get('goods')
    // 先判断是否存在此 商品
    // 如果存在
    if (oriGoods.find((v, i, a) => { return v.title === action.info.title })) {
      // map循环
      oriGoods.map((value, index) => {
        // 找到当前值
        if (value.title === action.info.title) {
          // 更新
          return state.set('goods', oriGoods.update(index, val => val.num = val.num + action.info.num))
        }
      })
      // 否则直接push
    } else {
      let newGoods = oriGoods.push(action.info)
      return state.set('goods', newGoods)
    }
    // push 一条新数据
    // 重新 set goods
  }

  if (action.type === 'check_one') {
    let oriGoods = state.get('goods')
    oriGoods.map((value, index) => {
      if (value.title === action.info) {
        // 勾选单个/反选
        return state.set('goods', state.get('goods').update(index, val => val.isChecked = !val.isChecked))
      }
    })

    return state
  }

  // 全选
  if (action.type === 'check_all') {
    let oriGoods = state.get('goods')
    let hasCheckAll = state.get('hasCheckAll')
    // 反选
    if (!!hasCheckAll) {
      oriGoods.map((value, index) => {
        return state.set('goods', oriGoods.update(index, val => val.isChecked = false))
      })
      // 全选
    } else {
      oriGoods.map((value, index) => {
        return state.set('goods', oriGoods.update(index, val => val.isChecked = true))
      })
    }
    // 全选状态
    return state.set('hasCheckAll', !hasCheckAll)
  }

  if (action.type === 'join') {
    // 这部分为原生操作
    // if(state.car.find(item=>item.id==action.xinxi.id)){
    //   state.car.forEach((v,i,arr)=>{
    //       if(v.id===action.xinxi.id){
    //       state.car[i].num++
    //       }
    //   })
    // }else{
    //   return {
    //     ...state,
    //     car:[...state.car,action.xinxi]
    //   }
    // }
    //这是immutable查找
    // console.log(state.getIn(['car'])

    //详情页加入购物车
    if (state.getIn(['car']).find((v, i, a) => { return v.id == action.xinxi.id })) {
      state.getIn(['car']).map((v, i) => {
        if (v.id == action.xinxi.id) {
          return state.setIn(['car'], state.getIn(['car']).update(i, val => val.num++))
        }
      })
    } else {
      return state.setIn(['car'], state.getIn(['car']).push(action.xinxi))
    }
  }
  //购物车数量加
  if (action.type === 'add') {
    state.getIn(['car']).map((v, i) => {
      if (v.id == action.id) {
        // console.log(state.setIn(['car'],state.getIn(['car']).update(i,val=>val.num++)))
        const x = state.setIn(['car'], state.getIn(['car']).update(i, val => val.num++))
        return x
      }
    })
  }
  //购物车数量减
  if (action.type === 'jian') {
    state.getIn(['car']).map((v, i) => {
      if (v.id === action.id) {
        if (state.getIn['car'][i].num > 1) {
          return state.setIn(['car'], state.getIn(['car']).update(i, val => val.num--))
        }
      }
    })
  }
  //购物车删除
  if (action.type === 'delete') {
    state.getIn(['car']).map((v, i) => {
      if (v.id === action.id) {
        console.log(1)
        return state.setIn(['car'], state.getIn(['car']).delete(i))
      }
    })
  }

  return state
}