import { HAS_SIGN_IN } from './actionTypes'

const defaultState = {
    hasSignIn : 0
}

export default (state= defaultState, action) => {
    if(action.type === HAS_SIGN_IN )  {
        return {
            ...state,
            hasSignIn : action.info
        }
    }

    return state
}