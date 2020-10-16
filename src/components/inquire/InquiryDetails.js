import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function InquiryDetails() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [inquiry, setEnquiry] = useState('');
    const [status, setStatus] = useState('');
    const [sitemanager, setSiteManager] = useState('');
    const [ordeReference, setOrderReference] = useState('');
    const options = ['new','pending'];
    useEffect(() => {
        axios
            .get(url.concat(`/api/enquiries/${id}`))
            .then((res) => {
                setEnquiry(res.data);
                setSiteManager(res.data.orderReference.siteManager);
                setOrderReference(res.data.orderReference);
                setStatus(res.data.enquiryStatus);
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, [url, id]);


  
    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Enquiry {id}</h2>
            <br />
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Enquiry No</td>
                        <td>{inquiry.enquiryId}</td>
                    </tr>
                    <tr>
                        <td>Order Reference  No</td>
                        <td>{ordeReference.orderReference}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{inquiry.description}</td>
                    </tr>
                    <tr>
                        <td>Site Manager Id</td>
                        <td>{sitemanager.staffId}</td>
                    </tr>
                    <tr>
                        <td>Site Manager Name</td>
                        <td>{sitemanager.firstName}  {sitemanager.lastName}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                    <td> <div style={{width:200}}><Dropdown options={options} value={status}/></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InquiryDetails;
