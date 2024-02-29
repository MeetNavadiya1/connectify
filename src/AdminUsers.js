import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

export default function AdminUsers() {

    let [users, setusers] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            let apiAddress = 'http://localhost:5000/users';
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
                    showError('No user found')
                }
                else {
                    response.data.splice(0, 2);
                    setusers(response.data);
                }
            }).catch((error) => {
                console.log(error);
                showError('server is not responding');
            });
        }
    });

    let DisplayUsers = function (item) {
        let { user_id, username, mobile_no } = item;
        return (
            <tr>
                <td>{user_id}</td>
                <td>{username}</td>
                <td>{mobile_no}</td>
                <td>
                    <Link to="/users-detail">
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
                            <span className="fw-bolder fs-6">Users</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <span className="card-header text-bg-primary fs-5 fw-bold">Existing Users</span>
                                <div className="card-body">
                                    <table className="table table-responsive text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>SR NO</th>
                                                <th>USERNAME</th>
                                                <th>MOBILE</th>
                                                <th>DETAILS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="top-text table-group-divider">
                                            {users.map((item) => DisplayUsers(item))}
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