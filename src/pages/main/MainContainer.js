import React, { Component } from 'react'
import { TabBar }  from 'antd-mobile'

import home from 'images/home.png'
import homeActive from 'images/homeActive.png'
import category from 'images/category.png'
import categoryActive from 'images/categoryActive.png'
import cart from 'images/cart.png'
import cartActive from 'images/cartActive.png'
import profile from 'images/profile.png'
import profileActive from 'images/profileActive.png'

import { HomeContainer as Home } from 'pages/home'
import { ProfileContainer as Profile } from 'pages/profile'
import { CateListContainer as Category } from 'pages/cateList'
import { CartContainer as Cart } from 'pages/cart'
import { BrandContainer as Brand } from 'pages/brandSpecialSale'

import { withRouter } from 'react-router-dom'

export class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab : 'home',
            fullScreen : true
        }
    }

    render() {
        return (
            <div style={ this.state.fullScreen ? { position : 'fixed', height : '100%', width : '100%', top : 0 } : { height: 400 } }>
                <TabBar
                    prerenderingSiblingsNumber= '0'
                    unselectedTintColor= "#333"
                    tintColor= "#ff464e"
                    barTintColor = '#fff'
                >
                    <TabBar.Item
                        title= "首页"
                        key = 'home'
                        icon= {
                            <div style={{
                                width : '24px',
                                height : '24px',
                                background : `url(${home}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selectedIcon = {
                            <div style={{
                                width: '24px',
                                height : '24px',
                                background : `url(${homeActive}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selected = {this.state.selectedTab === 'home'}
                        onPress = {() => {
                            this.setState({
                                selectedTab : 'home'
                            })
                        }}
                    >
                        <Home></Home>
                        {/* <Brand></Brand> */}
                    </TabBar.Item>
                    <TabBar.Item
                        title= "分类"
                        key = 'category'
                        icon= {
                            <div style={{
                                width : '24px',
                                height : '24px',
                                background : `url(${category}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selectedIcon = {
                            <div style={{
                                width: '24px',
                                height : '24px',
                                background : `url(${categoryActive}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selected = {this.state.selectedTab === 'category'}
                        onPress = {() => {
                            this.setState({
                                selectedTab : 'category'
                            })
                        }}
                    >
                    <Category></Category>
                    </TabBar.Item>
                    <TabBar.Item
                        title= "购物车"
                        key = 'cart'
                        icon= {
                            <div style={{
                                width : '24px',
                                height : '24px',
                                background : `url(${cart}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selectedIcon = {
                            <div style={{
                                width: '24px',
                                height : '24px',
                                background : `url(${cartActive}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selected = {this.state.selectedTab === 'cart'}
                        onPress = {() => {
                            this.setState({
                                selectedTab : 'cart'
                            })
                        }}
                    >
                        <Cart></Cart>
                    </TabBar.Item>
                    <TabBar.Item
                        title= "我的"
                        key = 'profile'
                        icon= {
                            <div style={{
                                width : '24px',
                                height : '24px',
                                background : `url(${profile}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selectedIcon = {
                            <div style={{
                                width: '24px',
                                height : '24px',
                                background : `url(${profileActive}) center center / 24px 24px no-repeat`
                            }}
                            />
                        }
                        selected = {this.state.selectedTab === 'profile'}
                        onPress = {() => {
                            this.setState({
                                selectedTab : 'profile'
                            })
                        }}
                    >
                    <Profile></Profile>
                    </TabBar.Item>
                </TabBar>
            </div>                            
        )
    }
}

export default withRouter(MainContainer)