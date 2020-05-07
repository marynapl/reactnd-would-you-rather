import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: ''
    }))
  }
  render() {
    return (
      <Fragment>
        <div className="grid-x align-center">
          <div className="small-12 medium-8 large-7">
            <div className="callout">
              <h1 className="text-center">Create new question</h1>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <section>
                  <h2>Would you rather ...</h2>
                  <label><span className="show-for-sr">Option one</span>
                    <input required className="margin-bottom-0"
                      name="optionOne"
                      type="text"
                      maxLength="250"
                      placeholder="Enter option one here"
                      onChange={this.handleChange}
                      value={this.state.optionOne}
                    />
                  </label>
                  <div className="grid-x align-middle grid-margin-x">
                    <div className="cell auto"><hr /></div>
                    <div className="cell shrink text-small">OR</div>
                    <div className="cell auto"><hr /></div>
                  </div>
                  <label><span className="show-for-sr">Option two</span>
                    <input required
                      name="optionTwo"
                      type="text"
                      maxLength="250"
                      placeholder="Enter option two here"
                      onChange={this.handleChange}
                      value={this.state.optionTwo}
                    />
                  </label>
                  <button type="submit" className="button expanded margin-bottom-0">
                    Create new question
                  </button>
                </section>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect()(NewQuestion)