import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import VerifyLogin from "./VerifyLogin";

export default function AdminCategory() {

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
                            <span className="fw-bolder fs-6">Category</span>
                            <Link to="/add-category" className="btn btn-primary m-1">Add Category</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <span className="card-header text-bg-primary fs-5 fw-bold">Existing Categories</span>
                                <div className="card-body">
                                    <table className="table table-responsive text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>SR NO</th>
                                                <th>TITLE</th>
                                                <th>PHOTO</th>
                                                <th>IS LIVE?</th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="top-text table-group-divider">
                                            <tr>
                                                <td>1</td>
                                                <td>business</td>
                                                <td>
                                                    <img src="https://picsum.photos/100" className="img-fluid" />
                                                </td>
                                                <td>Yes</td>
                                                <td>
                                                    <Link to="/edit-category">
                                                        <i className="fa-regular fa-pen-to-square fa-2xl" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa-solid fa-trash fa-2xl mx-4" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}