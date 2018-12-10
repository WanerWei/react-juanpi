import styled from 'styled-components'

import border from 'components/styled/border.js'

const HomeContainer = styled.div`
    height : 100%;
`

const HomeWrap = styled.div`
    >div:nth-child(9) {
        position : relative
    }
`

const Search = styled.div`
    width : 100%;
    height : .44rem;
`

// const SwiperContainer = styled.div`
//     font-size : 0;
//     padding-bottom : 38.66666667%;
//     position: relative;
//     img {
//         position : absolute;
//         width : 100%;
//         height : 100%;
//     }
// `

const BannerBot = styled.div`
    height : .84rem;
    display : flex;
    justify-content : space-around;
    div {
        width : 25%;
        height : 100%;
        float : left;
        img {
            width : 100%;
        }
    }
`

const ActivityContainer = styled.div`
    height : 2.28rem;
`

const Activity = styled.div`
    width : 50%;
    height : 100%;
    float : left;
    overflow : hidden;
    img {
        width : 100%
    }
`

const ActivityRight = styled.div`
    width : 100%;
    height : 50%;
    overflow : hidden;
    img {
        width : 100%
    }
`

const ActivityBot = styled.div`
    height : 1.18rem;
    overflow : hidden;
    img {
        width : 100%;
    }
`

const BetterGoodsTit = styled.div`
    margin-top : .1rem;
    height : .48rem;
    overflow : hidden;
    img {
        width : 100%;
    }
`

const Choiceness = styled.div`
    background : #fff;
    height :.44rem;
    margin-top : .1rem;
    font-size : .16rem;
    ul {
        height : 100%;
        li {
            display : inline-block;
            color: #333;
            padding : 0 .1rem;
            div {
                line-height : .44rem;
                text-align :  center;
                display : inline-block;
                &.active {
                    color : #ff464e;
                    border-bottom : .02rem solid #ff464e;
                }
            }
        }

    }
`

const ChoicenessWrap = styled.div`
    min-height : 2.5rem;
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
    HomeWrap,
    Search,
    HomeContainer,
    // SwiperContainer,
    BannerBot,
    ActivityContainer,
    Activity,
    ActivityRight,
    ActivityBot,
    BetterGoodsTit,
    Choiceness,
    ChoicenessWrap,
    ChoicenessBox,
    BrandBox
}
