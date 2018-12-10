import styled from 'styled-components'

// import border from 'components/styled/border.js'


const ProfileContainer = styled.div`
    height : 100%;
`

const Header = styled.header`
    height : 1.44rem;
    background : url('https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png') no-repeat;
    background-size : cover;
    background-color : #666;
`

const UserTop = styled.div`
    height : .44rem;
    position : relative;
    text-align : center;
    line-height : .44rem;
    span {
        color : #fff;
        font-size : .18rem;
    }
    .signOut{
        position : absolute;
        right :.14rem;
        color : #fff;
        top : 0rem;
    }
`

const UserLogin = styled.div`
    height : 1rem;
    line-height : 1rem;
    position : relative;
    a{
        padding : 0 .48rem;
        font-size : .2rem;
        color : #fff;
        display : inline-block;
        position : absolute;
    }
    .signRig {
        left : 50%;
    }
    .signLeft {
        right : 50%;
    }
    i {
        position : absolute;
        left : 50%;
        background : #fff;
        width : .01rem;
        height : .2rem;
        top : .4rem;
    }
`

const User = styled.div`
    margin: .23rem 0 .25rem 0;
    overflow: hidden;
    width : 100%;
    .head_img {
        width: .54rem;
        height: .54rem;
        border-radius: 50%;
        float: left;
        margin-left: .18rem;
        border: .01rem solid #fff;
        overflow: hidden;
        img {
            width : 100%;
        }
    }
    .message {
        width : auto;
        float : left ;
        margin-left : .12rem;
        color: #fff;
        .tel {
            font-size : .16rem;
            line-height : .18rem;
        }
        .message_detal {
            font-size : .12rem;
            width : 100%;
            margin-top: .12rem;
        }
    }
`

const UserBox = styled.div`
    background: #f2f2f2;
`

const UserItemHorizontalDiv = styled.div`
    height : .48rem;
    background: #fff;
`

const UserItemHorizontal = styled.a`
    height : .48rem;
    margin: 0 .18rem;
    display : flex;
    justify-content : space-between;
    align-items : center;
    border-bottom : .005rem solid #ebebeb;
    /* ::after
        content: "";
        position: absolute;
        left: .59733rem;
        right: .59733rem;
        bottom: 0;
        height: 2px;
        background-color: #ebebeb;
        transform: scaleY(.5); */
    span {
        color : #333;
        font-size : .15rem;
    }
    .label {
        color : #999;
    }
`

const UserItem = styled.div`
    background : #fff;
    height : .79rem;
    display : flex;
    justify-content : space-around;
    padding : .15rem 0;
    a {
        display : flex ;
        flex-direction : column;
        justify-content : space-between;
        align-items : center;
        img {
            width : .28rem;
        }
        span {
            color : #666;
            font-size : .12rem;
        }
    }
`
const UserItems = styled.div`
    background : #fff;
    margin-top : .1rem;
`

const Foot = styled.footer`
    background : #fff;
    margin-top : .1rem;
`

const FootNav = styled.div`
    padding : .12rem 0;
    display : flex;
    justify-content : space-around;
    a {
        width :31%;
        color : #666;
        display : inline-block;
        font-size : .12rem;
        text-align : center;
    }
`


export {
    ProfileContainer,
    Header,
    UserTop,
    UserLogin,
    User,
    UserBox,
    UserItemHorizontal,
    UserItemHorizontalDiv,
    UserItem,
    UserItems,
    Foot,
    FootNav
}