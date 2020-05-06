import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAutherUser } from '../actions/authedUser'

class LoginStatus extends Component {
  handleChange = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(setAutherUser(null))
  }
  render() {
    const { loggedIn, user } = this.props;
    return (
      <Fragment>
        {loggedIn === false
          ? null
          : <div className="login-status">
              Hello, { user.name } 
              <a href="#" onClick={this.handleChange}>Logout</a>
            </div>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser]
  return {
    loggedIn: authedUser !== null,
    user 
  }
}

export default connect(mapStateToProps)(LoginStatus)