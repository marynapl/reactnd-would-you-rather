import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import QuestionCard from './QuestionCard'

class Dashboard extends Component {
  state = { 
    hasAnswered: false 
  }
  handleChange = (hasAnswered) => {
    this.setState(() => ({
      hasAnswered
    }))
  }
  render() {
    const { hasAnswered } = this.state
    return (
      <Fragment>
        <h1 className="show-for-sr">Dashboard</h1>
        <div className="border-bottom margin-bottom-1x">
          <ul className="menu expanded text-center text-small">
            <li>
              <Link to=""
                onClick={() => this.handleChange(false)}
                className={hasAnswered ? "" : "active"}>
                Unanswered Questions
              </Link>
            </li>
            <li>
              <Link to=""
                onClick={() => this.handleChange(true)}
                className={hasAnswered ? "active" : ""}>
                Answered Questions
              </Link>
            </li>
          </ul>
        </div>

        {this.props.questions.map((question) => {
            return (
              question.isAnswered !== hasAnswered
              ? null
              : <QuestionCard key={question.id} id={question.id}></QuestionCard>
            )
        })}

      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  const categorizedQuestions = Object.keys(questions)
  .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  .map((key) => ({
    id: questions[key].id,
    isAnswered: users[authedUser].answers.hasOwnProperty(key)
  }))
  
  return {
    questions: categorizedQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)