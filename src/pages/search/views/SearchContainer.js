
import React from 'react'

import search from 'images/search.png'

import { withRouter } from 'react-router-dom'

import {
    SearchWrap,
    Header,
    SearchBlock,
    Search
} from './styledComponent'

class SearchContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            inputValue : '',
            def_keywords : '',
            hot_category : [],
        }

        this.emptyInput = this.emptyInput.bind(this)
        // 表单value需要额外定义onChange事件
        this.handleInput = this.handleInput.bind(this)

        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <SearchWrap>
                <Header>
                    <SearchBlock
                    >
                        <div>
                            <i className="search"><img src={search} alt=""/></i>
                            <input type="text" 
                                // 字符串 方式
                                // ref="myInput"
                                // 回调 方式（挂载时自动聚焦）
                                ref={(input) => { this.textInput = input; }}
                                placeholder={ this.state.def_keywords } 
                                value={ this.state.inputValue } 
                                onChange = { this.handleInput }
                            />
                            <i className='del'
                                onTouchStart = { this.emptyInput }
                            ><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/del.png?69cb737e-1&sv=449ce9ee" alt=""/></i>
                        </div>
                        <span
                            onTouchStart = { () => {
                                this.props.history.goBack()
                            } }
                        >取消</span>
                    </SearchBlock>
                </Header>
                <Search>
                    <p
                        onClick = { this.handleClick }
                    >热搜(点击我获取输入框焦点)</p>
                    <ul>
                        { this.state.hot_category.map((value, index) => {
                            return (
                                <a href={ value.jump_url } key={ index }>{ value.text }</a>
                            )
                        }) }
                    </ul>
                </Search>
            </SearchWrap>
        )
    }

    async componentDidMount() {
        
        // 挂载 立即 聚焦
        // this.textInput.focus()

        let _this = this
        // 获取热词
        await fetch('/keywords/search?plateform=m&zy_ids=c4_l4_0&item=')
                .then(response => response.json())
                .then((result) => {
                    _this.setState({
                        def_keywords : result.def_keywords,
                        hot_category : result.hot_category
                    })
                })
    }
    
    // 清空输入框
    emptyInput () {
        this.setState({
            inputValue : ''
        })
    }

    // 表单value需要额外定义onChange事件
    handleInput(e) {
        this.setState({
            inputValue : e.target.value,
        })
    }

    // ref 输入框 聚焦
    handleClick() {
        // console.log(this.refs)
        // 使用原生的 DOM API 获取焦点
        // 字符串方式
        // this.refs.myInput.focus();
        // 回调 方式
        this.textInput.focus()
    }

}

export default withRouter(SearchContainer)