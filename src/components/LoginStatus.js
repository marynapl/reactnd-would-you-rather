import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAutherUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'

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
              <Link to="" onClick={this.handleChange}>Logout</Link>
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