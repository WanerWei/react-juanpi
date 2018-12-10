
import styled from 'styled-components'

import border from 'components/styled/border'

const CateWarp = styled.div`
    height : 100%;
    position : relative;
`

const CateHeader = border({
    component : styled.header`
        height : .44rem;
        background : #fff;
        position : relative;
        z-index: 100;
    `,
    width : '0 0 1px 0',
    color : "#ebebeb"
})

const FixedTop = styled.div`
    height :100%;
    span {
        display: block;
        font-size : .18rem;
        color : #333;
        width : 100%;
        text-align : center;
        line-height : .44rem;
        padding : 0 .36rem;
    };
    .left {
        position : absolute;
        color: #444;
        left : .15rem;
        font-size : .28rem;
        font-weight : 100;
    }
    .menu {
        position : absolute;
    }
`

const GoodsSortScrollBox = styled.div`
    position: relative;
    z-index: 100;
    .goods-sort {
        height : .4rem;
        width : 100%;
        background : #fff;
        .goods-sort-box {
            font-size : .14rem;
            padding : .05rem 0 ;
            ul {
                li {
                    float : left;
                    width :20%;
                    text-align : center;
                    line-height : .3rem;
                    color : #666;
                    &.active {
                        color : #ff464e;
                    }
                }
            }
        }
    }
    >div:nth-child(2) {
        display : none;
        &.active {
            display: block;
            padding : .1rem .18rem;
            background : #f4f4f8;
            div {
                font-size : .14rem;
                padding : .05rem .1rem;
                text-align: center;
                display : inline-block;
                margin-right : .12rem;
                border: .01rem solid #dbdbdb;
                &.active {
                    border-color: #ff464e;
                    color: #ff464e;
                }
            }
        }
    }
`

const Goods = styled.section`
    background : #f9f9f9;
    height: 79.3103%;
    >div{
        z-index: 10;
    }
    ul {
        background : #f9f9f9;
        display : flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            background : #fff;
            position : relative;
            float : left;
            width : 49.5%;
            margin-top : .02rem;
            >div {
                position : relative;
                padding-bottom : 100%;
                overflow : hidden;
                img {
                    position : absolute;
                    top : 0;
                    bottom : 0;
                    width :100%;
                }
                em {
                    display:none;
                    &.active {
                        display : block;
                        position : absolute;
                        top : 50%;
                        left : 50%;
                        width : .7rem;
                        height : .7rem;
                        margin-left : -.35rem;
                        margin-top : -.35rem;
                        border-radius : 50%;
                        font-family: "微软雅黑";
                        color : #fff;
                        text-align : center;
                        line-height : .7rem;
                        border : 0.01rem solid hsla(0,0%,100%,.7);
                        background: rgba(0,0,0,.65);
                        font-size : .14rem;
                    }
                }
            }
            .list-price {
                padding : 0 .08rem;
                height : .24rem;
                position : relative;
                line-height : .28rem;
                .price-new {
                    font-size : .15rem;
                    margin-right : .04rem;
                    color: #ff464e;
                }
                del {
                    font-size : .11rem;
                    color : #bbb;
                    text-decoration: line-through;
                }
                .only-time {
                    position : absolute;
                    right : .08rem;
                    font-size : .11rem;
                    top : 0;
                    color : #bbb;
                }
            }
            h3 {
                margin : .02rem 0 0.02rem .08rem;
                color: #333;
                font-size : .12rem;
                height : .2rem;
                width : 96%;
                line-height : .2rem;
                font-weight : normal;
                overflow : hidden;
                white-space : nowrap;
                text-overflow : ellipsis;
            }
        }
    }
`

const Footer = styled.div`
    margin-top : .1rem;
    background: #fff;
    height : .91rem;
    position : relative;
    h2 {
        font-size: .12rem;
        height: .24rem;
        line-height: .24rem;
        top: .2rem;
        color: #bbb;
        padding: 0 .4rem;
        font-weight: 400;
        text-align : center;
    }
`

const BackTop = styled.div`
    position : fixed;
    right: 4%;
    bottom : .3rem;
    z-index: 300;
    width : .4rem;
    height : .4rem;
    background: #fff;
    text-align : center;
    border-radius : 50%;
    img {
        width :.24rem;
        height : .24rem;
        margin-top : .08rem;
    }
`

export {
    CateWarp,
    CateHeader,
    FixedTop,
    GoodsSortScrollBox,
    Goods,
    Footer,
    BackTop
}
