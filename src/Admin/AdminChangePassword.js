import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function AdminChangePassword() {

    VerifyLogin();

    let [old_pass, setOld_pass] = useState();
    let [new_pass, setNew_pass] = useState();
    let [conf_pass, setConf_pass] = useState();

    let VerifyChangePassword = function (event) {
        if (new_pass !== conf_pass) {
            showError("Confirm password is not same as new password")
        }
        else {
            let apiAddress = "http://127.0.0.1:5000/admin-change-password";
            //required input 
            let form = {
                old_pass: old_pass,
                new_pass: new_pass
            };
            //call api 
            axios({
                method: "post",
                responseType: 'json',
                url: apiAddress,
                data: form // Include the form data in the request
            }).then((response) => {
                console.log(response);
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showError(error);
                else {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if (success === 'yes') {
                        showMessage(message);
                    }
                    else if (success === 'no') {
                        showError("invalid oldpassword");
                    }
                }
            }).catch((error) => {
                showError('you are trying to access invalid position/key');
            })
        }
        event.preventDefault();
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
                            <span className="fw-bolder fs-6">Change Password</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <div className="card-body">
                                    <form onSubmit={VerifyChangePassword}>
                                        <div className="mb-3">
                                            <label htmlFor="currentpassword" className="form-label">Current Password</label>
                                            <input type="password" className="form-control" id="currentpassword" aria-describedby="emailHelp" placeholder="Enter your current Password" value={old_pass} onChange={(event) => setOld_pass(event.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="newPassword" className="form-label">New Password</label>
                                            <input type="password" className="form-control" id="newPassword" placeholder="Enter your new password" value={new_pass} onChange={(event) => setNew_pass(event.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="confirmnewPassword" className="form-label">Confirm New Password</label>
                                            <input type="password" className="form-control" id="confirmnewPassword" placeholder="Enter confirm password" value={conf_pass} onChange={(event) => setConf_pass(event.target.value)} required />
                                            <div id="emailHelp" className="form-text">We'll never share your password with anyone
                                                else.</div>
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}