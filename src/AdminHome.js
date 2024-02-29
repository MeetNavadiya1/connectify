import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminHome() {
    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
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
                        <div className="col-4">
                            <div className="card overflow-hidden shadow">
                                <div className="card-body p-4 text-center">
                                    <h5 className="card-title mb-9 fw-semibold">Total Businesses</h5>
                                    <div className="row">
                                        <div className="col-12 fs-6">
                                            <i className="fa-solid fa-building text-success-emphasis" style={{ "font-size": "4rem" }} />
                                            <span className="mx-4 fw-semibold" style={{ "font-size": "3rem" }}>36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card overflow-hidden shadow">
                                <div className="card-body p-4 text-center">
                                    <h5 className="card-title mb-9 fw-semibold">Total Users</h5>
                                    <div className="row">
                                        <div className="col-12 fs-6 align-items-center">
                                            <i className="fa-solid fa-users text-primary" style={{ "font-size": "4rem" }} />
                                            <span className="mx-4 fw-semibold" style={{ "font-size": "3rem" }}>36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card overflow-hidden shadow">
                                <div className="card-body p-4 text-center">
                                    <h5 className="card-title mb-9 fw-semibold">Total Cards</h5>
                                    <div className="row">
                                        <div className="col-12 fs-6 align-items-center">
                                            <i className="fa-solid fa-credit-card text-danger" style={{ "font-size": "4rem" }} />
                                            <span className="mx-4 fw-semibold" style={{ "font-size": "3rem" }}>36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card overflow-hidden shadow">
                                <div className="card-body p-4 text-center">
                                    <h5 className="card-title mb-9 fw-semibold">Total Category</h5>
                                    <div className="row">
                                        <div className="col-12 fs-6 align-items-center">
                                            <i className="fa-solid fa-list text-info" style={{ "font-size": "4rem" }} />
                                            <span className="mx-4 fw-semibold" style={{ "font-size": "3rem" }}>36</span>
                                        </div>
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