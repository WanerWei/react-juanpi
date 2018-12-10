
import styled from 'styled-components'

import border from 'components/styled/border'

const ListContaioner = styled.div`
    background :#fff;
    height: 100%; 
    overflow-y : scroll;
`

const SearchBox = border({
    component : styled.div`
        margin : .12rem;
        position : relative;
        padding : .03rem 0 .03rem .1rem;
        img {
            width : .24rem;
            height : .24rem;
        }
        span {
            font-size : .13rem;
            margin-left : .1rem;
            color : #999;
        }
    `,
    width : '1px',
    color : "#bbb",
    radius : "3", 
})

const ListLeft = styled.div`
    float : left;
    width : 25%;
    font-size :  .14rem;
    color : #333;
    overflow : hidden;
    background: #f9f9f9;
    ul {
        padding-bottom : .49rem;
        text-align : left;
    }
`

const ListLeftLi = border({
    component : styled.li`
        line-height : .45rem;
        height : .45rem;
        position : relative;
        border-left: .02rem solid #f9f9f9;    
        text-indent : .15rem;
        &.active {
            color: #ff464e;
            border-left: .02rem solid #ff464e;
            background-color: #fff;
        }
    `,
    width: '0 0 1px 0',
    color : '#ebebeb',
})

const ListRight = styled.div`
    float : left;
    width : 75%;
    padding-left : 4%;
    font-size :  .12rem;
    color : #333;
    padding: .1rem 0 .5rem 0;
    position :relative;
`

const ListRightDiv = styled.div`
    width : .85rem;
    /* display : inline-block; */
    float : left;
    text-align : center;
    padding : 0 5%;
    position: relative;
    height : .94rem;
    /* overflow : hidden; */
    img {
        width : 100%;
    }          
    span {
        color : #333;
        line-height : .2rem;
    };
    >div {
        display : none;
        &.active {
            display : block;
            position : absolute;
            top : -.08rem;
            width : .3rem;
            height : .3rem;
            right : 0;
            text-align : center;
            line-height : .3rem;
            background : #ff464e;
            border-radius : 50%;
            color: #fff;
        }
    }
`


export {
    ListContaioner,
    SearchBox,
    ListLeft,
    ListLeftLi,
    ListRight,
    ListRightDiv
}