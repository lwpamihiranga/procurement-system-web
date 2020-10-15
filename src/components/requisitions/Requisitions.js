import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Requisitions() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/purchaseRequisitions'))
            .then((res) => {
                console.log('DATA :' + res.data[0]);
                setList(res.data);
            })
            .catch((err) => {
                console.log('ERR :' + err);
            });
    }, [url]);

    const viewDetails = (id) => {
        history.push(`/requisitions/${id}`);
    };

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Requisition List</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Requisition {value.requisitionNo}
                        </h5>
                        <p className="card-text">
                            Total Cost: {value.totalCost}
                        </p>
                        <p className="card-text">Status: {value.status}</p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.requisitionNo)}
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Requisitions;
