
import styled from 'styled-components'

import keyframes from 'styled-components'


// const NavBox = styled.div`
//     background : #fff;
//     line-height : .4rem;
//     width : 100%;
//     height: .4rem; 
//     position : fixed;
//     top : .45rem;
//     nav {
//         width :100%;
//         height: .4rem;
//         overflow-y : auto;
//         white-space : nowrap;
//         div {
//             display: inline-block;
//             text-align: center;
//             padding : 0 .5rem;
//             color: #333;
//             &.active {
//                 border-bottom: 0.01rem solid #ff464e;
//                 color : #ff464e
//             }
//         }
//     }
// `

const GoodBox = styled.div`
    #goodCon {
        .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content {
            padding : 0;
            height: auto;
        }
        .corner{
            position : absolute;
            left : 0;
            top : 0 ;
            width : .35rem;
            height  : .35rem;

        }
        .goodDetail {
            padding-left : .08rem;
            text-align : left;
            .cprice {
                color : #ff464e;
                margin-right : .04rem;
                font-size : .16rem;
            }
            .oprice{
                color : #bbb;
                text-decoration: line-through;
                font-size : .12rem;
            }
            .title {
                color: #333;
                word-break: break-all;
            }
        }
    }
`

const CateNav = styled.nav`
    height: .4rem;
    padding-top : .08rem;
    background-color: #f4f4f8;
    width: 100%;
    font-size: 0;
    white-space: nowrap;
    overflow-y: auto;
    box-sizing: border-box;
    span {
        display: inline-block;
        padding: 0.06rem 0.1rem;
        margin-left: 0.1rem;
        line-height: 1;
        background-color: #fff;
        font-size: 0.12rem;
        border-radius: 0.02rem;
        color: #333
    }
`

// const Loading = styled.div`
//     position: fixed;
//     text-align: center;
//     top: 30%;
//     width: 100%;
//     z-index: 201;
//     >div {
//         background: none;
//         height: auto;
//         margin: 0 auto;
//         overflow: hidden;
//         padding: 5% 8%;
//         position: relative;
//         width: 30%;
//         >div{
//             width: .62rem;
//             height: .62rem;
//             margin: 0 auto;
//             position: relative;
//             background-color: hsla(0,0%,100%,0.8);
//             border-radius: 0.21333rem;
//             >div:nth-child(1) {
//                 display: block;
//                 width: 100%;
//                 height: 100%
//             }
//         }
//     }
// `

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

const BrandBot = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 3;
    width: 100%;
    display: flex;
    background-color: #fff;
    height : .5rem;
    >div {
        flex: 1;
        img {
            display: block;
            width: .5rem;
            height : .5rem;
            margin : 0 auto;
        }
    }
`


export {
    // NavBox,
    GoodBox,
    CateNav,
    BrandBot,
    // Loading,
    // Rotate
}