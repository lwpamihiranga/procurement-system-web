import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApproveRequisition() {
    const url = process.env.REACT_APP_BACKEND_API;
    let { id } = useParams();

    const [requisition, setRequisition] = useState('');
    const [itemList, setItemList] = useState([]);
    const [siteManager, setSiteManger] = useState('');
    const [supplier, setSupplier] = useState('');
    const [site, setSite] = useState('');

    useEffect(() => {
        axios
            .get(url.concat(`/api/purchaseRequisitions/${id}`))
            .then((res) => {
                setRequisition(res.data);
                setItemList(res.data.purchaseRequisitionItems);
                setSiteManger(res.data.siteManager);
                setSupplier(res.data.supplier);
                setSite(res.data.site);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url, id]);

    const declineRequisition = (id) => {
        console.log('Decline ', id);
        axios
            .put(url.concat(`/api/purchaseRequisitions/${id}`), {
                requisitionNo: id,
                status: 'Declined',
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const approveRequisition = (id) => {
        console.log('Approve ', id);

        axios
            .put(url.concat(`/api/purchaseRequisitions/${id}`), {
                requisitionNo: id,
                status: 'Approved',
            })
            .then((res) => {
                console.log(res.data);

                var itemIds = [];
                itemList.forEach((item) => {
                    itemIds.push(item.itemId);
                });

                axios
                    .post(url.concat('/api/purchaseOrders'), {
                        siteManagerId: siteManager.staffId,
                        supplierCode: supplier.supplierCode,
                        siteCode: site.siteCode,
                        shippingAddress: requisition.shippingAddress,
                        totalCost: requisition.totalCost,
                        orderStatus: 'Approved',
                        itemIds: itemIds,
                        managementStaffId: 'EMP11',
                    })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container" style={{ marginLeft: 250 }}>
            <br />
            <h2>Requisition {id}</h2>
            <br />
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Requisition No</td>
                        <td>{requisition.requisitionNo}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{requisition.comments}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{requisition.status}</td>
                    </tr>
                    <tr>
                        <td>Site Manger</td>
                        <td>{siteManager.staffId}</td>
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
            <button
                className="btn btn-primary"
                onClick={() => approveRequisition(requisition.requisitionNo)}
            >
                Approve
            </button>
            <button
                className="btn btn-danger"
                onClick={() => declineRequisition(requisition.requisitionNo)}
            >
                Decline
            </button>
        </div>
    );
}

export default ApproveRequisition;
