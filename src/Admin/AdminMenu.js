import { Link } from "react-router-dom";
import logo from './images/logo.png';

export default function AdminMenu() {

    return (
        <aside className="left-sidebar shadow" >
            {/* Sidebar scroll*/}
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <Link to="/admin-home" className="text-nowrap logo-img">
                        <img src={logo} width={180} alt="logo" />
                    </Link>
                    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x fs-8" />
                    </div>
                </div>
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">Links</span>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/admin-home" aria-expanded="false">
                                <span>
                                    <i className="ti ti-home" />
                                </span>
                                <span className="hide-menu">Home</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/admin-digital-card" aria-expanded="false">
                                <span>
                                    <i className="ti ti-cards" />
                                </span>
                                <span className="hide-menu">Digital Card</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/admin-Businesses" aria-expanded="false">
                                <span>
                                    <i className="ti ti-businessplan" />
                                </span>
                                <span className="hide-menu">Businesses</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/admin-users" aria-expanded="false">
                                <span>
                                    <i className="ti ti-users" />
                                </span>
                                <span className="hide-menu">Users</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/admin-change-password" aria-expanded="false">
                                <span>
                                    <i class="ti ti-lock"></i>
                                </span>
                                <span className="hide-menu">Change Password</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/admin-logout" aria-expanded="false">
                                <span>
                                    <i className="ti ti-logout" />
                                </span>
                                <span className="hide-menu">Log out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
    );
}