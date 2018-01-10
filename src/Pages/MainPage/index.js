import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../../Services/Auth/AuthActions'

import AboutPage from '../AboutPage/'
import EventsPage from '../EventsPage/'
import HomePage from '../HomePage/'

const routes = [
  { 
    path: '/about',
    component: AboutPage
  },
  { 
    path: '/events',
    component: EventsPage
  },
  { 
    path: '/',
    component: HomePage
  }
]

class MainPage extends Component {
  render() {
    return (
      <div className="layout-page">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Dr.Calix</Link>
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
            <li className="nav-item"><a className="nav-link" onClick={ this.props.logoutUser.bind(this) }>Logout</a></li>
          </ul>
        </nav>

        <div>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route}/>
            ))}
          </Switch>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logoutUser
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage));