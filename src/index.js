import React from 'react';
// 虚拟DOM
import ReactDOM from 'react-dom';
import App from './App';

// 路由
import { BrowserRouter } from 'react-router-dom'
// 状态管理
import { Provider } from 'react-redux'
import store from './store'

import 'styles/reset.css'
import 'styles/animate.css'

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')

)