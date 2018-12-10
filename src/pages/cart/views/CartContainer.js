
import React from 'react'

import CartUi from './CartUi'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import { SignInContainer as SignIn } from 'pages/profile/signIn/SignInContainer'


// import { isSignIn } from 'middleWare/isSignIn'

import { handleCheckOne } from '../actionCreator'

const mapState = (state) => {
    return {
        goods : state.cart.getIn(['goods']),
        // goods : state.cart.goods,
        hasSignIn : state.hasSignIn.hasSignIn,
        hasCheckAll : state.cart.get('hasCheckAll'),
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleCheck(id) {
            dispatch(handleCheckOne(id))
        },
        checkAll(){
            // 扁平对象，直接dispatch
            dispatch({
                type : 'check_all',
            })
        }
    }
}

class CartContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            canToCart : props.hasSignIn
        }
        // console.log('Concontrustor')
        // console.log(this.state.canToCart)

        let _this = this
        // 异步的，执行结果时机有问题！！！！！！！！！
        // fetch('/isSignIn/api/user/isSignIn')
        // .then( response => response.json() )
        // .then( result => {
        //    if(!result.ret) {
        //     _this.props.history.push('/user/signIn')
        //    }
        // })
        
        // 防止重复绑定 ，
        this.handleAdd = this.handleAdd.bind(this)
        this.handleReduce = this.handleReduce.bind(this)
        this.handleCheckOne = this.handleCheckOne.bind(this)
        this.handleCheckAll = this.handleCheckAll.bind(this)
    }

    componentWillMount() {
        // console.log('Conwilmount')
        // console.log(this.props.hasSignIn)
        if(!this.state.canToCart) {
            this.props.history.push('/user/signIn')
        }
    }

    render () {
        // console.log('Conrender')
        // console.log(this.state.canToCart)
        // if(this.state.canToCart) {
        //     return (
        //         <CartUi
        //             goods = { this.props.goods}
        //         ></CartUi>
        //     )
        // } else {
        //     return null
        // }
        return (
            <CartUi
                goods = { this.props.goods}
                hasCheckAll = { this.props.hasCheckAll }
                handleCheckOne = { this.handleCheckOne }
                handleCheckAll = { this.handleCheckAll }
            ></CartUi>
        )
    }

    componentWillReceiveProps(nextProps) {
        // console.log('ConProps')
        // console.log(this.props,nextProps)
        this.setState({
            canToCart : nextProps.hasSignIn
        })
    }

    // shouldComponentUpdate (nextProps) {
    //     console.log(this.props,nextProps)
    //     if(this.state.canToCart === nextProps.hasSignIn) {
    //         console.log(111)
    //         return true
    //     }else {
    //         console.log(222)
    //         // this.props.history.push('/user/signIn')
    //         return false
    //     }
    // }

    // 数目 ++
    handleAdd(id) {
        // 临时变量保存
        // let numTemp = this.state.goodNum
        // numTemp++
        // this.setState({
        //     goodNum : numTemp
        // })
    }

    // 点击勾选
    handleCheckOne(id) {
        console.log(id)
        this.props.handleCheck(id)
    }

    // 点击全选
    handleCheckAll() {
        this.props.checkAll()
    }
    // 数目--
    handleReduce(id) {
        // 临时变量保存
        // let numTemp = this.state.goodNum
        // if(numTemp <= 1){
        //     return
        // }else {
        //     numTemp--
        //     this.setState({
        //         goodNum : numTemp
        //     })
        // }
    }

}

export default withRouter(connect(mapState, mapDispatch)(CartContainer))