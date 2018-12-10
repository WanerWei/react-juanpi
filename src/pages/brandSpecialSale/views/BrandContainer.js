
import BrandUi from './BrandUi'

import { withRouter } from 'react-router-dom'

import React from 'react'

class BrandContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            cate_key_info : [],
            goods : [],
            goodsType : ['ppqc_jingxuan', 'xiezi', 'meizhuang', 'yundong', 'muyingtongzhuang', 'jujiashuma'],
            loadingBlock : 0
        }

        this.handleNavClick = this.handleNavClick.bind(this)
    }
    render() {
        return (
            <BrandUi
                // getBrandClearanceLimitAndAds = { this.state.getBrandClearanceLimitAndAds }
                cate_key_info = { this.state.cate_key_info }
                goods = { this.state.goods }
                handleNavClick = { this.handleNavClick }
                loadingBlock = { this.state.loadingBlock }
            ></BrandUi>
        )
    }

    async componentDidMount() {
        
        let _this = this
        // await fetch(`/api/getBrandClearanceOtherGoods?cate_key=xiezi&page=1&pf=m&brandclear=brandclear_127_419_A`)
        // .then(response => response.json())
        // .then(result => {
        //     console.log(result)
        //     _this.setState({
        //         cate_key_info : result.data.cate_key_info,
        //         goods : result.data.goods
        //     })
        // })
    }

    handleNavClick(tab, index) {
        let _this = this
        // setTimeout(() => {
            _this.setState({
                loadingBlock : 0
            })
        // },200)
        let type = this.state.goodsType[index]
        this.loadGoods(type)
    }

    async loadGoods (type) {
        let _this = this
        await fetch(`/api/getBrandClearanceOtherGoods?cate_key=${type}&page=1&pf=m&brandclear=brandclear_127_419_A`)
        .then(response => response.json())
        .then(result => {
            _this.setState({
                cate_key_info : result.data.cate_key_info,
                goods : result.data.goods
            })
        })
    }
}

export default withRouter(BrandContainer)