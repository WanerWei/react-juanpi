
import { NavBar, Icon,Tabs, Grid, Toast } from 'antd-mobile';
import React ,{ Fragment }from 'react'

import {
    // NavBox,
    GoodBox,
    CateNav,
    BrandBot
} from './styledComponent'

import 'components/common/loading/style.css'

import { withRouter } from 'react-router-dom'

class BrandUi extends React.Component {

    constructor() {
        super()

        this.state = {
            navList : ['精选','鞋包配饰', '美妆', '运动', '母婴童装', '居家数码'],
            loadingBlock : 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loadingBlock : nextProps.nextProps
        })
    }

    render() {

        const tabs = [
            { title: '精选' },
            { title: '鞋包配饰' },
            { title: '美妆' },
            { title: '运动' },
            { title: '母婴童装' },
            { title: '居家数码' },
          ];

        const data1 = this.props.goods.map((value,index) => ({
            icon: value.pic_url,
            cprice : value.cprice,
            oprice : value.oprice,
            title : value.title,
            corner : value.corner
          }));
        // console.log(data1)

        return (
            <Fragment>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" 
                        color = "#333"
                        size = "md"
                    />}
                    onLeftClick={() => {
                        this.props.history.go(-1)
                    }}
                >品牌特卖</NavBar>
                    <Tabs
                        
                        tabs={tabs}
                        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}
                        onTabClick = { (tab: Models.TabData, index: number) => {
                            this.props.handleNavClick(tab, index)
                            let _this = this
                            setTimeout(() => {
                                _this.setState({
                                    loadingBlock : 1
                                })
                            },270)
                        } } 
                        tabBarActiveTextColor = '#ff464e'
                    />}>
                        
                        <GoodBox
                            style= {
                                this.state.loadingBlock ? {display : 'none'} : {display : 'block'} 
                            }
                        >
                            <div 
                                id = 'goodCon'
                                style={{ 
                                        // display: 'flex', 
                                        // alignItems: 'center', 
                                        // justifyContent: 'center', 
                                        height: '550px', 
                                        backgroundColor: '#fff' 
                                }}>
                                <CateNav
                                    style = {
                                        this.props.cate_key_info ? { display : 'block' } : { display : "none" }
                                    }
                                >
                                    { this.props.cate_key_info && this.props.cate_key_info.map((value) => {
                                        return (
                                            <span
                                                key={ value.cate_id }
                                            >{ value.title }</span>
                                        )
                                    }) }
                                </CateNav>
                                <Grid 
                                    data={data1} 
                                    columnNum={2} 
                                    itemStyle={{ 
                                        height : '2.5rem',
                                        background: 'rgba(255,255,255,.05)' 
                                    }} 
                                    renderItem={dataItem => (
                                        <div style={{ height : 'max-content' }}>
                                            <img 
                                                style = {
                                                    dataItem.corner ? { display : 'block' } : { display : "none" }                          
                                                }
                                            className="corner" src={ dataItem.corner } alt=""/>
                                          <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                                          <div 
                                            className= "goodDetail"
                                          style={{ color: '#888', fontSize: '12px', marginTop: '12px' }}>
                                            <p>
                                                <span className="cprice">{ dataItem.cprice }</span>
                                                <span className="oprice">￥{ dataItem.oprice }</span>
                                            </p>
                                            <p className="title">{ dataItem.title }</p>
                                          </div>
                                        </div>
                                      )}
                                />
                            </div>
                        </GoodBox>
                    </Tabs>
                {/* <NavBox>
                    <nav>
                        { this.state.navList.map((value, index) => {
                            return (
                                <div
                                    key={ index }
                                >{ value }</div>
                            )
                        }) }
                    </nav>
                </NavBox> */}
                <div id="loading"
                    style= {
                        this.state.loadingBlock ? {display : 'block'} : {display : 'none'} 
                    }
                >
                    <div className="loading">
                        <div className="roate"></div>
                    </div>
                </div>
                <BrandBot>
                    <div>
                        <img src="https://goods5.juancdn.com/bao/180228/9/8/5a96130e8150a14cc160d303_150x150.png" alt=""/>
                    </div>
                    <div>
                        <img src="https://goods6.juancdn.com/bao/180228/a/0/5a96136aa9fcf83bf17cbdbf_150x150.png" alt=""/>
                    </div>
                </BrandBot>
            </Fragment>

        )
    }
}

export default withRouter(BrandUi)