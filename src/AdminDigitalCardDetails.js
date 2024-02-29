import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminDigitalCardDetail() {
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
                            <span className="fw-bolder fs-6">Digital Card</span>
                            <Link to="/digital-card" className="btn btn-primary m-1">Back</Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <table className="table table-responsive table-bordered text-dark">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="text-center fs-5">Card Details</th>
                                    </tr>
                                </thead>
                                <tbody className="fs-4 table-group-divider">
                                    <tr>
                                        <td>Id</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>madhav copper</td>
                                    </tr>
                                    <tr>
                                        <td>Category id</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Business id</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>madhavcopper@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
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
                                        <td>Pincode</td>
                                        <td>364002</td>
                                    </tr>
                                    <tr>
                                        <td>Photo</td>
                                        <td><img src="https://picsum.photos/300/400" alt /></td>
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