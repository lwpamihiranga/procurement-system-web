import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RequisitionsPage from './pages/RequisitionsPage';
import ApprovelsPage from './pages/ApprovelsPage';
import InquirePage from './pages/InquirePage';
import SignoutPage from './pages/SignoutPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route path="/dashboard">
                    <DashboardPage />
                </Route>
                <Route path="/requisitions">
                    <RequisitionsPage />
                </Route>
                <Route path="/approvels">
                    <ApprovelsPage />
                </Route>
                <Route path="/inquire">
                    <InquirePage />
                </Route>
                <Route path="/signout">
                    <SignoutPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
