import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class QuestionResult extends Component {
  render() {
    const { question, userAnswer } = this.props

    const optionOneAnswers = question.optionOne.votes.length
    const optionTwoAnswers = question.optionTwo.votes.length
    const totalAnswers = optionOneAnswers + optionTwoAnswers
    const optionOnePercent = ((optionOneAnswers / totalAnswers) * 100).toFixed(0)
    const optionTwoPercent = ((optionTwoAnswers / totalAnswers) * 100).toFixed(0)

    // TODO: there is an opportunity to create a separate QuestionResultOption component

    return (
      <Fragment>
        <p className="text-bold">Results</p>
        <div className={userAnswer === "optionOne" ? "callout secondary" : "callout"}>
          {userAnswer === "optionOne"
            ? <div className="badge question-badge">You vote</div>
            : null
          }
          <p>Would you rather {question.optionOne.text} ?</p>
          <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
            <span className="progress-meter" style={{ width: optionOnePercent + '%' }} >
              {optionOnePercent > 0
                ? <span className="progress-meter-text">{optionOnePercent}%</span>
                : null
              }
            </span>
          </div>
          <p className="text-center text-bold text-small">
            {optionOneAnswers} out of {totalAnswers} votes
          </p>
        </div>
        <div className={userAnswer === "optionTwo" ? "callout secondary" : "callout"}>
          {userAnswer === "optionTwo"
            ? <div className="badge question-badge">You vote</div>
            : null
          }
          <p>Would you rather {question.optionTwo.text} ?</p>
          <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
            <span className="progress-meter" style={{ width: optionTwoPercent + '%' }} >
              {optionTwoPercent > 0
                ? <span className="progress-meter-text">{optionTwoPercent}%</span>
                : null
              }
            </span>
          </div>
          <p className="text-center text-bold text-small">
            {optionTwoAnswers} out of {totalAnswers} votes
          </p>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  const question = questions[id]
  const userAnswer = users[authedUser].answers[question.id]

  return {
    userAnswer,
    question
  }
}

export default connect(mapStateToProps)(QuestionResult)