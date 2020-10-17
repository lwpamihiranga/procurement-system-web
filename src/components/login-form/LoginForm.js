import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
    const history = useHistory();

    const [userId, setUserId] = useState(null);
    const [password, setPassword] = useState(null);
    const [userType, setUserType] = useState(null);

    const handleLogin = () => {
        if (
            userId === null ||
            password === null ||
            userType === null ||
            userId === '' ||
            password === '' ||
            userType === ''
        ) {
            alert('Error! All the filds should be filled');
        } else {
            if (userType === 'Managment Staff') {
                sessionStorage.setItem('type', 'managementStaff');
                history.push(`/requisitions`);
            } else if (userType === 'Supplier') {
                sessionStorage.setItem('type', 'supplier');
                history.push(`/supplier`);
            } else if (userType === 'Accounting Staff') {
                sessionStorage.setItem('type', 'accountingStaff');
                history.push(`/accounting`);
            } else {
                alert('Error user type');
            }
        }
    };

    return (
        <div className="container jumbotron login-form">
            <h3 className="form-group text-center">Login Form</h3>
            <form>
                <div className="form-group">
                    <label>User ID</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setUserId(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select
                        className="form-control"
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option>Select User Type</option>
                        <option>Managment Staff</option>
                        <option>Supplier</option>
                        <option>Accounting Staff</option>
                    </select>
                </div>
            </form>
            <button className="btn btn-success" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default LoginForm;
