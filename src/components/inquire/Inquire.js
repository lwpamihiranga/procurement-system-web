import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Inquire() {
    const url = process.env.REACT_APP_BACKEND_API;
    const history = useHistory();

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/enquiries'))
            .then((res) => {
                console.log('DATA :' + res.data[0]);
                setList(res.data);
            })
            .catch((err) => {
                console.log('ERR :' + err);
            });
    }, [url]);
    const deleteEnquiry = (id) => {
        axios
            .delete(url.concat('/api/enquiries/', id))
            .then((res) => {
                alert('Enquiry Deleted!');
                setList(
                    list.filter((item) => item.enquiryId !== id)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const viewDetails = (id) => {
        history.push(`/inquire/${id}`);
    };

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Enquiries List</h2>
            <br />
            {list.map((value, key) => (
                <div className="card" key={key}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Enquiry No : {value.enquiryId}
                        </h5>
                        <p className="card-text">
                            Order Reference No: {value.orderReference.orderReference}
                        </p>
                        <p className="card-text">
                           Site Manager Id: {value.orderReference.siteManager.staffId}
                        </p>
                        <p className="card-text">
                            Enquiry Status: {value.enquiryStatus}
                        </p>
                        <button
                            className="btn btn-success"
                            onClick={() => viewDetails(value.enquiryId)}
                        >
                            View
                        </button>
                        <button
                            style={{marginLeft:20}}
                            className="btn btn-danger"
                            onClick={() => deleteEnquiry(value.enquiryId)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Inquire;
