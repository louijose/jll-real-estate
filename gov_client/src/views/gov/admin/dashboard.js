import React from "react";
import axios from "axios";

import baseURL from "../../connect/connect";

// Axios
axios.defaults.baseURL = baseURL;

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminId: "",
            sessionToken: "",
            employeeId: "",
            employeePassword: "",
            agentId: "",
            agentPassword: "",
            employeeList: [],
            agentList: [],
            userKYCList: [],
            employeeData: <tr />,
            agentData: <tr />,
            userKYCData: <tr />
        };
        this.handleChangeEmployeeId = this.handleChangeEmployeeId.bind(this);
        this.handleChangeEmployeePassword = this.handleChangeEmployeePassword.bind(this);
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.handleChangeAgentId = this.handleChangeAgentId.bind(this);
        this.handleChangeAgentPassword = this.handleChangeAgentPassword.bind(this);
        this.handleAddAgent = this.handleAddAgent.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    handleChangeEmployeeId(event) {
        this.setState({
            employeeId: event.target.value
        });
    }

    handleChangeEmployeePassword(event) {
        this.setState({
            employeePassword: event.target.value
        });
    }

    handleAddEmployee(event) {
        event.preventDefault();

        const body = {
            employeeId: this.state.employeeId,
            employeePassword: this.state.employeePassword
        };

        console.log(body);

        // axios({
        //     method: "post",
        //     url: "/users/add",
        //     data: body
        // }).then((res) => {
        //     console.log(res.data);
        // }).catch((err) => {
        //     console.log(err);
        //     alert("ERROR");
        // });
    }

    handleChangeAgentId(event) {
        this.setState({
            agentId: event.target.value
        });
    }

    handleChangeAgentPassword(event) {
        this.setState({
            agentPassword: event.target.value
        });
    }

    handleAddAgent(event) {
        event.preventDefault();

        const body = {
            agentId: this.state.agentId,
            agentPassword: this.state.agentPassword
        };

        console.log(body);

        // axios({
        //     method: "post",
        //     url: "/users/add",
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
                <div id="adminDashboard">
                    <h3>DASHBOARD</h3>
                    <hr />
                    <h5>ADD EMPLOYEE</h5>
                    <form id="addEmployeeForm" className="form-group" onSubmit={this.handleAddEmployee}>
                        <label>
                            <i className="fas fa-user" />
                            <input id="employeeId" className="form-control" value={this.state.employeeId} type="text" placeholder="Employee Id" onChange={this.handleChangeEmployeeId} required />
                        </label>
                        <br />
                        <label>
                            <i className="fas fa-key" />
                            <input id="employeePassword" className="form-control" value={this.state.employeePassword} type="text" placeholder="Employee Password" onChange={this.handleChangeEmployeePassword} required />
                        </label>
                        <br />
                        <button id="addEmployeeButton" className="btn btn-success" type="submit">Add Employee</button>
                    </form>
                    <br />
                    <h5>ADD AGENT</h5>
                    <form id="addAgentForm" className="form-group" onSubmit={this.handleAddAgent}>
                        <label>
                            <i className="fas fa-user" />
                            <input id="agentId" className="form-control" value={this.state.agentId} type="text" placeholder="Agent Id" onChange={this.handleChangeAgentId} required />
                        </label>
                        <br />
                        <label>
                            <i className="fas fa-key" />
                            <input id="agentPassword" className="form-control" value={this.state.agentPassword} type="text" placeholder="Agent Password" onChange={this.handleChangeAgentPassword} required />
                        </label>
                        <br />
                        <button id="addAgentButton" className="btn btn-success" type="submit">Add Agent</button>
                    </form>
                    <br />
                    <h5>EMPLOYEE LIST</h5>
                    <table className="text-center table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center"><h4>Employee Id</h4></th>
                                <th className="text-center"><h4>Employee Password</h4></th>
                                <th className="text-center"><h4>Employee Activity</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeData}
                        </tbody>
                    </table>
                    <br />
                    <h5>AGENT LIST</h5>
                    <table className="text-center table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center"><h4>Agent Id</h4></th>
                                <th className="text-center"><h4>Agent Password</h4></th>
                                <th className="text-center"><h4>Agent Activity</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.agentData}
                        </tbody>
                    </table>
                    <br />
                    <h5>KYC USER LIST</h5>
                    <table className="text-center table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center"><h4>User Id</h4></th>
                                <th className="text-center"><h4>Agent Id</h4></th>
                                <th className="text-center"><h4>User Activity</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userKYCData}
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        );
    }
}

export default AdminDashboard;
