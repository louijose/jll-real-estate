import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";

import Records from "./records";
import Messages from "./messages";

import baseURL from "../connect/connect";

// Axios
axios.defaults.baseURL = baseURL;

class DashBoardSeller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "records"
        };
    }

    render() {
        return (
            <div>
                <div id="dashboard">
                    <h1>DASHBOARD</h1>
                    <Tabs id="dashboard_tab" activeKey={this.state.key} onSelect={key => this.setState({ key })} mountOnEnter unmountOnExit>
                        <Tab eventKey="records" title="RECORDS">
                            <Records />
                        </Tab>
                        <Tab eventKey="messages" title="MESSAGES">
                            <Messages />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default DashBoardSeller;
