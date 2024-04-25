import { Link, useParams } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import showError from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function AdminDigitalCardDetail() {

    VerifyLogin();

    let [data, setData] = useState([{}]);
    let [condition, setCondition] = useState();

    let {card_id} = useParams();
    useEffect(() => {
        //api calling
        if (condition === undefined) {
            var apiAddress = 'http://localhost:5000/admin-digital-card-detail/' + card_id;
            axios({
                method: "get",
                responseType: 'json',
                url: apiAddress,
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
                            <span className="fw-bolder fs-4">Digital Card</span>
                            <Link to="/admin-digital-card" className="btn btn-primary m-1">Back</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <table className="table table-responsive table-bordered text-dark">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="text-center fs-5">Card Details</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <td><span className="mx-3">Id</span></td>
                                        <td><span className="mx-3">{data[0].card_id}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Title</span></td>
                                        <td><span className="mx-3">{data[0].title}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Business id</span></td>
                                        <td><span className="mx-3">{data[0].business_id}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Email</span></td>
                                        <td><span className="mx-3">{data[0].email}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Phone</span></td>
                                        <td><span className="mx-3">{data[0].phone}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Address</span></td>
                                        <td><span className="mx-3">{data[0].address}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">City</span></td>
                                        <td><span className="mx-3">{data[0].city}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Pincode</span></td>
                                        <td><span className="mx-3">{data[0].pincode}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="mx-3">Photo</span></td>
                                        <td><span className="mx-3"><img src={`http://127.0.0.1:5000/imagesserver/card/${data[0].photo}`} width="400px" alt /></span></td>
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