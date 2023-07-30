import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  getAdminDetails = () => {
    const {username, password} = this.state

    if (username === 'admin@gmail.com' && password === 'Admin@123') {
      const {history} = this.state
      history.replace('/')
    }
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password} = this.state

    return (
      <div className="login-container">
        <div className="login-card">
          <img
            src="https://res.cloudinary.com/dlvb09jrk/image/upload/v1690702150/Frame_507_aatk0q.png"
            className="app-logo-login"
            alt="login"
          />
          <form className="user-credentials" onSubmit={this.getAdminDetails}>
            <label htmlFor="username"> Username </label>
            <input
              type="text"
              className="input-el"
              id="username"
              value={username}
              onChange={this.changeUsername}
            />
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              className="input-el"
              id="password"
              value={password}
              onChange={this.changePassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
