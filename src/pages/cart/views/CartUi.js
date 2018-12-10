
import React from 'react'

import { 
    AjaxHtml,
    FixTop,
    ItemEmpty,
    HasItem,
    ItemGroup,
    BagTotal
} from './styledComponent'

import { withRouter } from 'react-router-dom'

import { Icon } from 'antd-mobile';
import unChecked from 'images/check-01.png'
import checked from 'images/check.png'


class CartUi extends React.Component {

    constructor() {
        super()
        this.state = {
            // 能否编辑 num 的状态
            canCompileNum : false,
        }
        // 处理 编辑 num 的按钮的状态
        this.handleCompile = this.handleCompile.bind(this)
    }

    render () {
        console.log(this.props.hasCheckAll)
        return (
            <AjaxHtml>
                <FixTop>
                    <Icon type="left" 
                        style ={{
                            position : 'absolute',
                            color : '#999',
                            left : ".13rem",
                            top : '.13rem'
                        }}
                        onClick = { () => {
                            this.props.history.go(-1)
                        } }
                    />
                    <span className="tIndex">购物车</span>
                    <span className="tUser"
                        onClick= { this.handleCompile }
                    >编辑</span>
                </FixTop>
                
                <ItemEmpty
                    style ={
                        this.props.goods.size === 0 ? { display : 'block' } : { display : 'none' }
                    }
                >
                    <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt=""/>
                    <p>看到喜欢的就带回家吧</p>
                    <span>今日推荐</span>
                    
                </ItemEmpty>
                <HasItem
                    style ={
                        this.props.goods.size === 0 ? { display : 'none' } : { display : 'block' }
                    }
                >
                    { this.props.goods.map((value, index) => {
                        return (

                            <ItemGroup key={ index }>
                                <div className="good_radio">
                                    <i
                                        style = {
                                            value.isChecked ? { display : 'none' } : { display : 'block' }
                                        }
                                        onClick = { this.props.handleCheckOne.bind(this,value.title) }
                                    ><img src={ unChecked } alt=""/></i>
                                    <i
                                        style = {
                                            value.isChecked ? { display : 'block' } : { display : 'none' }
                                        }
                                        onClick = { this.props.handleCheckOne.bind(this,value.title) }
                                    ><img src={ checked } alt=""/></i>
                                </div>
                                <div className="good_info">
                                    <div className="pic">
                                        <img src={ value.imgSrc } alt=""/>
                                    </div>
                                    <div className="info_box">
                                        <p className="info_first">{ value.title }</p>
                                        <p className="info_second">米白色 L</p>
                                        <p className="info_third">
                                            <span className="oPri">￥{ value.fPri }</span>
                                            <del className="fPri">￥{ value.oPri }</del>
                                        </p>
                                        <div className="num">
                                            <div className="changeNum"
                                                style = {
                                                    this.state.canCompileNum ? { display : 'block' } : { display : 'none' }
                                                }
                                                >
                                                <span 
                                                    // onTouchStart = { this.handleReduce }
                                                    // className={ this.state.goodNum > 1 ? "" : 'native' }
                                                    >-</span>
                                                <span className="goodNum">{ value.num }</span>
                                                <span
                                                    // onTouchStart = { this.handleAdd }
                                                    >+</span>
                                            </div>
                                            <span className="showNum"
                                                style = {
                                                    this.state.canCompileNum ? { display : 'none' } : { display : 'block' }
                                                }
                                            >x{ value.num }</span>
                                        </div>
                                    </div>
                                </div>
                            </ItemGroup>
                        )
                    }) }

                    <BagTotal
                        // style = {
                        //     this.props.location.pathname === '/home' ? { bottom : '.5rem' } :  { bottom : '0' }
                        // }
                    >
                        <div className="sel-all"
                            onClick = { this.props.handleCheckAll }
                        >
                            <i
                                style = {
                                    this.props.hasCheckAll ? { display : 'none' } : { display : 'block' }
                                }
                            ><img src={ unChecked } alt=""/></i>
                            <i
                                style = {
                                    this.props.hasCheckAll ? { display : 'block' } : { display : 'none' }
                                }
                            ><img src={ checked } alt=""/></i>
                            <span>全选</span>
                        </div>
                        <div className="bag-money">
                            <p className="zje">合计<em>￥5.60</em></p>
                            <p className="s">总额￥1.34立减0.25</p>
                        </div>
                        <a href="javascript:void(0);">去结算(0)</a>
                    </BagTotal>

                </HasItem>
            </AjaxHtml>
        )
    }

    // 编辑栏
    handleCompile() {
        this.setState({
            canCompileNum : !this.state.canCompileNum
        })
    }
}

export default withRouter(CartUi)