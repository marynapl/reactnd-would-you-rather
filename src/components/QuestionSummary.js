import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionSummary extends Component {
  render() {
    const { id, author, avatarURL, summary } = this.props
    return (
      <div className="card">
        <div className="card-divider">
          <h2><span className="text-bold">{author}</span> asks:</h2>
        </div>
        <div className="card-section">
          <div className="grid-x">
            <div className="cell small-3">
              Avatar
            </div>
            <div className="cell auto">
              <p className="text-bold">Would you rather</p>
              <p>&hellip;{summary}&hellip;</p>
              <Link to={`/questions/${id}`} className="button small hollow margin-bottom-0">View poll</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ users, questions }, { id }) => {
  const question = questions[id]
  const summary = question.optionOne.text
  const author = users[question.author].name
  const avatarURL = users[question.author].avatarURL

  return {
    id,
    summary,
    author,
    avatarURL
  }
}

export default connect(mapStateToProps)(QuestionSummary)