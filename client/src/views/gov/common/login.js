/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import axios from "axios";

import baseURL from "../../connect/connect";

// Axios
axios.defaults.baseURL = baseURL;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            userType: "admin"
        };
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUserType = this.handleChangeUserType.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChangeId(event) {
        this.setState({
            id: event.target.value
        });
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleChangeUserType(event) {
        this.setState({
            userType: event.target.value
        });
    }

    handleLogin(event) {
        event.preventDefault();

        const body = {
            id: this.state.id,
            password: this.state.password,
            userType: this.state.userType
        };

        console.log(body);

        // axios({
        //     method: "post",
        //     url: "/users/login",
        //     data: body
        // }).then((res) => {
        //     console.log(res.data);
        // }).catch((err) => {
        //     console.log(err);
        //     alert("ERROR");
        // });
    }

    render() {
        return (
            <div>
                <div id="login">
                    <h3>LOGIN</h3>
                    <form id="loginForm" className="form-group" onSubmit={this.handleLogin}>
                        <label>
                            <i className="fas fa-envelope" />
                            <input id="loginId" className="form-control" value={this.state.id} type="text" placeholder="Id" onChange={this.handleChangeId} required />
                        </label>
                        <br />
                        <label>
                            <i className="fas fa-key" />
                            <input id="loginPassword" className="form-control" value={this.state.password} type="password" placeholder="Password" onChange={this.handleChangePassword} required />
                        </label>
                        <br />
                        <label>
                            <i className="fas fa-user" />
                            <select id="loginUserType" value={this.state.userType} onChange={this.handleChangeUserType}>
                                <option value="admin">ADMIN</option>
                                <option value="employee">EMPLOYEE</option>
                                <option value="agent">AGENT</option>
                            </select>
                        </label>
                        <br />
                        <button id="loginButton" className="btn btn-success" type="submit">Log In</button>
                    </form>
                    <br />
                </div>
            </div>
        );
    }
}

export default Login;
