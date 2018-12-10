
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    ChoicenessWrap,
    ChoicenessBox,
    BrandBox
} from './styledComponent.js'
import { withRouter } from 'react-router-dom'

import wrapperAnimate from 'components/highHolder/wrapAnimation'

class ChoicenessCon extends Component {
    render() {
        return (
            <ChoicenessWrap>
                <div id="loading"
                    style= {
                        this.props.choicenessLeft && (this.props.choicenessLeft.length !== 0 && this.props.choicenessRight.length !== 0 ) ?
                        { display : 'none' } :
                        { display : 'block' }                                                  
                    }
                >
                    <div className="loading">
                        <div className="roate"></div>
                    </div>
                </div>
                { this.props.choicenessLeftAcitve ? this.props.choicenessLeft.map((value) => {
                    return (
                        <ChoicenessBox
                            key= { value.goods_id }
                        >
                        <div className="goodImg">
                            <img src={ value.pic_url } alt=""/>
                            <BrandBox>
                                <img src={value.logo_url} alt=""/>
                            </BrandBox>
                        </div>
                        <div className="goodInfo">
                            <span>{ value.coupon_tips }</span>
                        </div>
                        <div className="goodTit">
                            { value.title }
                            <span>
                                { value.time_left }
                            </span>
                        </div>
                        </ChoicenessBox>
                    )
                }) : this.props.choicenessRight && this.props.choicenessRight.map((value) => {
                    return (
                        <ChoicenessBox
                            key= { value.goods_id }
                        >
                        <div className="goodImg">
                            <img src={ value.pic_url } alt=""/>
                            <BrandBox>
                                <img src={value.logo_url} alt=""/>
                            </BrandBox>
                        </div>
                        <div className="goodInfo">
                            <span>{ value.coupon_tips }</span>
                        </div>
                        <div className="goodTit">
                            { value.title }
                            <span>
                                { value.time_left }
                            </span>
                        </div>
                        </ChoicenessBox>
                    )
                })  }
            </ChoicenessWrap>
        )
    }
}

export default withRouter(wrapperAnimate(ChoicenessCon))