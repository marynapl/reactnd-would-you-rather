import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/helpers'

class LeaderBoard extends Component {

  render() {
    const { users } = this.props

    return (
      <Fragment>
        <h1>Leader Board</h1>
        {
          users.map((user) => (

            <div key={user.id} className="callout">
              <div className="grid-x">
                <div className="cell auto">
                  Avatar
                </div>
                <div className="cell small-7 margin-horizontal-1x padding-horizontal-1x border-horizontal">
                  <h2 className="text-bold margin-bottom-1x">{user.name}</h2>
                  <div className="grid-x grid-margin-x align-middle text-small margin-bottom-half">
                    <div className="cell auto">
                      Answered questions
                    </div>
                    <div className="cell shrink">
                      {user.answeredQuestions}
                    </div>
                  </div>
                  <div className="grid-x grid-margin-x align-middle text-small">
                    <div className="cell auto">
                      Created questions
                    </div>
                    <div className="cell shrink">
                      {user.createdQuestions}
                    </div>
                  </div>
                  {/* <table className="unstriped text-small margin-bottom-0">
                    <tbody>
                      <tr>
                        <th className="text-left text-normal">Answered questions</th>
                        <td>{user.answeredQuestions}</td>
                      </tr>
                      <tr>
                        <th className="text-left text-normal">Created questions</th>
                        <td>{user.createdQuestions}</td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
                <div className="cell auto">
                  <div className="card margin-bottom-0">
                    <div className="card-divider align-center text-small">
                      Score
                    </div>
                    <div className="card-section text-center">
                      <span className="badge text-bold text-large">{user.totalQuestions}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users)
      .map((key) => formatUser(users[key]))
      .sort((a, b) => b.totalQuestions > a.totalQuestions ? 1 : -1)
  }
}

export default connect(mapStateToProps)(LeaderBoard)