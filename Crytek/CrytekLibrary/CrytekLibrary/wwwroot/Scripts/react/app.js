import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import Dashboard from './components/dashboard'

var HotDashboard = hot(module)(Dashboard);
var App = () => <HotDashboard />;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);