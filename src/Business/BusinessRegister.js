import signInImage from './images/auth/signin-image.svg';
import shapeImage from './images/auth/shape.svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BusinessRegister() {

    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [conf_pass, setConf_pass] = useState();

    let navigator = useNavigate();
    let handleRegister = function (event) {
        if (password !== conf_pass) {
            showError("Confirm password is not same as new password")
        }
        else {

            let formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            let apiAddress = "http://127.0.0.1:5000/business-register";
            axios({
                method: "post",
                responseType: 'json',
                url: apiAddress,
                data: formData,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response);
                let error = response.data[0]['error'];
                if (error !== 'no') {
                    showError(error);
                } else {
                    let message = response.data[2]['message'];
                    showMessage(message);
                    setTimeout(() => {
                        navigator("/business-login");
                    }, 2000);
                }
            }).catch((error) => {
                showError('you are trying to access invalid position/key');
            })
        }
        event.preventDefault();
    }

    return (
        <div className="container">
            <ToastContainer />
            <div className="row g-0 auth-row">
                <div className="col-lg-6 shadow">
                    <div className="auth-cover-wrapper bg-primary-100">
                        <div className="auth-cover">
                            <div className="title text-center">
                                <h1 className="text-primary mb-10">Welcome</h1>
                                <p className="text-medium">
                                    Sign up to create new account to continue
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
                            <form onSubmit={handleRegister}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-style-1">
                                            <label>Name</label>
                                            <input type="text" placeholder="Business Name" maxLength={20} required value={name} onChange={(event) => setName(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-style-1">
                                            <label>Email</label>
                                            <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required value={email} onChange={(event) => setEmail(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-style-1">
                                            <label>Password</label>
                                            <input type="password" placeholder="Password" maxLength={20} required value={password} onChange={(event) => setPassword(event.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-style-1">
                                            <label>Confirm Password</label>
                                            <input type="password" placeholder="Confirm Password" maxLength={20} required value={conf_pass} onChange={(event) => setConf_pass(event.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="button-group d-flex justify-content-center flex-wrap">
                                            <button className="main-btn primary-btn btn-hover w-100 text-center">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="button-group d-flex justify-content-center flex-wrap">
                                            <Link to="/business-login" className="main-btn primary-btn-outline btn-hover w-100 text-center">
                                                Back To Log In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end col */}
            </div>
        </div>
    );
}