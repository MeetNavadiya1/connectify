import profileImage from './images/profile/profile-image.png';

export default function Header(props) {
    return (
        <header className="header p-2 shadow-sm">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-6">
                        <div className="header-left d-flex align-items-center">
                            <div className="menu-toggle-btn mr-15">
                                <span className='fs-4 fw-bold mt-1 text-primary'>
                                    {props.title}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-6">
                        <div className="header-right">
                            {/* profile start */}
                            <div className="profile-box ml-15">
                                <div className="profile-info">
                                    <div className="info">
                                        <div className="image">
                                            <img src={profileImage} alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* profile end */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}