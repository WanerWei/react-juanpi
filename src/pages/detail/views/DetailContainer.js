import React from 'react'
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {
    DetailWrap,
    GoodImg,
    GoodDetail,
    GoodMore,
    GoodExpress,
    PayBar,
    GoodType,
    ChooseTypeCon,
    ChooseType,
    TypePri,
    TypeSize,
    TypeDiv,
    Num,
    Confirm
} from './styledComponent'

import { Icon } from 'antd-mobile';

import { addToCartSync } from '../actionCreator'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

const mapState = (state) => {
    return {
        // cartGoodsNum : state.cart.goods.length,
        cartGoodsNum: state.cart.get('goods').size
    }
}

const mapDispatch = (dispatch) => {
    return {
        addCart(info) {
            // 直接派发一个同步任务
            dispatch(addToCartSync(info))
        }
    }
}

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class DetailContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            goodNum: 1,
            info: {},
            sku: [],
            typeMaskBlock: false,
            modal1: false,
            modal2: false,
        }

        console.log(this.state)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleReduce = this.handleReduce.bind(this)
        // this.handleTypeMask = this.handleTypeMask.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <DetailWrap>
                <WingBlank>

                    <Modal
                        popup
                        visible={this.state.modal2}
                        onClose={this.onClose('modal2')}
                        animationType="slide-up"
                    >
                        <ChooseType>
                            <TypePri>
                                <div className="goodImg"><img src="https://goods6.juancdn.com/goods/170920/a/a/59c233ff8150a1439c3bd2c7_800x800.jpg?imageMogr2/thumbnail/145x145!" alt="" /></div>
                                <div className="pri">
                                    <p className="priNum">￥99</p>
                                    <p className="choosedType">已选择 鲜红 88</p>
                                </div>
                                <Icon type="cross"
                                    style={{
                                        position: 'absolute',
                                        color: '#999',
                                        right: ".13rem",
                                        top: '.13rem',
                                    }}
                                    // onTouchStart = { this.handleTypeMask.bind(this, 0) }
                                    onClick={this.onClose('modal2')}
                                />
                            </TypePri>
                            <TypeSize>
                                <span>颜色</span>
                                <div className="ColorSku">
                                    <TypeDiv>天蓝</TypeDiv>
                                    <TypeDiv>天蓝</TypeDiv>
                                    <TypeDiv>天蓝</TypeDiv>
                                    <TypeDiv className="active">深红</TypeDiv>
                                </div>
                                <span>尺码</span>
                                <div className="ColorSku">
                                    <TypeDiv className="active">175</TypeDiv>
                                    <TypeDiv>170</TypeDiv>
                                    <TypeDiv>165</TypeDiv>
                                    <TypeDiv>160</TypeDiv>
                                </div>
                                <Num>
                                    <span>购买数量</span>
                                    <div>
                                        <span
                                            onTouchStart={this.handleReduce}
                                            className={this.state.goodNum > 1 ? "" : 'native'}
                                        >-</span>
                                        <span className="goodNum">{this.state.goodNum}</span>
                                        <span
                                            onTouchStart={this.handleAdd}
                                        >+</span>
                                    </div>
                                </Num>
                            </TypeSize>
                            <Confirm
                                onClick={this.addToCart}
                            >确定</Confirm>
                        </ChooseType>
                    </Modal>
                </WingBlank>
                <GoodImg>
                    <Icon type="left"
                        style={{
                            position: 'absolute',
                            color: '#999',
                            left: ".13rem",
                            top: '.13rem',
                            zIndex: 199
                        }}
                        onClick={() => {
                            this.props.history.go(-1)
                        }}
                    />
                    <div>
                        <img src={this.state.info.goods_origin_url || ''} alt="" />
                    </div>
                </GoodImg>
                <GoodDetail>
                    <div>
                        <div className="price">
                            <div className="priLeft">
                                <span className="oriPri">￥<i className="oriPriNum">{this.state.info.fprice || ''}</i></span>
                                <del>￥{this.state.info.oprice || ''}</del>
                                <span className="tip">包邮</span>
                            </div>
                            <span className="priRig">{this.state.info.join_number || ''}</span>
                        </div>
                        <div className="tit">
                            <p>{this.state.info.goods_title || ''}</p>
                            <span><img src="https://web.juanpi.com/static/media/collect.f8400f03.png" alt="" /></span>
                        </div>
                    </div>
                </GoodDetail>
                <GoodMore>
                    <GoodExpress>
                        <p>
                            <span>24小时发货</span>
                            <span>7天包退</span>
                            <span>售后补贴</span>
                        </p>
                    </GoodExpress>
                    <GoodType>
                        <p
                            // onTouchStart = { this.handleTypeMask.bind(this, 1) }
                            onClick={this.showModal('modal2')}
                        >请选择：颜色、尺码</p>
                        <Icon type="right"
                            style={{
                                position: 'absolute',
                                color: '#999',
                                right: ".13rem",
                                top: '.13rem'
                            }}
                        />
                    </GoodType>
                </GoodMore>
                <PayBar>
                    <div className="home"
                        onClick={() => {
                            this.props.history.push('/home')
                        }}
                    >
                        <i>
                            <img src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" alt="" />
                        </i>
                        <span>首页</span>
                    </div>
                    <div className="PopShoppingCart"
                        onClick={() => {
                            this.props.history.push('/cart')
                        }}
                    >
                        <div className="cartGoodsNum"
                            style={
                                this.props.cartGoodsNum ? { display: 'block' } : { display: 'none' }
                            }
                        >
                            {this.props.cartGoodsNum}
                        </div>
                        <i>
                            <img src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" alt="" />
                        </i>
                        <span>购物车</span>
                    </div>
                    <div className="toPay">
                        <div className="OneBtn">
                            立即购买
                        </div>
                        <div className="TwoBtn">
                            加入购物车
                        </div>
                    </div>
                </PayBar>
            </DetailWrap>
        )
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        let _this = this
        // 获取详情数据
        await fetch(`/getDetail/api/getMemberAboutInfo?goods_id=${id}`)
            .then(response => response.json())
            .then(result => {
                _this.setState({
                    info: result.skudata.info,
                    sku : result.skudata.sku
                },() => {
                    console.log(_this.state)
                })
            })
    }

    // 数目 ++
    handleAdd() {
        // 临时变量保存
        let numTemp = this.state.goodNum
        numTemp++
        this.setState({
            goodNum: numTemp
        })
    }

    // 数目--
    handleReduce() {
        // 临时变量保存
        let numTemp = this.state.goodNum
        if (numTemp <= 1) {
            return
        } else {
            numTemp--
            this.setState({
                goodNum: numTemp
            })
        }
    }

    // 选择款式蒙版的 display
    handleTypeMask(i) {
        if (i === 1) {
            this.setState({
                typeMaskBlock: true
            })
        } else {
            this.setState({
                typeMaskBlock: false
            })
        }
    }

    // 点击添加到购物车
    addToCart() {

        this.onClose('modal2')

        this.props.addCart({
            title: this.state.info.goods_title,
            oPri: this.state.info.oprice,
            fPri: this.state.info.fprice,
            imgSrc: this.state.info.goods_origin_url,
            num: this.state.goodNum,
            isChecked: false,
        })

        this.setState({
            typeMaskBlock: false
        })
    }
}

export default withRouter(connect(mapState, mapDispatch)(DetailContainer))