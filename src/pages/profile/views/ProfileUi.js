
import React from 'react'

import car from 'images/car.png'
import money from 'images/money.png'
import purse from 'images/purse.png'
import user from 'images/user.png'

import { withRouter } from 'react-router-dom'

import { Icon } from 'antd-mobile'

import {
    ProfileContainer,
    Header,
    UserTop,
    UserLogin,
    User,
    UserBox,
    UserItemHorizontal,
    UserItemHorizontalDiv,
    UserItem,
    UserItems,
    Foot,
    FootNav
} from './styledComponent'

export default withRouter((props) => {
    // console.log(props)
    return (
        <ProfileContainer>
            <Header>
                <UserTop>
                    <Icon type="left"
                        size = 'lg'
                        color = '#fff'
                        style = {{
                            position : 'absolute',
                            left : '.06rem',
                            top : '.06rem',
                        }}    
                        onClick = {() => {
                            props.history.go(-1)
                        }}
                    />
                    <span>个人中心</span>
                    <em className="signOut"
                        onClick = { props.toSignOut }
                        style = { 
                            props.hasSignIn ? { display : 'block' } : { display : 'none' }       
                        }
                    >退出</em>
                </UserTop>
                <UserLogin
                    style = { 
                        props.hasSignIn ? { display : 'none' } : { display : 'block' }       
                    }
                >
                    <a href="javascript:;" className="signLeft">注册</a>
                    <i></i>
                    <a href="javascript:;"
                        className="signRig"
                        onTouchStart = { () => {
                            props.history.push('/user/signIn')
                        } }
                    >登录</a>
                </UserLogin>
                <User
                    style = { 
                        props.hasSignIn ? { display : 'block' } : { display : 'none' }       
                    }
                >
                    <div className="head_img">
                        <img src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg" alt=""/>
                    </div>
                    <div className="message">
                        <p className="tel">jp_36265e9d9</p>
                        <div className="message_detal">
                            <span>我的账户></span>
                        </div>
                    </div>
                </User>
                <UserBox>
                    <UserItemHorizontalDiv>
                        <UserItemHorizontal>
                            <span>我的订单</span>
                            <span className="label">全部订单</span>
                        </UserItemHorizontal>
                    </UserItemHorizontalDiv>
                    <UserItem>
                        <a href="javascript:;">
                            <img src={purse} alt=""/>
                            <span>代付款</span>
                        </a>
                        <a href="javascript:;">
                            <img src={user} alt=""/>
                            <span>代成团</span>
                        </a>
                        <a href="javascript:;">
                            <img src={car} alt=""/>
                            <span>代收货</span>
                        </a>
                        <a href="javascript:;">
                            <img src={money} alt=""/>
                            <span>退款/售后</span>
                        </a>
                    </UserItem>
                    <UserItems>
                        <UserItemHorizontal>
                            <span>我的优惠券</span>
                        </UserItemHorizontal>
                        <UserItemHorizontal>
                            <span>我的收藏</span>
                        </UserItemHorizontal>
                        <UserItemHorizontal>
                            <span>我的拼团</span>
                        </UserItemHorizontal>
                        <UserItemHorizontal>
                            <span>我的免单券</span>
                            <span className="label">0张</span>
                        </UserItemHorizontal>
                        <UserItemHorizontal>
                            <span>借钱</span>
                            <span className="label">新用户免费领1000张</span>
                        </UserItemHorizontal>
                    </UserItems>
                    <UserItems>
                        <UserItemHorizontal>
                            <span>客服中心</span>
                        </UserItemHorizontal>
                        <UserItemHorizontal>
                            <span>关于卷皮</span>
                        </UserItemHorizontal>
                    </UserItems>
                </UserBox>
                <Foot>
                    <FootNav>
                        <a href="javascript:;">返回首页</a>
                        <a href="javascript:;">客户端</a>
                        <a href="javascript:;">电脑版</a>
                    </FootNav>
                </Foot>
            </Header>
        </ProfileContainer>
    )
})