
import React, { Component } from 'react'

import DownloadContainer from './DownloadContainer'
import downloadImg from 'images/go_load_new.png'

class DownloadBox extends Component {
    render () {
        return (
            <DownloadContainer>
                <img src={ downloadImg } alt=""/>
            </DownloadContainer>
        )
    }
}

export default DownloadBox