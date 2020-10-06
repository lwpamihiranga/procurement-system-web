import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Requisitions from '../components/requisitions/Requisitions'

function DashboardPage() {
    return (
        <Switch>
            <Route exact path="/requisitions">
                <div>
                    <SideMenu navName="requisitions" />
                    <Requisitions />
                </div>
            </Route>                  
        </Switch>
    );
}

export default DashboardPage;
