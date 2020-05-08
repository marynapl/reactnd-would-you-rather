import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionResult extends Component {
  render() {
    const { question } = this.props
    return (
      <div>Results</div>
    )
  }
}
const mapStateToProps = ({ questions, authedUser }, { id }) => {
  return {
    authedUser,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionResult)