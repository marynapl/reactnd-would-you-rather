import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionForm from './QuestionForm'
import QuestionResult from './QuestionResult'

class QuestionPage extends Component {
  render() {
    const { id, author, isAnswered, avatarURL } = this.props

    return (
      <Fragment>
        <h1 className="show-for-sr">Question details</h1>
        <div className="card">
          <div className="card-divider">
            {
              isAnswered
                ? <p>Asked by <strong>{author}</strong></p>
                : <p><strong>{author}</strong> asks:</p>
            }
          </div>
          <div className="card-section">
            <div className="grid-x">
              <div className="cell auto">
                <img src={avatarURL} className="avatar" alt="avatar" />
              </div>
              <div className="cell small-9 padding-horizontal-1x margin-horizontal-1x border-left">
                {
                  isAnswered
                    ? <QuestionResult id={id} />
                    : <QuestionForm id={id} />
                }
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params
  const question = questions[id]
  const author = users[question.author].name
  const avatarURL = users[question.author].avatarURL
  const isAnswered = users[authedUser].answers.hasOwnProperty(id)

  return {
    id,
    isAnswered,
    author,
    avatarURL
  }
}

export default connect(mapStateToProps)(QuestionPage)