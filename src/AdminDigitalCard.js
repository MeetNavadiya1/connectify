import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminDigialCard() {
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
                            <span className="fw-bolder fs-6">Digital Cards</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <span className="card-header text-bg-primary fs-5 fw-bold">Existing Cards</span>
                                <div className="card-body">
                                    <table className="table table-responsive text-nowrap">
                                        <thead>
                                            <tr>
                                                <th width="15%">SR NO</th>
                                                <th width="25%">TITLE</th>
                                                <th width="20%">CATEGORY ID</th>
                                                <th width="25%">PHOTO</th>
                                                <th width="15%">DETAIL</th>
                                            </tr>
                                        </thead>
                                        <tbody className="top-text table-group-divider">
                                            <tr>
                                                <td>1</td>
                                                <td>abc</td>
                                                <td>12</td>
                                                <td>
                                                    <img src="https://picsum.photos/100" className="img-fluid" />
                                                </td>
                                                <td>
                                                    <Link to="/digital-card-detail">
                                                        <i className="fa-solid fa-circle-info fa-2xl" />
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