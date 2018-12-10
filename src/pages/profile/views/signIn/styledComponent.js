
import styled from 'styled-components'

// import border from 'components/styled/border'

const SignInWrap = styled.div`
    height : 100%;
    background : #fff;
`
const Head = styled.div`
    height : .44rem;
`

const FixTop = styled.div`
    position : relative;
    background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
    span {
        display: block;
        width : 100%;
        padding : 0 .36rem;
        text-align : center;
        line-height : .44rem;
        color : #fff;
        font-size : .18rem;
    }
    i {
        position : absolute;
        left : .15rem;
        top : .1rem;
        display: block;
        width : .25rem;
        height : .25rem;
        img {
            width : 100%;
        }
    }
    a {
        position : absolute;
        top : .12rem;
        right : .15rem;
        color : #fff;
        font-size : .14rem;
    }
`
const WapLogin = styled.div`
    padding : 0 .12rem;
    font-size : .14rem;
    background: #fff;
    color : #999;
    >ul {
        height : .44rem;
        li {
            float : left;
            width : 50%;
            text-align : center;
            line-height : .44rem;
            position : relative;
            &.active {
                color : #ff464e;
                :after {
                    content : '';
                    position : absolute;
                    left : .3rem;
                    bottom: 0;
                    left: .30rem;
                    right: .30rem;
                    height: .01rem;
                    background: #ff464e;
                }
            }
        }
    }
`

const Form = styled.div`
    font-size : .14rem;
    display : none;
    &.active {
        display : block;
    }
`

const LoginInfo = styled.div`
    ul {
        li {
            border: (0 0 1px 0) #ebebeb;
            position : relative;
            input {
                height : .48rem;
                width : 100%;
                color : #333;
                border : none;
            }
            span {
                position : absolute;
                right : 0;
                top : .14rem;
            }
        }
    }
    >a {
        display : block;
        margin-top : .25rem;
        background: #dbdbdb;
        font-size : .18rem;
        text-align : center;
        color : #fff;
        height : .48rem;
        line-height : .48rem;
        &.active {
            background:#ff464e;
        }
    }
    .other-action {
        display : flex;
        justify-content : space-between;
        height : .38rem;
        line-height : .38rem;
        input {
            vertical-align : middle;
        }
        a {
            color : #999;
        }
    }
`

const WapApp = styled.div`
    margin-top : .5rem;
    font-size : .14rem;
    h3 {
        color : #999;
        text-align : center;
        font-weight : 400;
        font-size : .12rem;
        margin-bottom : .3rem;
    }
`

const ThirdApp = styled.div`
    padding : 0 .2rem .23rem .2rem;
    display : flex;
    justify-content : space-around;
    align-items : center;
    border-bottom: .005rem solid #ebebeb;
    div {
        width : .48rem;
        height : .48rem;
        overflow : hidden;
        img {
            width : 100%
        }
    }
`

const Protection = styled.ul`
    margin-top: .13rem;
    color: #c2c2c2;
    font-size : .11rem;
    height : .22rem;
    line-height : .22rem;
    display : flex;
    justify-content : space-between;
    li {
        display: inline-block;
        img {
            width : .22rem;
            height : .22rem;
            margin-right : .05rem;
        }
    }
`

export {
    SignInWrap,
    Head,
    FixTop,
    WapLogin,
    Form,
    LoginInfo,
    WapApp,
    ThirdApp,
    Protection
}