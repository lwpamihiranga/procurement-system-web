import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DeliveryView() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [delivery, setDelivery] = useState('');
    const [site, setSite] = useState('');
    const [purchaseOrder, setPurchaseOrder] = useState('');

    useEffect(() => {
        axios
            .get(url.concat(`/api/deliveries/${id}`))
            .then((res) => {
                console.log(res.data);
                setDelivery(res.data);
                setSite(res.data.site);
                setPurchaseOrder(res.data.purchaseOrder);
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
                        <td>Delivery ID</td>
                        <td>{delivery.deliveryId}</td>
                    </tr>

                    <tr>
                        <td>Amount</td>
                        <td>{delivery.payableAmount}</td>
                    </tr>
                    <tr>
                        <td>Site</td>
                        <td>{site.siteCode}</td>
                    </tr>
                    <tr>
                        <td>Delivery Address</td>
                        <td>{site.siteAddress}</td>
                    </tr>
                    <tr>
                        <td>Purchase Order</td>
                        <td>{purchaseOrder.orderReference}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DeliveryView;
