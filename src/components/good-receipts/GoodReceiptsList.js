import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function GoodReceiptsList() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/goodsReceipts'))
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url]);

    const viewDetails = (id) => {
        console.log('View order ', id);
        history.push(`/accounting/receipts/${id}`);
    };

    return (
        <div className="main-container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Good Receipts</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Receipt {value.receiptId}
                        </h5>
                        <p className="card-text">
                            Date Delivered:{' '}
                            {value.dateDelivered.toString().split('T')[0]}
                        </p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.receiptId)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GoodReceiptsList;
