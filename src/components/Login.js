import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAutherUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selected: ''
  }
  handleChange = (e) => {
    const selected = e.target.value

    this.setState(() => ({
      selected
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { selected } = this.state
    const { dispatch } = this.props

    dispatch(setAutherUser(selected))
  }
  render() {
    const { users } = this.props
    return (
      <div className="grid-x align-center">
        <div className="small-12 medium-8 large-7">
          <div className="callout text-center">
            <h1>Welcome to the Would You&nbsp;Rather&nbsp;App!</h1>
            <p>
              Please sign in to continue
            </p>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <label><span className="show-for-sr">Select user</span>
                <select defaultValue="" onChange={this.handleChange}>
                  <option value="" disabled={true}></option>
                  {
                    Object.keys(users).map((key) => {
                      return (
                        <option key={key} value={key}>{users[key].name}</option>
                      )
                    })
                  }
                </select>
              </label>
              <button type="submit" className="button expanded margin-bottom-0">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)