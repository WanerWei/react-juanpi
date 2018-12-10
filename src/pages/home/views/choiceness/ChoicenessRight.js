import React, { Component } from 'react'

import ChoicenessCon from 'components/common/choiceness/ChoicenessCon'

class ChoicenessRight extends Component {
  render () {
    return (
      <ChoicenessCon { ...this.props }></ChoicenessCon>
    )
  }
}

export default ChoicenessRight