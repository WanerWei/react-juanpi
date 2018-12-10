
import React from 'react'

import { connect } from 'react-redux'

import CateListUi from './CateListUi'

import { loadInfosAsync } from '../actionCreator'


const mapState = (state) => {
    return {
        // 数据 列表
        cateLists : state.cateList.cateLists,
        // cateLists : state.cateList.getIn(['cateLists'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadInfos() {
            dispatch(loadInfosAsync)()
        }
    }
}

class CateListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            currentIndex : 0, 
        }

        this.tabSwitch = this.tabSwitch.bind(this)
    }

    render () {
        return (
            <CateListUi 
                { ...this.props }
                currentIndex = { this.state.currentIndex }
                tabSwitch = { this.tabSwitch }
            ></CateListUi>
        )
    }

    componentDidMount () {
        this.props.loadInfos()
    }

    tabSwitch (i) {
        this.setState({
            currentIndex : i
        })
    }
}

export default connect(mapState, mapDispatch)(CateListContainer)