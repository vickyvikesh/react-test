import React from 'react';
import { connect } from 'react-redux';
import './loginPage.css'
import { loginDetails } from '../../actions/loginAction'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""

        }
    }
    loginSuccess = () => {
        {
            this.props.getData ? this.props.history.push('/employeedetails') : alert("enter the correct username and password")
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    submitHandler = () => {
        let username = this.state.username;
        let password = this.state.password;
        this.props.loginDetails({ username, password })
        debugger
        this.setState({}, () => this.loginSuccess())
    }

    render() {
        return (
            <div className="Container">
                <div className="login">
                    <div className="login-sub">
                        <h2>Login Form</h2>
                    UserName :<input type="text" name="username" onChange={this.changeHandler} className="username"/><br />
                      Password :<input type="text" name="password" onChange={this.changeHandler}  className="password"/><br />
                    <button onClick={this.submitHandler}>Login</button>
                    </div>

                   
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        getData: state.loginReducer.newData
    }
}
const mapDispatchToProps = {
    loginDetails
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)