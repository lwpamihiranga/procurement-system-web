import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Header from '../components/header/Header'


function DashboardPage() {
    return (
        <Switch>
            <Route exact path="/dashboard">
                <Header/>
                <div style={{marginTop:45}}>
                    <SideMenu navName="dashboard" />
                    <Dashboard />
                </div>
            </Route>                  
        </Switch>
    );
}

export default DashboardPage;
