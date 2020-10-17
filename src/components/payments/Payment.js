import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Payment() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [payment, setPayment] = useState('');

    useEffect(() => {
        axios
            .get(url.concat(`/api/payments/${id}`))
            .then((res) => {
                console.log(res.data);
                setPayment(res.data);
            })
            .catch((err) => console.log(err));
    }, [url, id]);

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>{id}</h2>
            <br />
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Payment ID</td>
                        <td>{payment.paymentId}</td>
                    </tr>

                    <tr>
                        <td>Method</td>
                        <td>{payment.paymentMethod}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{payment.paidDate}</td>
                    </tr>
                    <tr>
                        <td>Amount</td>
                        <td>{payment.paidAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Payment;
