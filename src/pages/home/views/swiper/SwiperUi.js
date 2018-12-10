
import React from 'react'

// swiper插件
import { Carousel } from 'antd-mobile'

import {
    SwiperContainer
} from './styledComponent'

export default (props) => {
    return (
        <SwiperContainer>
            <Carousel
                autoplay={true}
                infinite
            >
            { props.slides.map(val => (
                <img
                key={val.id}
                src={val.pic}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
          ))}
        </Carousel>
        </SwiperContainer>
    )
}