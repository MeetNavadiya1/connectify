export default function AdminForgotPassword() {
    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow">
                                <div className="card-body">
                                    <h4 className="text-center fw-bolder mb-3">Forgot Password?</h4>
                                    <p className="mb-4">Enter your email and we'll send you instructions on your Gmail to reset your password</p>
                                    <form>
                                        <div className="mb-4">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" autofocus />
                                        </div>
                                        <a href="./index.html" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Send Reset Link</a>
                                    </form>
                                    <div className="text-center">
                                        <a href="admin-login.html" className="align-middle text-center">
                                            <i className="ti ti-chevron-left" />
                                            Back to login
                                        </a>
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