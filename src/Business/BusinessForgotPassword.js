import signInImage from './images/auth/signin-image.svg';
import shapeImage from './images/auth/shape.svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function BusinessForgotPassword() {

    let [email, setEmail] = useState();

    let forgotPassword = function (event) {
        // console.log(email,password);
        let apiAddress = "http://127.0.0.1:5000/business-forgot-password";
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
        <div>
            <div className="container mt-3">
                <ToastContainer />
                <div className="row g-0 auth-row">
                    <div className="col-lg-6 shadow">
                        <div className="auth-cover-wrapper bg-primary-100">
                            <div className="auth-cover">
                                <div className="title text-center">
                                    <h1 className="text-primary mb-10">Welcome Back</h1>
                                    <p className="text-medium">
                                        Provide an email to recover your password!
                                    </p>
                                </div>
                                <div className="cover-image">
                                    <img src={signInImage} alt="" />
                                </div>
                                <div className="shape-image">
                                    <img src={shapeImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-6 shadow">
                        <div className="signin-wrapper">
                            <div className="form-wrapper">
                                <h6 className="mb-15">Forgot Your Password?</h6>
                                <p className="text-sm mb-25">
                                    Please Provide Your Registered Email, We will sent you an email to recover your password!
                                </p>
                                <form onSubmit={forgotPassword}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-style-1">
                                                <label>Email</label>
                                                <input type="email" placeholder="Enter registered email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-12">
                                            <div className="button-group d-flex justify-content-center flex-wrap">
                                                <button type='submit' className="main-btn primary-btn btn-hover w-100 text-center">
                                                    Send Email
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="button-group d-flex justify-content-center flex-wrap">
                                                <Link to="/" className="main-btn primary-btn-outline btn-hover w-100 text-center">
                                                    Back To Log In
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end row */}
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                </div>
            </div>
        </div>
    );
}