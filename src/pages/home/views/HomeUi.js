
import React from 'react'

import DownloadBox from 'components/downloadBox/DownloadBox'
import Swiper from './swiper/SwiperContainer'
import Search from './search/SearchContainer'

import ChoicenessLeft from './choiceness/ChoicenessLeft'
import ChoicenessRight from './choiceness/ChoicenessRight'


import { withRouter,Route } from 'react-router-dom'

import 'components/common/loading/style.css'

import {
    HomeContainer,
    HomeWrap,
    BannerBot,
    ActivityContainer,
    Activity,
    ActivityRight,
    ActivityBot,
    BetterGoodsTit,
    Choiceness,
    ChoicenessWrap,
    ChoicenessBox,
    BrandBox,
} from './styledComponent'

class HomeUi extends React.Component {

    constructor() {
        super()
        this.state = {
            loadingBlock : false,
            showFixed : 2
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(this.state)
    //     console.log(nextProps.showFixed)
    //     this.setState({
    //         showFixed : nextProps.showFixed
    //     })
    // }

    // shouldComponentUpdate(nextProps,nextState) {

    //     if(nextProps.showFixed === this.props.showFixed){
    //         return false
    //     }else {
    //         return true
    //     }
    //     // return true
    // }

    render () {
        return (
            <HomeContainer className="homeContainer">
                <HomeWrap>
                    <DownloadBox></DownloadBox>
                    <Search></Search>
                    <Swiper></Swiper>
                    
                    <BannerBot>
                        { this.props.BannerBotImgs.map((value) => {
                            return (
                                <div
                                    key= { value.child[0].bd_id }
                                    onClick = { () => {
                                        this.props.history.push('/brandSpecialSale')
                                    } }
                                >
                                    <img 
                                        src={ value.child[0].pic } 
                                        alt=""
                                    />
                                </div>
                            )
                        }) }
                    </BannerBot>
                    <ActivityContainer>
                        <Activity>
                            <img src={ this.props.activities[0] ? this.props.activities[0].child[0].pic : '' } alt=""/>
                        </Activity>
                        <Activity>
                            <ActivityRight>
                                <img src={this.props.activities[1] ? this.props.activities[1].child[0].pic : ''  } alt=""/>
                            </ActivityRight>
                            <ActivityRight>
                                <img src={this.props.activities[1] ? this.props.activities[1].child[1].pic : '' } alt=""/>
                            </ActivityRight>
                        </Activity>
                    </ActivityContainer>
                    <ActivityBot>
                        <img src={ this.props.fullReductionImg } alt=""/>
                    </ActivityBot>
                    <BetterGoodsTit>
                        <img src={ this.props.betterGoodsTit } alt=""/>
                    </BetterGoodsTit>
                    <Choiceness>
                        <ul>
                            {/* 把父组件传来的方法写在函数里 */}
                            <li onClick={ () => {
                                this.props.choicenessSwitch('left')
                                this.props.history.push('/home/choicenessLeft')
                            } }>
                                <div className={ this.props.choicenessLeftAcitve ? "active" : ''}>精品专场</div>
                            </li>
                            <li
                            onClick={ () => {
                                this.props.choicenessSwitch('right')
                                this.props.history.push('/home/choicenessRight')
                                
                            } }
                            >
                                <div className={ this.props.choicenessLeftAcitve ? "" : 'active'}>精选单品</div>
                            </li>
                        </ul>
                    </Choiceness>
                    <div>
                        <Route path="/home" exact render={ props => <ChoicenessLeft {...this.props} /> } />
                        <Route path="/home/choicenessLeft"  render={ props => <ChoicenessLeft {...this.props} /> } />
                        <Route path="/home/choicenessRight"  render={ props => <ChoicenessRight {...this.props} /> } />
                    </div>
                </HomeWrap>
            </HomeContainer>
        )
    }
}

export default withRouter(HomeUi)