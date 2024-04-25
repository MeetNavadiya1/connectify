import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <aside className="sidebar-nav-wrapper">
            <div className="navbar-logo">
                <Link to="/business-your-card">
                    <img src="../admin/assets/images/logos/logo.png" width={160} alt="logo" />
                </Link>
            </div>
            <nav className="sidebar-nav mt-5">
                <ul>
                    <li className="nav-item nav-item-has-children">
                        <Link to="/business-your-card">
                            <span className="icon">
                                <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59" />
                                </svg>
                            </span>
                            <span className="text">Your Cards</span>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-has-children">
                        <Link to="/business-create-card">
                            <span className="icon">
                                <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H20C21.11 4 22 4.89 22 6V13.81C21.12 13.3 20.09 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
                                </svg>
                            </span>
                            <span className="text">Create Card</span>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-has-children">
                        <Link to="/business-change-password">
                            <span className="icon">
                            <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><title>lock-reset</title><path d="M12.63,2C18.16,2 22.64,6.5 22.64,12C22.64,17.5 18.16,22 12.63,22C9.12,22 6.05,20.18 4.26,17.43L5.84,16.18C7.25,18.47 9.76,20 12.64,20A8,8 0 0,0 20.64,12A8,8 0 0,0 12.64,4C8.56,4 5.2,7.06 4.71,11H7.47L3.73,14.73L0,11H2.69C3.19,5.95 7.45,2 12.63,2M15.59,10.24C16.09,10.25 16.5,10.65 16.5,11.16V15.77C16.5,16.27 16.09,16.69 15.58,16.69H10.05C9.54,16.69 9.13,16.27 9.13,15.77V11.16C9.13,10.65 9.54,10.25 10.04,10.24V9.23C10.04,7.7 11.29,6.46 12.81,6.46C14.34,6.46 15.59,7.7 15.59,9.23V10.24M12.81,7.86C12.06,7.86 11.44,8.47 11.44,9.23V10.24H14.19V9.23C14.19,8.47 13.57,7.86 12.81,7.86Z" /></svg>
                            </span>
                            <span className="text">Change Password</span>
                        </Link>
                    </li>
                    <li className="nav-item nav-item-has-children align-items-center">
                        <Link to="/business-log-out">
                            <span className="icon">
                                <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 6C12.1 6 13 6.9 13 8S12.1 10 11 10 9 9.1 9 8 9.9 6 11 6M11 13C8.3 13 3 14.3 3 17V20H12.5C12.2 19.4 12.1 18.8 12 18.1H4.9V17C4.9 16.4 8 14.9 11 14.9C11.5 14.9 12 15 12.5 15C12.8 14.4 13.1 13.8 13.6 13.3C12.6 13.1 11.7 13 11 13" />
                                </svg>
                            </span>
                            <span className="text">Log Out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}