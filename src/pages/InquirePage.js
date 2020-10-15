import React from 'react';
import SideMenu from '../components/side-menu/SideMenu';
import { Switch, Route } from 'react-router-dom';
import Inquire from '../components/inquire/Inquire'
import Header from '../components/header/Header'


function InquirePage() {
    return (
        <Switch>
            <Route exact path="/inquire">
                <Header/>
                <div style={{marginTop:45}}>
                    <SideMenu navName="inquire" />
                    <Inquire />
                </div>
            </Route>                  
        </Switch>
    );
}

export default InquirePage;
