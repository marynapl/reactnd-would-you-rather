import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionForm extends Component {
  state = {
    answer: ''
  }
  handleChange = (e) => {
    const value = e.target.value

    this.setState({
      answer: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { answer } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAnswerQuestion(id, answer))

    this.setState({
      answer: ''
    })
  }
  render() {
    const { optionOneText, optionTwoText } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend><strong>Would you rather&hellip;</strong></legend>
          <div>
            <input id="option1" required
              type="radio"
              name="options"
              value="optionOne"
              checked={this.state.answer === 'optionOne'}
              onChange={this.handleChange} />
            <label htmlFor="option1">{optionOneText}</label>
          </div>
          <div>
            <input id="option2"
              type="radio"
              name="options"
              value="optionTwo"
              checked={this.state.answer === 'optionTwo'}
              onChange={this.handleChange} />
            <label htmlFor="option2">{optionTwoText}</label>
          </div>
        </fieldset>
        <button type="submit" className="button margin-bottom-0">
          Answer the question
        </button>
      </form>
    )
  }
}
const mapStateToProps = ({ questions }, { id }) => {
  const question = questions[id]

  return {
    id,
    optionOneText: question.optionOne.text,
    optionTwoText: question.optionTwo.text
  }
}

export default connect(mapStateToProps)(QuestionForm)