
import React from 'react'

import ProfileUi from './ProfileUi'

import { Toast } from 'antd-mobile'

import { hasSignInSync } from '../actionCreator'

import { connect } from 'react-redux'

// 获取登录状态
const mapState = (state) => {
    return {
        hasSignIn : state.hasSignIn.hasSignIn
    }
}

// 改变登录状态
const mapDispatch = (dispatch) => {
    return {
        handleHasSignIn(info) {
            dispatch(hasSignInSync(info))
        }
    }
}

class ProfileContainer extends React.Component {

    constructor() {
        super()
        this.toSignOut = this.toSignOut.bind(this)
    }

    render () {
        return (
            <ProfileUi
                hasSignIn = { this.props.hasSignIn }
                toSignOut = { this.toSignOut }
            ></ProfileUi>
        )
    }

    // 登出操作
    toSignOut () {
        let _this = this
        fetch('/isSignIn/api/user/signOut')
        .then( response => response.json() )
        .then( result => {
            if(result.ret) {
                // 在redux 中保存登录状态
                _this.props.handleHasSignIn(0)
                Toast.success('登出成功~', 2)
            }else {
                Toast.fail('登出失败~', 2)
            }
        } )
    }
}

export default connect(mapState, mapDispatch)(ProfileContainer)