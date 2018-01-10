import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// pages
import LoginPage from '../Pages/LoginPage/'
import MainPage from '../Pages/MainPage/'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Switch>
          <Route path='/login' render={ () => ( this.props.isLoggedIn ? ( <Redirect to="/"/> ) : ( <LoginPage />  ) )}   />
          <Route strict path='/' render={ () => ( this.props.isLoggedIn ? ( <MainPage /> ) : ( <Redirect to="/login"/>  ) )}  />
         </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {...state, 
    currentUser: state.userSessionReducer.user,
    isLoggedIn: state.userSessionReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));