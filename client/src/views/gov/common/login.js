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
            password: ""
        };
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
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

    handleLogin(event) {
        event.preventDefault();

        const body = {
            id: this.state.id,
            password: this.state.password
        };

        axios({
            method: "post",
            url: "/users/login",
            data: body
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            alert("ERROR");
        });
    }

    render() {
        return (
            <div>
                <div id="login">
                    <h3>LOGIN</h3>
                    <form id="login_form" className="form-group" onSubmit={this.handleLogin}>
                        <label htmlFor="login_id">
                            <i className="fas fa-envelope" />
                            <input id="login_id" className="form-control" value={this.state.id} type="text" placeholder="Id" onChange={this.handleChangeId} required />
                        </label>
                        <br />
                        <label htmlFor="login_password">
                            <i className="fas fa-key" />
                            <input id="login_password" className="form-control" value={this.state.password} type="password" placeholder="Password" onChange={this.handleChangePassword} required />
                        </label>
                        <br />
                        <button id="login_button" className="btn btn-success" type="submit">Log In</button>
                    </form>
                    <br />
                </div>
            </div>
        );
    }
}

export default Login;
