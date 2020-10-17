import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PaymentList() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/payments'))
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url]);

    const viewDetails = (id) => {
        console.log('View payment ', id);
        history.push(`/accounting/payments/${id}`);
    };

    return (
        <div className="main-container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Payments</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Payment: {value.paymentId}
                        </h5>
                        <p className="card-text">Amount: {value.paidAmount}</p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.paymentId)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PaymentList;
