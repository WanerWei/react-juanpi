
import styled from 'styled-components'

import border from 'components/styled/border'

const SearchWrap = styled.div`
    height : 100%;
    background : #fff;  
`

const Header = border({
    component : styled.div`
        height : .44rem;
    `,
    width : '0 0 1px 0',
    color : "#ebebeb",
})

const SearchBlock = styled.div`
    padding : 0 .58rem 0 .14rem;
    height:100%;
    overflow: hidden;
    position : relative;
    >span {
        position : absolute;
        right : .12rem;
        top : .14rem;
        font-size : .15rem;
    }
    >div {
        margin-top : .1rem;
        height : .28rem;
        position : relative;
        background : #f2f2f2;
        border-radius : .03rem;
        padding-left : .31rem;
        .search {
            position : absolute;
            left : .07rem;
            top : .03rem;
        }
        .del {
            position : absolute;
            right : .07rem;
            top : .02rem;
            img {
                width : .12rem;
                height : .12rem;
            }

        }
        input {
            background : #f2f2f2;
            height : 100%;
            width : 100%;
            font-size : .12rem;
            border : none;
            color : #999;
        }    
    }
`

const Search = styled.div`
    padding : 0 .14rem;
    margin-top : .14rem;
    p {
        color : #999;
        font-size : .14rem;
    }
    ul {
        a {
            color : #ff464e;
            font-size : .12rem;
            padding : .05rem .1rem;
            display : inline-block;
            background-color : #f4f4f4;
            border-radius : .03rem;
            margin : .08rem .1rem 0 .03rem;
        }
    }
`


export {
    SearchWrap,
    Header,
    SearchBlock,
    Search
}