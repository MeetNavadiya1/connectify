export default function AdminHeader() {

    return (
        <header className="app-header shadow">
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item d-block d-xl-none">
                        <div className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse">
                            <i className="ti ti-menu-2" />
                        </div>
                    </li>
                </ul>
                <div className="navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <span className="fw-bolder fs-6" style={{ "color": "#4B49AC" }}>Admin Panel</span>
                    <img src="../admin/assets/images/profile/user-1.jpg" alt width={35} height={35} className="rounded-circle" />
                </div>
            </nav>
        </header>
    );
}