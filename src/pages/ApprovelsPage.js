import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Approvels from '../components/approvels/Approvels'

function ApprovelsPage() {
    return (
        <Switch>
            <Route exact path="/approvels">
                <div>
                    <SideMenu navName="approvels" />
                    <Approvels />
                </div>
            </Route>                  
        </Switch>
    );
}

export default ApprovelsPage;
