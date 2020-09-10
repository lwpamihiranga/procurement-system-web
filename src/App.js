import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import ManagerForm from './components/site-manager/ManagerAddForm'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                    
                </Route>
                <Route exact path="/adduser">
                    <ManagerForm />

                </Route>
            </Switch>
        </Router>
    );
}

export default App;
