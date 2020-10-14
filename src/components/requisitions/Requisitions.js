import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Requisitions() {
    const url = process.env.REACT_APP_BACKEND_API;

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(url.concat('/api/purchaseRequisitions'))
            .then((res) => {
                console.log('DATA :'+res.data[0]);
                setList(res.data);
            })
            .catch((err) => {
                console.log('ERR :'+err);
            });
    }, [url]);

    
    const viewDetails = (id) => {
       
    };

    return (
        <div className="main-container" style={{marginLeft:250}}>
            <br/><h2>Requisition List</h2><br/>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Requisition Number</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, key) => (
                        <tr key={key}>
                            <td>{value.requisitionNo}</td>
                            <td>{value.comments}</td>
                            <td>{value.status}</td>
                            <td>
                                <button
                                    className="btn btn-success"
                                    onClick={() =>
                                        viewDetails(value.requisitionNo)
                                    }
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Requisitions;
