import React, { useState } from 'react';
import LoginService from '../../services/LoginService';
import './LoginForm.css';


function LoginForm() {
    const [userId, setUserId] = useState(null);
    const [password, setPassword] = useState(null);
    const [userType, setUserType] = useState(null);

    const handleLogin = () => {
        if(userId === null || password === null || userType === null || userId === '' || password === '' || userType === '') {
            alert('Error! All the filds should be filled');
        } else {
            if(userType === 'Site Manager') {
                LoginService.loginSiteManager(userId, password);
            } else if(userType === 'Managment Staff') {
                LoginService.loginManagmentStaff(userId, password);
            } else if(userType === 'Accounting Staff') {
                LoginService.loginAccountingStaff(userId, password);
            } else {
                alert('Error user type');
            }
        }
    }

    return (
        <div className="container jumbotron login-form">
            <h3 className="form-group text-center">Login Form</h3>
        <form>
            <div className="form-group">
                <label>User ID</label>
                <input type="text" className="form-control" onChange={(e) => setUserId(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Type</label>
                <select className="form-control" onChange={(e) => setUserType(e.target.value)}>
                    <option>Select User Type</option>
                    <option>Site Manager</option>
                    <option>Managment Staff</option>
                    <option>Accounting Staff</option>
                </select>
            </div>
        </form>
        <button className="btn btn-success" onClick={handleLogin}>Login</button>
    </div>
    );
}

export default LoginForm;
