
import { GET_HOME_INFO, GET_CHOICENESSLEFT_INFO, GET_CHOICENESSRIGHT_INFO } from './actionTypes'


// 状态初始化
const defaultState = {
    slides : [],
    BannerBotImgs : [],
    activities : [],
    fullReductionImg : '',
    betterGoodsTit : '',
    // 精选专场
    choicenessLeft : [],
    // 精选单品
    choicenessRight : [],
}

// const choicenessDefaultState = {
// }

export default (state = defaultState, action) => {
    if( action.type === GET_HOME_INFO ) {
        return {
            ...state,
            // 更新状态
            slides : [...action.info.adsInfo.slide_ads.config.slide],
            BannerBotImgs : [ ...action.info.adsInfo.block[0].multi_block[0].data],
            activities :  [ ...action.info.adsInfo.block[0].multi_block[1].data],
            fullReductionImg : action.info.adsInfo.block[0].multi_block[2].data[0].child[0].pic ,
            betterGoodsTit : action.info.adsInfo.block[0].multi_block[3].data[0].child[0].pic ,
        }
    }

    if( action.type === GET_CHOICENESSLEFT_INFO ) {

        return {
            // 更新状态
            ...state,
            choicenessLeft : [...action.info.data.goods]
        }
    }

    if( action.type === GET_CHOICENESSRIGHT_INFO ) {

        return {
            // 更新状态
            ...state,
            choicenessRight : [...action.info.data.goods]
        }
    }

    // 返回新的状态
    return state
}
