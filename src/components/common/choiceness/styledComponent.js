
import styled from 'styled-components'

import border from 'components/styled/border.js'


const ChoicenessWrap = styled.div`
    min-height : 2.6rem;
    overflow : hidden;
    background : #fff;
    padding-top : .02rem;
    position : relative;
`

const ChoicenessBox = styled.div`
    width : 50%;
    float :  left;
    padding-right : .02rem;
    padding-top : .02rem;
    .goodImg {
        width : 100%;
        height : 1.87rem;
        position : relative;
        img {
            width :100%;
            height : 100%;
        }
    }
    .goodInfo {
        padding : 0 .08rem;
        margin-top : .06rem;
        color : #bbb;
        span {
            color : #ff464e;
            font-size : .14rem;
        }
    }
    .goodTit {
        position : relative;
        color : #3b3b3b;
        padding : 0 .62rem 0 .08rem;
        margin-bottom : .12rem;
        font-size : .12rem;
        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
        span {
            position : absolute;
            top : 50%;
            transform: translateY(-50%);
            color: #bbb;
            right : .08rem;
            font-size : .1rem;
        }
    }
`

const BrandBox = border({
    component : styled.div`
        position : absolute !important;
        width :  .50rem;
        height : .25rem;
        overflow : hidden;
        background : #fff;
        bottom : -.12rem;
        right : .1rem;
        img {
            width :100%;
        }
    `,
    color : "#ebebeb"
})

export {
    ChoicenessWrap,
    ChoicenessBox,
    BrandBox
}