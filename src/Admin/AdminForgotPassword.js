import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function AdminForgotPassword() {

    let [email, setEmail] = useState();

    let forgotPassword = function (event) {
        // console.log(email,password);
        let apiAddress = "http://127.0.0.1:5000/admin-forgot-password";
        //required input [email,password]
        let form = {
            email: email
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
                else if(success === 'no') {
                    showError("invalid Email");
                }
            }
        }).catch((error) => {
                // console.log(error);
                showError('you are trying to access invalid position/key');
            })
        event.preventDefault(); //this is required to prevent submitting form
    }


    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <ToastContainer />
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow">
                                <div className="card-body">
                                    <h4 className="text-center fw-bolder mb-3">Forgot Password?</h4>
                                    <p className="mb-4">Enter your email and we'll send you instructions on your Gmail to reset your password</p>
                                    <form onSubmit={forgotPassword}>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required autoFocus />
                                        </div>
                                        <input type="submit" value="Send Mail" className="btn btn-primary w-100 py-8 mb-2 rounded-2" />
                                    </form>
                                    <div className="text-center">
                                        <Link to="/admin-login" className="btn btn-outline-primary w-100 py-8 mb-4 rounded-2" >Back to login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}