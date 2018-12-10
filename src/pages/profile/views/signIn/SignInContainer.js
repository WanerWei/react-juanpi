
import React from 'react'

import SignInUi from './SignInUi'

import { Toast } from 'antd-mobile'

import { hasSignInSync } from '../../actionCreator'

import { connect } from 'react-redux'

// redux 登录状态 操作
const mapDispatch = (dispatch) => {
    return {
        handleHasSignIn(info) {
            dispatch(hasSignInSync(info))
        }
    }
}

class SignInContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            signInLeftactive : true,
            userName : '',
            passWord : '',
        }

        this.typeSwitch = this.typeSwitch.bind(this)
        this.handlePassWd = this.handlePassWd.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.toSignIn = this.toSignIn.bind(this)
        // this.isSignIn = this.isSignIn.bind(this)
    }

    render() {
        return (
            <SignInUi
                typeSwitch = {this.typeSwitch}
                signInLeftactive = {this.state.signInLeftactive}
                userName = { this.state.userName }
                passWord = { this.state.passWord }
                handlePassWd = { this.handlePassWd }
                handleUserName = { this.handleUserName }
                toSignIn = { this.toSignIn }
            >

            </SignInUi>
        )
    }

    // 切换登录方式
    typeSwitch (opt) {
        this.setState({
            signInLeftactive : opt === "left" ? true : false
        })
    }

    // username表单处理
    handleUserName (e) {
        this.setState({
            userName : e.target.value
        })
    }

    // passwd表单处理
    handlePassWd (e) {
        this.setState({
            passWord : e.target.value
        })
    }

    // 点击登录
    async toSignIn () {
        let _this = this
        await fetch('/toSignIn/api/user/signIn', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body : `userName=${this.state.userName}&passWord=${this.state.passWord}`
        })
        .then( response => response.json() )
        .then( result => {
            if(result.ret) {
                Toast.success("登录成功~",1.3)
                // 在redux 中保存登录状态
                _this.props.handleHasSignIn(1)
                setTimeout(() => {
                    _this.props.history.go(-1)
                },1000)
            }else {
                Toast.fail("账号或密码错误~",1.5)
            }
        } )
    }
}

export default connect(null, mapDispatch)(SignInContainer)