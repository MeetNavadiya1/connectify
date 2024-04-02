import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";

export default function AdminChangePassword() {

    VerifyLogin();

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
                        <div className="col-12 d-flex justify-content-between align-content-center">
                            <span className="fw-bolder fs-6">Change Password</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="currentpassword" className="form-label">Current Password</label>
                                            <input type="password" className="form-control" id="currentpassword" aria-describedby="emailHelp" placeholder="Enter your current Password" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="newPassword" className="form-label">New Password</label>
                                            <input type="password" className="form-control" id="newPassword" placeholder="Enter your new password" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="confirmnewPassword" className="form-label">Confirm New Password</label>
                                            <input type="password" className="form-control" id="confirmnewPassword" placeholder="Enter confirm password" required />
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