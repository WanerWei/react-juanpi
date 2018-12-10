import React, { Component } from 'react'

// 将 组件 与 状态 连接起来
import { connect } from 'react-redux'

import SwiperUi from './SwiperUi'

// 获取 状态管理中 的 slides
const mapState = (state) => {
    return {
        slides: state.home.slides
    }
}

class SwiperContainer extends Component {

    // 连接起来后 props就有了 state 数据
    render (props) {
        return (
            <SwiperUi { ...this.props }></SwiperUi>
        )
    }
}

// 将 state 与 component 连接起来
export default connect(mapState)(SwiperContainer)


