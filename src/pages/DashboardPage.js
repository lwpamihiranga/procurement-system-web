import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard'

function DashboardPage() {
    return (
        <Switch>
            <Route exact path="/dashboard">
                <div>
                    <SideMenu navName="dashboard" />
                    <Dashboard />
                </div>
            </Route>                  
        </Switch>
    );
}

export default DashboardPage;
