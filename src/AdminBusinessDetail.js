import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminBusinessDetail() {
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
                            <span className="fw-bolder fs-6">Businesses</span>
                            <Link to="/businesses" className="btn btn-primary m-1">Back</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <table className="table table-responsive table-bordered text-dark">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="text-center fs-5">Business's Details</th>
                                    </tr>
                                </thead>
                                <tbody className="fs-4 table-group-divider">
                                    <tr>
                                        <td>Id</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Business_Name</td>
                                        <td>madhav</td>
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
                                    <tr>
                                        <td>Status</td>
                                        <td>log in</td>
                                    </tr>
                                    <tr>
                                        <td>Acc_open_date</td>
                                        <td>12-03-2024</td>
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