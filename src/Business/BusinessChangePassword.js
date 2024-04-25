import Menu from './Menu';
import Header from './Header';
import VerifyLogin from './VerifyLogin';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function BusinessChangePassword() {

    VerifyLogin();

    let [old_pass, setOld_pass] = useState();
    let [new_pass, setNew_pass] = useState();
    let [conf_pass, setConf_pass] = useState();

    let VerifyChangePassword = function (event) {
        if (new_pass !== conf_pass) {
            showError("Confirm password is not same as new password")
        }
        else {
            let apiAddress = "http://127.0.0.1:5000/business-change-password";
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
        <div>
            <Menu />
            {/* ======== sidebar-nav end =========== */}
            {/* ======== main-wrapper start =========== */}
            <main className="main-wrapper">
                <ToastContainer />
                {/* ========== header start ========== */}
                <Header title="Change Password" />
                {/* ========== header end ========== */}
                {/* ========== section start ========== */}
                <section className="section">
                    <div className="container-fluid mt-3">
                        <form onSubmit={VerifyChangePassword}>
                            <div className="card shadow mx-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-style-1">
                                                <label>Old Password</label>
                                                <input type="password" placeholder="Enter old password" maxLength={20} value={old_pass} onChange={(event) => setOld_pass(event.target.value)} required />
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-12">
                                            <div className="input-style-1">
                                                <label>New Password</label>
                                                <input type="password" placeholder="Enter New Password" maxLength={20} value={new_pass} onChange={(event) => setNew_pass(event.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-style-1">
                                                <label>Confirm New Password</label>
                                                <input type="password" placeholder="Enter Confirm New Password" maxLength={20} value={conf_pass} onChange={(event) => setConf_pass(event.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-end">
                                            <button type="submit" className="btn btn-primary px-4">Change Password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* end container */}
                </section>
            </main>
        </div>
    );
}