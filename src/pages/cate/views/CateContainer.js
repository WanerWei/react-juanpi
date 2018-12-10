
import React from 'react'

import fetchJsonp from 'fetch-jsonp'

import { Popover, NavBar, Icon } from 'antd-mobile';

import bScroll from 'better-scroll'
import { Toast } from 'antd-mobile';

import {
    CateWarp,
    CateHeader,
    FixedTop,
    GoodsSortScrollBox,
    Goods,
    Footer,
    BackTop
} from './styledComponent'

import { withRouter } from 'react-router-dom'

// 气泡 插件
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class CateContainer extends React.Component {

    constructor () {
        super()

        this.state = {
            cateGoods : [],
            visible: false,
            selected: '',
            cateTit : '',
            default_name : '',
            sub_cate_list : [],
            backTop : 0,
        }

        this.gotoTop = this.gotoTop.bind(this)
    }

    render () {
        return (
            <CateWarp>
                {/* <CateHeader>
                    <FixedTop>
                        <i className="left"
                            onTouchStart ={() => {
                                this.props.history.go(-1)
                            }}
                        >&lt;</i>
                        <span>羽绒棉服</span>
                    </FixedTop>
                </CateHeader> */}
                
                <NavBar
                    style = {{
                        position : 'relative',
                        zIndex : "100"
                    }}
                    mode="light"
                    rightContent={
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                        (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">首页</Item>),
                        (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>我的收藏</Item>),
                        (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                            <span style={{ marginRight: 5 }}>我的订单</span>
                        </Item>),
                        ]}
                        align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >

                        <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                        }}
                        >
                        <Icon type="ellipsis" 
                            style ={{
                                color : '#333'
                            }}
                        />
                        </div>
                    </Popover>
                    }
                >

                    <Icon type="left" 
                        style={{
                            position : "absolute",
                            color: "#444",
                            left : ".15rem",
                        }}
                        onClick ={() => {
                            this.props.history.go(-1)
                        }}
                    />
                    
                    { this.state.cateTit }
                </NavBar>
                <GoodsSortScrollBox>
                    <div className="goods-sort">
                        <div className="goods-sort-box">
                            <ul>
                                <li className="active">推荐</li>
                                <li>价格</li>
                                <li>销量</li>
                                <li>上新</li>
                                <li>筛选</li>
                            </ul>
                        </div>
                    </div>
                    <div className={ this.state.default_name ? 'active' : '' }>
                        <div className="active">{ this.state.default_name }</div>
                        { this.state.sub_cate_list.map((value) => {
                            return (
                                <div key={ value.id }>{ value.name }</div>
                            )
                        }) }
                    </div>
                </GoodsSortScrollBox>
                <Goods className='goodsScrollWrap'>
                    <div>
                        <ul>
                            { this.state.cateGoods.map((value, index) => {
                                return (
                                    <li
                                        key={ value.goods_code }
                                        onClick = { () => {
                                            this.props.history.push(`/goodDetail/${value.goods_id}`)
                                        } }
                                    >
                                        <div>
                                            <img src={ value.pic_url } alt=""/>
                                            <em
                                                // 有的不存在此项
                                                className={ value.status_txt ? "active" : '' }
                                            >{ value.status_txt }</em>
                                        </div>
                                        <p className="list-price">
                                            <span className="price-new">￥{ value.cprice }</span>
                                            <del>¥{ value.oprice }</del>
                                            <span className="only-time">{  value.residue }</span>
                                        </p>
                                        <h3>{ value.title }</h3>
                                    </li>
                                )
                            }) }
                        </ul>
                        <Footer>
                            <h2>copyright © 武汉奇米网络科技有限公司</h2>
                        </Footer>
                    </div>
                </Goods>
                <BackTop
                    style = {
                        this.state.backTop ? { display : 'block' } : { display : 'none' }                       
                    }

                    onClick = { () => {
                        this.gotoTop()
                    } }
                >
                    <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/back-top.png?4af681f3-1&sv=449ce9ee" alt=""/>
                </BackTop>
            </CateWarp>
        )
    }

    // 回到顶部
    gotoTop() {
        this.bScroll.scrollTo(0,0, 300)
    }

    // 气泡
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
    };

    // 气泡
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    async componentDidMount() {
        // let { id } = this.props.location.query || ''
        let { id } = this.props.match.params || ''
        let _this = this
        let pageNo = 1
        
        // 请求数据
        this.fetchGoodList(id, pageNo)
            
        // 商品类型 tit
        await fetch(`/cate/subcatelist?cate_id=${id}&pf=8&area=4&bi=222&source=null&front_cid=null`)
        .then(response => response.json())
        .then(result => {
            _this.setState({
                cateTit : result.name,
                default_name: result.default_name, 
                sub_cate_list : [...result.sub_cate_list]
            })
        })

        // new scroll
        this.bScroll = new bScroll('.goodsScrollWrap', {
            click : true,
            pullUpLoad : {
                threshold: 50
            },
            probeType: 1,
        })

        // 上拉刷新
        this.bScroll.on('pullingUp', () => {

            // 限制加载更多次数
            if(pageNo >=5) {
                Toast.info('别拉了，人家也是有底线的-_-',2)
                return
            }

            pageNo ++
            _this.fetchGoodList(id, pageNo)

            // 更新高度
            _this.bScroll.refresh()

            // 可以进行下次滚动
            _this.bScroll.finishPullUp()
        })

        // 监听滚动
        this.bScroll.on('scroll', function() {
            let y = this.y

            // 回到顶部 显示/隐藏的判断
            if(y <= -900) {
                // 节流？？防抖？？
                let timer = null
                timer = setTimeout(function() {
                    _this.setState({
                        backTop : 1
                    })
                },300)
            }else{
                let timer = null
                timer = setTimeout(function() {
                    _this.setState({
                        backTop : 0
                    })
                },300)
            }
        })
    }

    // list 数据 jsonp
    // 封装起来，刷新时也用
    async fetchGoodList(id, pageNo) {
        // 加载提示
        Toast.loading('Loading...',)
        let _this = this
        await fetchJsonp(`/gsort?key={"cdt":{"is_show_presale":"0","activity_type":["1","3","5","6","20"],"hot_show_type":1,"fcate":"${id}","sale_type":2},"order":{"show_stime":"desc","sales":"desc","fav":"desc","sort":"desc","cprice":"desc"}}&type=50&zhouyi_ids=p8_c4_l4_0&machining=danpin&page=${pageNo}&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback`)
        .then(response => response.json())
        .then(result => {
            let cateGoodsTemp = this.state.cateGoods
            _this.setState({
                cateGoods : [...cateGoodsTemp, ...result.list]
            })
        })
        // 手动关闭
        Toast.hide()
    }
}

export default withRouter(CateContainer)