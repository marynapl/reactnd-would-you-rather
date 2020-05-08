import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAutherUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

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
    const { users, loggedIn } = this.props

    if (loggedIn) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="grid-x align-center">
        <div className="small-12 medium-8 large-7">
          <div className="callout">
            <h1 className=" text-center">Welcome to the Would You&nbsp;Rather&nbsp;App!</h1>
            <hr />
            <p>
              Please sign in to continue
            </p>
            <form onSubmit={this.handleSubmit}>
              <label><span className="show-for-sr">Select user</span>
                <select required defaultValue="" onChange={this.handleChange}>
                  <option value="" disabled={true}>Select a user</option>
                  {
                    Object.keys(users).map((key) => {
                      return (
                        <option key={key} value={key}>
                          {users[key].name}
                        </option>
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

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(Login)