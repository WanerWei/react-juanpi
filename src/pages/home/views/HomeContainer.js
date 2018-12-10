
import React, { Component } from 'react'

import HomeUi from './HomeUi'

import { loadInfosAsync } from '../actionCreator'
import { loadChoicenessLeftAsync, loadChoicenessRightAsync } from '../actionCreator'

import BScroll from 'better-scroll'

import { Toast } from 'antd-mobile'

import { connect } from 'react-redux'

const mapState = (state) => {
    return {
        slides : state.home.slides,
        BannerBotImgs : state.home.BannerBotImgs,
        activities : state.home.activities,
        fullReductionImg : state.home.fullReductionImg,
        betterGoodsTit : state.home.betterGoodsTit,
        choicenessLeft : state.home.choicenessLeft,
        choicenessRight : state.home.choicenessRight
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadInfos() {
            // 派发任务，获取数据
            dispatch(loadInfosAsync)()
        },

        // 加载 精选专场
        loadChoicenessLeft () {
            dispatch(loadChoicenessLeftAsync)()
        },

        // 加载 精选单品
        loadChoicenessRight () {
            dispatch(loadChoicenessRightAsync)()
        }
    }
}

class HomeContainer extends Component {

    constructor() {
        super()
        this.state = {
            info : '',
            // ul状态
            choicenessLeftAcitve : true,
            // 加载 图 的装态
            // fixedUl
            showFixed : 0
        }

        // this.choicenessSwitch = this.choicenessSwitch.bind(this)
    }

    render () {
        return (
            <HomeUi 
                {...this.props} 
                showFixed = { this.state.showFixed }
                choicenessLeftAcitve={this.state.choicenessLeftAcitve}
                // 将方法传给子组件
                choicenessSwitch = {this.choicenessSwitch.bind(this)}
            >
            </HomeUi>
        )
    }

    // 挂载DOM后
    async componentDidMount() {
        // 开始请求数据
        Toast.loading('加载中~');

        await this.props.loadInfos()
        await this.props.loadChoicenessLeft()

        Toast.hide();

        this.bScroll = new BScroll('.homeContainer', {
            probeType : 2,
            click : true
        })

        this.bScroll.refresh()


        // let _this = this
        // this.bScroll.on('scroll', function (){
        //     let y = this.y

        //     if(y < -1000) {
        //         _this.setState({
        //             showFixed : 1
        //         })
        //     }else {
        //         _this.setState({
        //             showFixed : 0
        //         })
        //     }
        // })
    }

    // 将接收子组件执行此方法后传来的值
    choicenessSwitch (opt) {
        this.setState({
            choicenessLeftAcitve : opt === "left" ? true : false
        })

        if( opt === 'left' ) {
            this.props.loadChoicenessLeft()
        } else {
            this.props.loadChoicenessRight()
        }
    }
}

// 将 store 与 component 连接
export default connect(mapState,mapDispatch)(HomeContainer)
