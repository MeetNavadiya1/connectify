import signInImage from './images/auth/signin-image.svg';
import shapeImage from './images/auth/shape.svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useCookies } from 'react-cookie'

export default function BusinessLogin() {

    //create state variable
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let navigator = useNavigate(); //create object using hook
    //create cookie object 
    let [cookies, setCookie, removeCookie] = useCookies(['connectify']);

    let Login = function (event) {
        // console.log(email,password);
        let apiAddress = "http://127.0.0.1:5000/business-login";
        //required input [email,password]
        let form = {
            email: email,
            password: password,
          };
        //call api 
        axios({
            method: "post",
            responseType: 'json',
            url: apiAddress,
            data: form // Include the form data in the request
        }).then((response) => {
            console.log(response);
            //fetch error detail
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'yes') {
                    // toast.success(message, { autoClose: 2000 });
                    showMessage(message);
                    //create cookie to store admin id 
                    setCookie('id', response.data[3]['id'], { path: '/' });
                    // console.log('updated cookie', cookies['id']);
                    setTimeout(() => {
                        navigator("/business-your-card");
                    }, 2000);
                }
                else {
                    showError("invalid username or passsword");
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
            <ToastContainer />
            <div className="container mt-3">
                <div className="row g-0 auth-row">
                    <div className="col-lg-6 shadow">
                        <div className="auth-cover-wrapper bg-primary-100">
                            <div className="auth-cover">
                                <div className="title text-center">
                                    <h1 className="text-primary mb-10">Welcome Back</h1>
                                    <p className="text-medium">
                                        Log in to your Existing account to continue
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
                                <form method="POST" onSubmit={Login}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-style-1">
                                                <label>Email</label>
                                                <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-12">
                                            <div className="input-style-1">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password" maxLength={20} value={password} onChange={(event) => setPassword(event.target.value)} required />
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-12">
                                            <div className="text-end mb-30">
                                                <Link to="/business-forgot-password" className="hover-underline">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                        {/* end col */}
                                        <div className="col-12">
                                            <div className="button-group d-flex justify-content-center flex-wrap">
                                                <button type="submit" className="main-btn primary-btn btn-hover w-100 text-center">
                                                    Log In
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end row */}
                                </form>
                                <div className="singin-option pt-40">
                                    <p className="text-sm text-medium text-dark text-center">
                                        Don’t have any account yet?
                                        <Link to="/business-register">Create an account</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col */}
                </div>
            </div>
        </div>
    );
}