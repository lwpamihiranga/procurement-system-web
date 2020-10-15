import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

function PurchaseOrder() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [purchaseOrder, setPurchaseOrder] = useState('');
    const [itemList, setItemList] = useState([]);
    const [siteManager, setSiteManger] = useState('');
    const [site, setSite] = useState('');

    useEffect(() => {
        axios
            .get(url.concat(`/api/purchaseOrders/${id}`))
            .then((res) => {
                setPurchaseOrder(res.data);
                setItemList(res.data.purchaseOrderItems);
                setSiteManger(res.data.siteManager);
                setSite(res.data.site);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url, id]);

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Requisition {id}</h2>
            <br />
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Order No</td>
                        <td>{purchaseOrder.orderReference}</td>
                    </tr>

                    <tr>
                        <td>Status</td>
                        <td>{purchaseOrder.orderStatus}</td>
                    </tr>
                    <tr>
                        <td>Site Manger</td>
                        <td>{siteManager.staffId}</td>
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
                            <td>{value.item.itemPrice}</td>
                            <td>{value.itemCount}</td>
                            <td>calculate total here</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>total here</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PurchaseOrder;
