import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Signout from '../components/signout/Signout'

function SignoutPage() {
    return (
        <Switch>
            <Route exact path="/signout">
                <div>
                    <SideMenu navName="signout" />
                    <Signout />
                </div>
            </Route>                  
        </Switch>
    );
}

export default SignoutPage;
