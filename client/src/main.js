import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import Login from "./views/gov/common/login";
// import AdminDashboard from "./views/gov/admin/dashboard"
// import Employee from "./views/gov/employee"
// import Agent from "./views/gov/agent"

import "./style.scss";

// React Component
const App = () => (
    <div>
        <Router>
            <div>
                {/* <Route exact path="/" component={withRouter(Home)} /> */}
                <Route exact path="/" component={withRouter(Login)} />
            </div>
        </Router>
    </div>
);

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
