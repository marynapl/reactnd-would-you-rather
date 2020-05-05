import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import TopBanner from './TopBanner'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QustionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <TopBanner />
          <div className="grid-container">
            <div className="grid-x align-center">
              <div className="cell small-12 medium-10">
                {this.props.loggedIn == true
                  ? <p>Please log in</p>
                  : <div>
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/questions/:id' component={QustionPage} />
                      <Route path='/add' component={NewQuestion} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                    </div>
                }
              </div>
            </div>
          </div>
        </Fragment>
      </Router>

    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
