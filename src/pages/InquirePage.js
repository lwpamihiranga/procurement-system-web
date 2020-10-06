import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Inquire from '../components/inquire/Inquire'

function InquirePage() {
    return (
        <Switch>
            <Route exact path="/inquire">
                <div>
                    <SideMenu navName="inquire" />
                    <Inquire />
                </div>
            </Route>                  
        </Switch>
    );
}

export default InquirePage;
