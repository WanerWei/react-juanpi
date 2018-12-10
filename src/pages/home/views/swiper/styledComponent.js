import styled from 'styled-components'

const SwiperContainer = styled.div`
    font-size : 0;
    padding-bottom : 38.66666667%;
    position: relative;
    .slider {
        position: absolute !important;
        width: 100%;
        height: 100% !important;
        z-index: 99;
    }
    .slider img {
        width: 100%;
        height: 100%;
    }
    .slider-frame {
        height: 100% !important;
    }
    .slider-list {
        height: 100% !important;
    }
    .slider-slide {
        height: 100% !important;
    }
`

export {
    SwiperContainer
}