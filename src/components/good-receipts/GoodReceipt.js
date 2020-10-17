import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function GoodReceipt() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [receipt, setReceipt] = useState('');
    const [site, setSite] = useState('');
    const [delivery, setDelivery] = useState('');

    const [itemList, setItemList] = useState([]);
    const [total, setTotal] = useState('');

    useEffect(() => {
        axios
            .get(url.concat(`/api/goodsReceipts/${id}`))
            .then((res) => {
                console.log(res.data.purchaseOrder.purchaseOrderItems);
                setItemList(res.data.purchaseOrder.purchaseOrderItems);
                setReceipt(res.data);
                setSite(res.data.site);
                setDelivery(res.data.delivery);

                let total = 0;
                res.data.purchaseOrder.purchaseOrderItems.forEach((item) => {
                    total = total + item.itemCount * item.item.itemPrice;
                });
                setTotal(total);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url, id]);

    const handleDelivery = () => {
        alert('handle');
    };

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Goods Receipt {id}</h2>
            <br />
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Receipt ID</td>
                        <td>{receipt.receiptId}</td>
                    </tr>

                    <tr>
                        <td>Date Delivered</td>
                        <td>{receipt.dateDelivered}</td>
                    </tr>
                    <tr>
                        <td>Delivery No</td>
                        <td>{delivery.deliveryId}</td>
                    </tr>
                    <tr>
                        <td>Site</td>
                        <td>{site.siteCode}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Item Number</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.map((value, key) => (
                        <tr key={key}>
                            <td>{value.itemId}</td>
                            <td>{value.item.itemPrice.toFixed(2)}</td>
                            <td>{value.itemCount}</td>
                            <td>
                                {(
                                    value.item.itemPrice * value.itemCount
                                ).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{parseFloat(total).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleDelivery}>
                Create Invoice
            </button>
        </div>
    );
}

export default GoodReceipt;
