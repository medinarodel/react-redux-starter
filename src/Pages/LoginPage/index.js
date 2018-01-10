import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginUser } from '../../Services/Auth/AuthActions'

class LoginPage extends Component {
  loginUser(e) {
    e.preventDefault()

    this.props.loginUser({user: {
          email: this.refs.email,
          password: this.refs.password
        }});
  }

  render() {
    return (
      <div className="login-page">
        <h1 className="page-header">Login</h1>
        {this.props.errors}
        <form onSubmit={ this.loginUser.bind(this)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" ref="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.userSessionReducer.user,
    fetching: state.userSessionReducer.fetching,
    errors: state.userSessionReducer.errors,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);