import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError from "./Tost-Message";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import VerifyLogin from "./VerifyLogin";

export default function AdminBusinesses() {

    VerifyLogin();

    let [businesses, setBusinesses] = useState([]);
    useEffect(() => {
        if (businesses.length === 0) {
            let apiAddress = 'http://localhost:5000/admin-businesses';

            axios({
                method: "get",
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
                    showError('No business found');
                }
                else {
                    response.data.splice(0, 2);
                    setBusinesses(response.data);
                }
            }).catch((error) => {
                showError('server is nor responding');
            })
        }
    });

    let DisplayBusinesses = function (item) {
        let {business_id, business_name } = item;
        return (
            <tr>
                <td>{business_id}</td>
                <td>{business_name}</td>
                <td>
                    <Link to={"/admin-business-detail/" + business_id}>
                        <i className="fa-solid fa-circle-info fa-2xl" />
                    </Link>
                </td>
            </tr>
        );
    }

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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <span className="card-header text-bg-primary fs-5 fw-bold">Existing Businesses</span>
                                <div className="card-body">
                                    <table className="table table-responsive text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>SR NO</th>
                                                <th>BUSINESS_NAME</th>
                                                <th>DETAILS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="top-text table-group-divider">
                                            {businesses.map((item) => DisplayBusinesses(item))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}