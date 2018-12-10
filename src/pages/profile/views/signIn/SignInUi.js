
import React from 'react'

import left from 'images/left.png'
import tencent from 'images/tencent.png'
import taobao from 'images/taobao.png'
import sina from 'images/sina.png'
import search from 'images/search02.png'
import seven from 'images/seven.png'
import unexpress from 'images/unexpress.png'

import { withRouter } from 'react-router-dom'

// import { isSignIn } from 'middleWare/isSignIn'

import {
    SignInWrap,
    Head,
    FixTop,
    WapLogin,
    Form,
    LoginInfo,
    WapApp,
    ThirdApp,
    Protection 
} from './styledComponent'

class SignInUi extends React.Component {
    
    render () {
        return (
            <SignInWrap>
                <Head>
                    <FixTop>
                        <i
                            onTouchStart={ () => {
                                this.props.history.go(-1)
                            } }
                        >
                            <img src={left} alt=""/>
                        </i>
                        <span>登录</span>
                        <a href="javascript:void(0);">注册</a>
                    </FixTop>
                </Head>
                <WapLogin>
                    <ul>
                        <li className= { this.props.signInLeftactive ? 'active' : '' }
                            onTouchStart = {() => {
                                this.props.typeSwitch('left')
                            }}
                        >卷皮账号登录</li>
                        <li
                            className= { this.props.signInLeftactive ? '' : 'active' }
                            onTouchStart = {() => {
                                this.props.typeSwitch('right')
                            }}
                        >手机快捷登录</li>
                    </ul>
                    <Form className= { this.props.signInLeftactive ? 'active' : '' }>
                        <LoginInfo>
                            <ul>
                                <li>
                                    <input type="text" placeholder="手机号/邮箱/用户名"
                                        value = { this.props.userName }
                                        onChange = { this.props.handleUserName }
                                    />
                                </li>
                                <li>
                                    <input type="password" placeholder="密码"
                                        value = { this.props.passWord }
                                        onChange = { this.props.handlePassWd }
                                    />
                                </li>
                            </ul>
                            <a href="javascript:;"
                                onClick = { this.props.toSignIn }
                                className = { this.props.passWord ? 'active' : '' }
                            >登录</a>
                            <div className="other-action">
                                <div>
                                    <input id="remeberMe" type="checkbox"/>
                                    <label htmlFor="remeberMe"> 两周内免登陆</label>
                                </div>
                                <a href="javascript:;">忘记密码？</a>
                            </div>
                        </LoginInfo>
                    </Form>
                    <Form  className= { this.props.signInLeftactive ? '' : 'active' }>
                        <LoginInfo>
                            <ul>
                                <li>
                                    <input type="text" placeholder="请输入手机号码"/>
                                </li>
                                <li>
                                    <input type="password" placeholder="请输入验证码"/>
                                    <span>获取验证码</span>
                                </li>
                            </ul>
                            <a href="javascript:;">登录</a>
                            <div className="other-action">
                                <div>
                                    <input id="remeberMe" type="checkbox"/>
                                    <label htmlFor="remeberMe"> 两周内免登陆</label>
                                </div>
                                <a href="javascript:;">忘记密码？</a>
                            </div>
                        </LoginInfo>
                    </Form>
                    <WapApp>
                        <h3>第三方账号快速登录</h3>
                        <ThirdApp>
                            <div>
                                <img src={tencent} alt=""/>
                            </div>
                            <div>
                                <img src={taobao} alt=""/>
                            </div>
                            <div>
                                <img src={sina} alt=""/>
                            </div>
                        </ThirdApp>
                        <Protection>
                            <li><img src={unexpress} alt=""/>全场包邮</li>
                            <li><img src={search} alt=""/>100%人工质检</li>
                            <li><img src={seven} alt=""/>7天放心退</li>
                        </Protection>
                    </WapApp>
                </WapLogin>
            </SignInWrap>
        )
    }
}

export default withRouter(SignInUi)