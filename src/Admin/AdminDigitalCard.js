import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import showError from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function AdminDigialCard() {

    VerifyLogin();

    let [data, setData] = useState([{}]);
    let [condition, setCondition] = useState();

    useEffect(() => {
        //api calling
        if (condition === undefined) {
            var apiAddress = "http://127.0.0.1:5000/admin-digital-card";
            axios({
                method: "get",
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response);
                //create variable that has error detail
                let error = response.data[0]['error'];
                if (error !== 'no') {
                    //there is an error
                    showError(error);
                }
                else {
                    let total = response.data[1]['total'];
                    if (total === 0)
                        showError('no cards available')
                    else {
                        response.data.splice(0, 2);
                        setData(response.data);
                        setCondition("1");
                    }
                }
            }).catch((error) => {
                showError('server not available');
            })
        }
    });

    let DisplayCard = function (item) {
        let { card_id, title, business_id, photo } = item;
        return (
            <tr>
                <td>{card_id}</td>
                <td>{title}</td>
                <td>{business_id}</td>
                <td>
                    <img src={`http://127.0.0.1:5000/imagesserver/card/${photo}`} width="250px" className="img-fluid" />
                </td>
                <td>
                    <Link to={`/admin-digital-card-detail/${card_id}`}>
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
                            <span className="fw-bolder fs-4">Digital Cards</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <span className="card-header text-bg-primary fs-5 fw-bold">Existing Cards</span>
                                <div className="card-body">
                                    <table className="table table-responsive text-nowrap">
                                        <thead>
                                            <tr>
                                                <th width="15%">SR NO</th>
                                                <th width="20%">TITLE</th>
                                                <th width="15%">Business ID</th>
                                                <th width="35%">PHOTO</th>
                                                <th width="15%">DETAIL</th>
                                            </tr>
                                        </thead>
                                        <tbody className="top-text table-group-divider">
                                            {data.map((item) => (
                                                DisplayCard(item)
                                            ))}
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