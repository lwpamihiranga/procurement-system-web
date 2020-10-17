import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SupplierPage from './pages/SupplierPage';
import AccountingStaffPage from './pages/AccountingStaffPage';
import ManagementStaffPage from './pages/ManagementStaffPage';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>

                <Route path="/management">
                    <ManagementStaffPage />
                </Route>
                <Route path="/supplier">
                    <SupplierPage />
                </Route>
                <Route path="/accounting">
                    <AccountingStaffPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
