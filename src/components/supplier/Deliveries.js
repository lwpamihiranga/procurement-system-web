import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Deliveries() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/deliveries'))
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url]);

    const viewDetails = (id) => {
        console.log('View Delivery ', id);
        history.push(`/supplier/delivery/${id}`);
    };

    return (
        <div className="main-container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Deliveries</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Delivery {value.deliveryId}
                        </h5>
                        <p className="card-text">
                            Amount: {value.payableAmount}
                        </p>
                        <p className="card-text">
                            Status: {value.deliveryStatus}
                        </p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.deliveryId)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Deliveries;
