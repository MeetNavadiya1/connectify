import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminUsersDetail() {
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
                            <span className="fw-bolder fs-6">Users</span>
                            <Link to="/users" className="btn btn-primary m-1">Back</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <table className="table table-responsive table-bordered text-dark">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="text-center fs-5">User's Details</th>
                                    </tr>
                                </thead>
                                <tbody className="fs-4 table-group-divider">
                                    <tr>
                                        <td>Id</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>madhav</td>
                                    </tr>
                                    <tr>
                                        <td>User Name</td>
                                        <td>madhav123</td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>123123</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>madhav123@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile No</td>
                                        <td>9865878956</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>somnath highway</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>bhavnagar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}