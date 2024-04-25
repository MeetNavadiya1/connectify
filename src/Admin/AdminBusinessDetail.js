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
            let apiAddress = 'http://localhost:5000/admin-business-detail/' + businessid;
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
                            <span className="fw-bolder fs-4">Businesses</span>
                            <Link to="/admin-businesses" className="btn btn-primary m-1">Back</Link>
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
                                <tbody className="table-group-divider">
                                    <tr>
                                        <td><span className="mx-3">Id</span></td>
                                        <td><span className="mx-3">{business.business_id}</span></td>
                                    </tr>
                                    <tr>
                                        <td><spna className="mx-3">Business_Name</spna></td>
                                        <td><span className="mx-3">{business.business_name}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Password</span></td>
                                        <td><span className="mx-3">{business.password}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Email</span></td>
                                        <td><span className="mx-3">{business.email}</span></td>
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