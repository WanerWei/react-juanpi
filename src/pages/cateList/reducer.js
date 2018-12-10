import { GET_CATELIST_INFO } from './actionTypes'

// 用 immutable 进行改造
// import { fromJS } from 'immutable'

// const defaultState = fromJS({
//     cateLists : []
// })

const defaultState ={
    cateLists : []
}

export default (state = defaultState, action) => {
    if( action.type === GET_CATELIST_INFO ) {
        return {
            ...state,
            cateLists : [...action.info]
        }

        // return state.setIn(['cateLists'], fromJS(action.info))
    }
    return state
}