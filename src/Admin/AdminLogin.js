import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./Tost-Message";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useCookies } from 'react-cookie'

export default function AdminLogin() {

    //create state variable
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let navigator = useNavigate(); //create object using hook
    //create cookie object 
    let [cookies, setCookie, removeCookie] = useCookies(['connectify']);

    let Login = function (event) {
        // console.log(email,password);
        let apiAddress = "http://127.0.0.1:5000/";
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
                        navigator("/home");
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
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <ToastContainer />
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow">
                                <div className="card-body">
                                    <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                        <img src="../admin/assets/images/logos/logo.png" width={180} alt />
                                    </a>
                                    <p className="text-center mb-4">Your Digital Companion</p>
                                    <form method="POST" onSubmit={Login}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                            value={email} onChange={(event) => setEmail(event.target.value)}/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(event) => setPassword(event.target.value)}/>
                                        </div>
                                        <div className="text-end mb-4">
                                            <a className="text-primary fw-bold" href="admin-forgot-password.html">Forgot Password ?</a>
                                        </div>
                                        <input type="submit" value="Sign In" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" />
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