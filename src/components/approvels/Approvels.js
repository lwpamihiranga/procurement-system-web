import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Approvels() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/purchaseOrders'))
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url]);

    const viewDetails = (id) => {
        console.log('View order ', id);
        history.push(`/approvels/${id}`);
    };

    return (
        <div className="main-container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Approvels</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Order {value.orderReference}
                        </h5>
                        <p className="card-text">
                            Total Cost: {value.totalCost}
                        </p>
                        <p className="card-text">Status: {value.orderStatus}</p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.orderReference)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Approvels;
