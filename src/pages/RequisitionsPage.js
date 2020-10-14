import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Requisitions from '../components/requisitions/Requisitions'
import Header from '../components/header/Header'


function DashboardPage() {
    return (
        <Switch>
            <Route exact path="/requisitions">
                <Header/>
                <div style={{marginTop:45}}>
                    <SideMenu navName="requisitions" />
                    <Requisitions />
                </div>
            </Route>                  
        </Switch>
    );
}

export default DashboardPage;
