import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";

export default function AdminEditCategory() {
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
                            <span className="fw-bolder fs-6">Edit Category</span>
                            <Link to="/category" className="btn btn-primary m-1">Back</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-3 shadow">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter category name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">photo</label>
                                            <input type="file" className="form-control" id="photo" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="details" className="form-label">Details</label>
                                            <textarea type="text" className="form-control" style={{ "height": "100px" }} id="deatils" placeholder="Enter details of category" required defaultValue={""} />
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-outline-dark mx-1">Clear</button>
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