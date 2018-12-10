
import React from 'react'

import search from 'images/search03.png'

import { withRouter } from 'react-router-dom'

import {
    ListContaioner,
    SearchBox,
    ListLeft,
    ListLeftLi,
    ListRight,
    ListRightDiv,
} from './styledComponent'

class CateListUi extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <ListContaioner>
                <SearchBox>
                    <img src={ search } alt=""/>
                    <span>搜索商品</span>
                </SearchBox>
                <ListLeft>
                    <ul>
                        { this.props.cateLists.map((value, index) => {
                            return (
                                <ListLeftLi 
                                key={ value.id }
                                className = { index === this.props.currentIndex ? "active" : ''}
                                onClick = { () => {
                                    this.props.tabSwitch(index)
                                } }
                                >
                                { value.name }   
                                </ListLeftLi>
                            )
                        }) }
                    </ul>
                </ListLeft>
                <ListRight>
                    { this.props.cateLists[this.props.currentIndex] && this.props.cateLists[this.props.currentIndex].secondCateList.map((value, index) => {
                        return (
                            <ListRightDiv
                                key = { value.id }
                                onClick = { () => {
                                    this.props.history.push(`/cateDetail/${value.id}`)
                                } }
                            >
                                <img src={ "https://s2.juancdn.com" + value.icon } alt=""/>
                                <span>{ value.name }</span>
                                <div className={ value.icon_type === "1" ? 'active' : ''}>HOT</div>
                            </ListRightDiv>
                        )
                    }) }
                </ListRight>
            </ListContaioner>
        )
    }
}

export default withRouter(CateListUi)