
import styled from 'styled-components'

import border from 'components/styled/border'

const DetailWrap = styled.div`
    height: 100%;
`

const GoodImg = styled.div`
    >div{
        position : relative;
        font-size : 0;
        padding-bottom : 100%;
        img {
            width : 100%;
            position : absolute;
            left :0 ;
            top : 0 ;
        }
    }
    .am-icon-md {
        width : .38rem !important;
        height : .38rem !important;
        color : #666 !important;
    }
`

const GoodDetail = styled.section`
    >div {
        background : #fff;
        padding : .12rem .14rem .1rem;
        .price {
            display : flex;
            justify-content : space-between;
            align-items : center;
            position : relative;
            .priLeft {
                .oriPri {
                    color: #ff464e;
                    .oriPriNum {
                        font-size : .24rem;
                    }
                }
                del {
                    color :#bbbbbb;
                    text-decoration: line-through;
                    font-size : .12rem;
                    margin-right : .1rem;
                }
                .tip {
                    font-size : .12rem;
                    background-color: rgb(255, 70, 78);
                    border-color: rgb(255, 70, 78);
                    color: rgb(255, 255, 255);
                    margin-top : -.06rem;
                    padding : .01rem .02rem;
                }
            }
            .priRig {
                color: #999;
                font-size : .12rem;
            }
        }
        .tit {
            margin:.04rem 0 .1rem 0;
            position : relative;
            p {
                font-size : .16rem;
                color : #333;
                width : 90%;
                line-height : .22rem;
            }
            span {
                display : inline-block;
                position : absolute;
                right : .05rem;
                top : .02rem;
                width: .24rem;
                height : .24rem;
                img {
                    width :100%;
                }
            }
        }
    }
`

const GoodMore = styled.div`

`

const GoodExpress = styled.div`
    background : #fff;
    padding : 0 .14rem;
    margin-top : .1rem;
    color : #666666;
    line-height : .48rem;
    height : .48rem;
    p {
        span {
            font-size : .12rem;
            padding-left : .08rem;
            margin-right : .14rem;
            position : relative ;
            &::after {
                position : absolute;
                content : '';
                top : 50%;
                margin-top : -.02rem;
                left : 0;
                width : .04rem;
                height : .04rem;
                background: #ff464e;
                opacity: 0.5;
                border-radius: 50%;
            }
        }
    }
`

const GoodType = styled.div`
    background : #fff;
    padding : 0 .16rem;
    margin-top : .1rem;
    color : #333333;
    line-height : .48rem;
    height : .48rem;
    position: relative;
    p {
        font-size : .15rem;
    }
`

const PayBar = styled.div`
    position : fixed;
    bottom: 0;
    display: flex;
    width :100%;
    background : #fff;
    .home , .PopShoppingCart {
        position : relative;
        height : .48rem;
        width : .72rem;
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        font-size : .12rem;
        color : #6b6b6b;
        position : relative;
        .cartGoodsNum {
            position : absolute;
            right : .16rem;
            top : .02rem;
            width : .15rem;
            height : .15rem;
            border-radius : 50%;
            text-align : center;
            line-height : .15rem;
            color : #fff;
            background : #ff464e;
        }
        i {
            width : .24rem;
            height : .24rem;
            img {
                width : 100%;
            }
        }
        &::after {
            content: '';
            position: absolute;
            width: 0.01rem;
            height: 100%;
            top: 0;
            right: 0;
            background: #e7e7e7
        }
    }
    .toPay {
        display : flex;
        flex : 1 1 auto;
        .OneBtn {
            color: #333;
            display : flex;
            justify-content :center;
            align-items : center;
            background : #ffffff;
            flex : 1 1 .24rem;
            font-size : .13rem;
        }
        .TwoBtn{
            display : flex;
            font-size : .13rem;
            flex: 1 1 auto;
            justify-content :center;
            align-items : center;
            background : #ff464e;
            color : #fff;
        }
    }
`

const ChooseTypeCon = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.45);
    z-index : 199;
`

const ChooseType = styled.div`
    /* width: 100%;
    background: #ffffff;
    position: absolute;
    bottom: 0; */
`

const TypePri = styled.div`
    display : flex;
    flex-direction: row;
    height : .72rem;
    position: relative;
    overflow : auto;
    .goodImg {
        position : absolute;
        left : .14rem;
        top : -.36rem;
        width : 1rem;
        height : 1rem;
        img {
            width : 100%;
        }
    }
    .pri {
        margin-left : 1.26rem;
        margin-top : .06rem;
        .priNum {
            color : #ff464e;
            font-size: 0.14rem;
            text-align: left;
        }
        .choosedType {
            color: #666;
            font-size: 0.12rem;
            text-align: left
        }
    }
`

const TypeSize = styled.div`
    padding : 0 .14rem;
    >span {
        color: #333;
        line-height : .3rem;
        font-size : .16rem;
    }
    .ColorSku {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
    }
`

const TypeDiv = border({
    component : styled.div`
        width: 1.06rem;
        height: .32rem;
        line-height: .34rem;
        text-align: center;
        font-size: 0.14rem;
        margin-top: 0.06rem;
        margin-bottom: 0.06rem;
        font-weight: 300;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 0.09rem;
        color: #333;
        &.active {
            background : #ff464e;
            color : #fff;
            border : none;
            ::after{
                border-width : 0;
            }
        }
    `,
    color : '#333'
})

const Num = styled.div`
    margin : .3rem 0;
    display : flex;
    justify-content : space-between;
    align-items : center;
    >span {
        color: #333;
        line-height : .3rem;
        font-size : .16rem;
    }
    div {
        span{
            display : inline-block;
            width : .3rem;
            height : .3rem;
            background : #f7f7f7;
            text-align : center;
            line-height : .3rem;
            color: #ff464e;
            &.native {
                color: #dbdbdb;
            }
        }
        .goodNum {
            color : #333;
            padding : 0 .18rem;
            width : auto;
            height : auto;
            background : #fff;
        }
    }
`

const Confirm = styled.div`
    height: .48rem;
    line-height: .48rem;
    font-size: 0.18rem;
    color: #fff;
    text-align: center;
    background: #ff464e;
`

export {
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
}