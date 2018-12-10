import React, { Component } from 'react'

import ChoicenessCon from 'components/common/choiceness/ChoicenessCon'

class ChoicenessLeft extends Component {
  render () {
    console.log('choicenessLeft')
    return (
      <ChoicenessCon { ...this.props }></ChoicenessCon>
    )
  }
}

export default ChoicenessLeft