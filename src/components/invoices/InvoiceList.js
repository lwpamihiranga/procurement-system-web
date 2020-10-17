import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function InvoiceList() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/invoices'))
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url]);

    const viewDetails = (id) => {
        console.log('View invoice ', id);
        history.push(`/accounting/invoices/${id}`);
    };

    return (
        <div className="main-container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Invoices</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Invoice: {value.invoiceId}
                        </h5>
                        <p className="card-text">
                            Date: {value.invoiceDate.toString().split('T')[0]}
                        </p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.invoiceId)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default InvoiceList;
