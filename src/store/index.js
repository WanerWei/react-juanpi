import { createStore, applyMiddleware } from 'redux'

// 异步请求
import thunk from 'redux-thunk'

import reducers from './reducers'

// 原本的 store不支持异步，用中间件处理一下
const store = createStore(reducers, applyMiddleware(thunk))

export default store