import Header from "./Header";
import Menu from "./Menu";
import '../App.css';
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";

export default function BusinessCreateCard() {

    VerifyLogin();

    return (
        <div>
            <Menu />
            <div className="overlay" />
            {/* ======== sidebar-nav end =========== */}
            {/* ======== main-wrapper start =========== */}
            <main className="main-wrapper">
                {/* ========== header start ========== */}
                <Header title="Create Card" />
                {/* =======>=== header end ========== */}
                {/* ========== section start ========== */}
                <section className="section">
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <div className="col-2">
                                <Link to="/business-card-form">
                                    <div className="card c-card border-5" style={{ "background-color": "#8F60DE" }}>
                                        <div className="card-body mt-4">
                                            <span className="c-my-icon">
                                                <i className="fa-solid fa-plus" />
                                            </span>
                                            <span className="fs-3 fw-bold text-light mt-2">For</span>
                                            <span className="fs-3 fw-bold text-light">Business</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== section end ========== */}
            </main>
        </div>
    );
}