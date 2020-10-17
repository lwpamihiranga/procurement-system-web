import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Invoice() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [invoice, setInvoice] = useState('');

    useEffect(() => {
        axios
            .get(url.concat(`/api/invoices/${id}`))
            .then((res) => {
                console.log(res.data);
                setInvoice(res.data);
            })
            .catch((err) => console.log(err));
    }, [url, id]);

    const handlePayment = () => {
        axios
            .post(url.concat('/api/payments/'), {
                paymentId: 'PAY'.concat(
                    Math.floor(Math.random() * 10 ** 3).toString()
                ),
                paymentMethod: 'Cash',
                invoice: invoice.invoiceId,
                paidAmount: invoice.netAmount,
            })
            .then((res) => {
                console.log(res.data);
                alert('Payment has been made');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>{id}</h2>
            <br />
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Invoice</td>
                        <td>{invoice.invoiceId}</td>
                    </tr>

                    <tr>
                        <td>Date Delivered</td>
                        <td>{invoice.invoiceDate}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{invoice.description}</td>
                    </tr>
                    <tr>
                        <td>Amount</td>
                        <td>{invoice.netAmount}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handlePayment}>
                Make Payment
            </button>
        </div>
    );
}

export default Invoice;
