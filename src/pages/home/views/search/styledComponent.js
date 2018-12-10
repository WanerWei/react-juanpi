import styled from 'styled-components'

const SearchContainer = styled.div`
    padding : .08rem 0;
    background : #fff;
    position : relative;
`
const SearchMenu = styled.a`
    position : absolute;
    top : 0;
    right : 0;
    width : .44rem;
    height : .44rem;
    overflow : hidden;
    img {
        width: 100%;
    }
`

const SearchContent = styled.div`
    height: .28rem;
    background-color: #f2f2f2;
    margin: 0 .44rem 0 .14rem;
    display : flex;
    border-radius: .05rem;
    position : relative;
    line-height : .28rem;
    padding-left : .6rem;
    i {
        line-height : .28rem;
        position : absolute;
        left : .1rem
    };
    .juanpi {
        position : absolute;
        left : .34rem;
        top : -.01rem;
        img {
            width : .21rem;
            height : .15rem;
        }
    }
    .search {
        color: rgb(153, 153, 153);
        font-size : .12rem
    }
`

export {
    SearchContainer,
    SearchContent,
    SearchMenu
}