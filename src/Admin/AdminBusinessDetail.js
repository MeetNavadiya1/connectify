import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError from "./Tost-Message";
import axios from "axios";
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function AdminBusinessDetail() {

    VerifyLogin();

    var { businessid } = useParams();
    console.log(businessid);
    let [business, setBusiness] = useState([]);
    useEffect(() => {
        if (business.length === 0) {
            let apiAddress = 'http://localhost:5000/business-detail/' + businessid;
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response);
                let error = response.data[0]['error'];
                let total = response.data[1]['total'];
                if (error !== 'no') {
                    showError(error);
                }
                else if (total === 0) {
                    showError('No Business Detail Found')
                }   
                else {
                    setBusiness(response.data[2]);
                }
            }).catch((error) => {
                console.log(error);
                showError('server is not responding');
            });
        }
    });

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <ToastContainer />
            {/* Sidebar Start */}
            <AdminMenu />
            {/*  Sidebar End */}
            {/*  Main wrapper */}
            <div className="body-wrapper">
                {/*  Header Start */}
                <AdminHeader />
                {/*  Header End */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-content-center">
                            <span className="fw-bolder fs-6">Businesses</span>
                            <Link to="/businesses" className="btn btn-primary m-1">Back</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <table className="table table-responsive table-bordered text-dark">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="text-center fs-5">Business's Details</th>
                                    </tr>
                                </thead>
                                <tbody className="fs-4 table-group-divider">
                                    <tr>
                                        <td>Id</td>
                                        <td>{business.business_id}</td>
                                    </tr>
                                    <tr>
                                        <td>Business_Name</td>
                                        <td>{business.business_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>{business.password}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{business.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile No</td>
                                        <td>{business.mobile_no}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{business.address}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{business.city}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{business.status}</td>
                                    </tr>
                                    <tr>
                                        <td>Acc_open_date</td>
                                        <td>{business.acc_open_date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}