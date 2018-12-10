import React from 'react'

import { CSSTransition } from 'react-transition-group'

// 高阶组件
export default (Comp) => {
    return class extends React.Component {
        render() {
            console.log(this.props.choicenessLeftAcitve)
            // let dir = this.props.location.state ? this.props.location.state.dir : 'left'
            return (
                <CSSTransition
                    in ={ !!this.props.match }
                    classNames={{
                        enter : 'animated',
                        enterActive : this.props.choicenessLeftAcitve ? 'fadeInRight' : 'fadeInLeft',
                        exit: 'animated',
                        exitActive: this.props.choicenessLeftAcitve ? 'fadeOutRight' : 'fadeOutLeft'
                    }}
                    timeout={1000}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Comp { ...this.props }></Comp>
                </CSSTransition>
            )
        }
    }
}