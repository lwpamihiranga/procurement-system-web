import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                    
                </Route>
               
            </Switch>
        </Router>
    );
}

export default App;
