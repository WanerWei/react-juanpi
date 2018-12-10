import React, { Component } from 'react'

import SearchGlass from 'images/search.png'

import { withRouter } from 'react-router-dom'

import {
    SearchContainer,
    SearchContent,
    SearchMenu
} from './styledComponent'

class Search extends Component {
    render() {
        return (
            <SearchContainer>
                <SearchContent onTouchStart={ () => {
                    this.props.history.push('/search')
                } }>
                    <i>
                        <img src={SearchGlass} alt=""/>
                    </i>
                    <span  className="juanpi">
                        <img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt=""/>
                    </span>
                    <span className="search">搜索</span>
                </SearchContent>
                <SearchMenu>
                    <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt=""/>
                </SearchMenu>
            </SearchContainer>
        )
    }
}

export default withRouter(Search)