import styled from 'styled-components'

const AjaxHtml = styled.div`
    height : 100%;
`

const FixTop = styled.header`
    background : #fff;
    position : relative;
    height : .44rem;
    color: #333;
    .tIndex {
        display: block;
        text-align : center;
        font-size : .18rem;
        line-height : .44rem;
        width : 100%;
        height : .44rem;
        padding : 0 .38rem;
    }
    .tUser {
        position : absolute;
        right : .14rem;
        top : .1rem;
    }
`

const ItemEmpty = styled.div`
    margin : .25rem 0; 
    text-align : center;
    img {
        width : 1.4rem;
        margin-bottom : .12rem;
        display: block;
        margin : 0 auto;
    };
    >p {
        font-size : .16rem;
        color: #333; 
        margin-bottom : .14rem;
    };
    >span {
        display : inline-block;
        height : .4rem;
        line-height : .4rem;
        text-align : center;
        width : 1.38rem;
        color : #ff464e;
        border : .005rem solid #ff464e;
    }
`

const HasItem = styled.div`
    background : #fff;
`

const ItemGroup = styled.div`
    padding-left : .14rem;
    display : flex;
    align-items : center;
    overflow: hidden;
    .good_radio {
        width : .31rem;
        i { 
            display: inline-block;
            width : .2rem;
            height : .2rem;
            overflow :hidden;
            img {
                width :100%;
            }
        }
    }
    .good_info {
        padding : .16rem .14rem .16rem 0;
        border-bottom: 0.01rem solid #ebebeb;
        display : flex;
        align-items : center;
        overflow: hidden;
        position : relative;
        flex: 1;
        .pic {
            width : .9rem;
            height : .9rem;
            margin-right : .12rem;
            overflow : hidden;
            img {
                width :100%
            }
        }
        .info_box {
            height : .9rem;
            font-size : .14rem;
            .info_first {
                color: #333;
            }
            .info_second {
                margin-top : .06rem;
                color : #bbb;
            }
            .info_third {
                position : absolute;
                bottom: 0.16rem;
                .oPri {
                    color : #FF464E;
                    margin-right : .06rem;
                    font-size : .12rem;
                }
                .fPri {
                    font-size : .12rem;
                    text-decoration: line-through;
                    color: #999999;
                }
            }
            .num {
                position : absolute;
                right :0.14rem ;
                bottom: 0.24rem;
                .showNum {
                    color : #666;
                    font-size : .16rem;
                }
                .changeNum {
                    span{
                        display : inline-block;
                        width : .23rem;
                        height : .23rem;
                        background : #f7f7f7;
                        text-align : center;
                        line-height : .23rem;
                        color: #ff464e;
                        &.native {
                            color: #dbdbdb;
                        }
                    }
                    .goodNum {
                        color : #333;
                        padding : 0 .13rem;
                        width : auto;
                        height : auto;
                        background : #fff;
                    }
                }
            }
        }
    }
`

const BagTotal = styled.div`
    position : fixed;
    bottom: 0;
    left : 0;
    right: 0;
    margin : auto;
    background : #fff;
    .sel-all {
        font-size : .16rem;
        height : .48rem;
        line-height : .48rem;
        width : 25%;
        float : left ;
        color : #333;
        display : flex;
        align-items : center;
        justify-content : center;
        i {
            display: block;
            width : .2rem;
            height : .2rem;
            overflow : hidden;
            margin-right : .1rem;
            line-height : 1 !important;
            img {
                width : 100%;
            }
        }
    }
    .bag-money {
        font-size : .18rem;
        height : .48rem;
        width : 45%;
        text-align : right;
        float : left;
        padding-right : .05rem;
        .zje {
            font-size : .14rem;
            line-height: 1;
            display: inline-block;
            margin-top : .07rem;
        }
        .s {
            font-size : .12rem;
            color : #999;
        }
    }
    >a {
        display: block;
        float: right;
        width: 30%;
        height: .48rem;
        line-height: .48rem;
        background-color: #ff464e;
        font-size: .18rem;
        color: #fff;
        text-align: center
    }
`




export {
    AjaxHtml,
    FixTop,
    ItemEmpty,
    HasItem,
    ItemGroup,
    BagTotal
}