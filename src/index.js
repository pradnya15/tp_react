import React from 'react';
import ReactDOM from 'react-dom';
/* CSS Style */
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/light-bootstrap-dashboard-react.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
/* CSS Style */
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import PublicLayoutRoute from "./layout/PublicLayout";  
import DashboardRoute from "./layout/DashboardLayout"; 

import App from './App';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Notfound from './views/notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <PublicLayoutRoute path="/login" component={Login} />  
        <DashboardRoute path="/dashboard" component={Dashboard} />  
        <Route component={Notfound} />
      </Switch>
    </Router>
  </React.StrictMode>  
)

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
