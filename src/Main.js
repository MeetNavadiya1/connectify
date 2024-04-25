import { Link } from "react-router-dom";
import './App.css'
import img from './HERO.webp';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Main() {

    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);

    const navigateTo = (path) => {
        setModalOpen(false); // Hide modal using state

        // Use effect to navigate after state update
        setTimeout(() => navigate(path), 150); // Adjust delay based on modal transition time
    };

    return (
        <div>

            <div className="container-fluid m-my-main">
                <div className="row">
                    <aside className="m-nav">
                        <a href="#">
                            <img src="../admin/assets/images/logos/logo.png" alt="logo" width="180px" />
                        </a>
                        <div className="m-links">
                            <ul>
                                <li>
                                    <button type="button" className="btn btn-outline-primary px-4 fw-bold" onClick={() => setModalOpen(true)}>
                                        Log In
                                    </button>
                                    {isModalOpen && (
                                        <div className="modal fade show" id="loginmodal" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="loginmodalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="loginmodalLabel">Log In To Start</h1>
                                                        <button type="button" className="btn-close" onClick={() => setModalOpen(false)} aria-label="Close" />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row mb-4 text-center justify-content-center">
                                                            <span>To Create Cards Login TO Business</span>
                                                            <button onClick={() => navigateTo('/business-login')} className="btn btn-primary px-3 w-25">Business-Login</button>
                                                        </div>
                                                        <div className="row mb-5 text-center justify-content-center">
                                                            <span className="m-user-register">Register User TO Get Deshboard In Future</span>
                                                            <button onClick={() => navigateTo('/user-register')} className="btn btn-outline-primary px-3 w-25">User-Register</button>
                                                        </div>
                                                        <div className="row">
                                                            <span>For Website Admin Only</span>
                                                            <button onClick={() => navigateTo('/admin-login')} className="btn btn-outline-primary w-25 mx-2">Admin</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div className="row m-hero-container">
                    <section className="m-hero">
                        <p className="m-first">BUILT WITH NEW PATENTED TECHNOLOGY</p>
                        <p className="m-second">Enter the <span className="m-second-color">Future of</span> <span className="m-second-color">Networking</span> with Connectify’s Smart Digital Business Card</p>
                        <p className="m-third">Create your Personal Virtual Business Card and Manage your Contacts in the Next 5 MINUTES!</p>
                        <Link to="/business-login" className="btn btn-primary mt-3 fw-semibold px-4 py-3">Create Your Card Now</Link>
                    </section>
                    <section className="m-hero-img">
                        <img src={img} width="600px" alt />
                    </section>
                </div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <p className="m-feature text-center text-primary">How Virtual Business Card Works?</p>
                        <div className="m-work-container">
                            <div className="m-work mx-3">
                                <div className="m-card">
                                    <p className="fs-5 fw-bold mb-4">step-1</p>
                                    <i className="fa-solid fa-pencil m-work-icon" />
                                    <div className="mt-4">
                                        <span className="fs-5 fw-bold">Create YOUR CARD</span>
                                        <p className="mt-2 fs-6">Create your Virtual Business Card within minutes with impressive content and design.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="m-work mx-3">
                                <div className="m-card">
                                    <p className="fs-5 fw-bold mb-4">step-2</p>
                                    <i className="fa-solid fa-download m-work-icon" />
                                    <div className="mt-4">
                                        <span className="fs-5 fw-bold">Download YOUR CARD</span>
                                        <p className="mt-2 fs-6">After Creating Business Card Download your card from your panel anytime and anywhere.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="m-work mx-3">
                                <div className="m-card">
                                    <p className="fs-5 fw-bold mb-4">step-3</p>
                                    <i className="fa-solid fa-share m-work-icon" />
                                    <div className="mt-4">
                                        <span className="fs-5 fw-bold">SHARE YOUR CARD</span>
                                        <p className="mt-2 fs-6">You can Share your digital business card after downloading anytime and anywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-2">
                        <p className="m-feature text-center text-primary">Features</p>
                        <div className="m-icon-container">
                            <div className="m-icon-first">
                                <div className="m-icon">
                                    <i className="fa-solid fa-download" />
                                    <span>Download Card</span>
                                </div>
                                <div className="m-icon">
                                    <i className="fa-solid fa-qrcode" />
                                    <span>Download QrCode</span>
                                </div>
                                <div className="m-icon">
                                    <i className="fa-solid fa-image" />
                                    <span>Image of Business</span>
                                </div>
                            </div>
                            <div className="m-icon-first">
                                <div className="m-icon">
                                    <i className="fa-solid fa-phone" />
                                    <span>One Click To Call</span>
                                </div>
                                <div className="m-icon">
                                    <i className="fa-solid fa-envelope" />
                                    <span>One Click To Email</span>
                                </div>
                                <div className="m-icon">
                                    <i className="fa-solid fa-location-dot" />
                                    <span>One Click Navigate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p className="m-feature text-center text-primary">Why You Choose Our Website?</p>
                    <div className="col-6">
                        <p className="m-trust-text">Most trusted and reviewed digital business card plateform.</p>
                    </div>
                    <div className="col-6">
                        <div className="m-trust-container">
                            <div className="m-trust-first">
                                <div className="m-trust-card m-color-one">
                                    <span className="fs-3 fw-semibold">1k+</span>
                                    <p>Successful Users</p>
                                </div>
                                <div className="m-trust-card m-color-two mx-4">
                                    <span className="fs-3 fw-semibold">100k+</span>
                                    <p>Views on card</p>
                                </div>
                            </div>
                            <div className="m-trust-first mt-3">
                                <div className="m-trust-card m-color-three">
                                    <span className="fs-3 fw-semibold">100+</span>
                                    <p>Cards Created</p>
                                </div>
                                <div className="m-trust-card m-color-four mx-4">
                                    <span className="fs-3 fw-semibold">70+</span>
                                    <p>Businesses Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center footer">
                        <span className>© 2024 Connectify Inc. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}