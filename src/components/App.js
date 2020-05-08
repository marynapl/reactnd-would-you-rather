import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import TopBanner from './TopBanner'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import PageNotFound from './PageNotFound'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <Fragment>
          <TopBanner />
          <main>
            <div className="grid-container">
              <div className="grid-x align-center">
                <div className="cell small-12 medium-10 large-8">
                  <Switch>
                    <Route path='/login' component={Login} />
                    <PrivateRoute loggedIn={loggedIn} path='/' exact component={Dashboard} />
                    <PrivateRoute loggedIn={loggedIn} path='/questions/:id' component={QuestionPage} />
                    <PrivateRoute loggedIn={loggedIn} path='/add' component={NewQuestion} />
                    <PrivateRoute loggedIn={loggedIn} path='/leaderboard' component={LeaderBoard} />

                    <Route path='' component={PageNotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      </Router>

    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
