import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';
import AdminBusinesses from './Admin/AdminBusinesses';
import AdminBusinessDetail from './Admin/AdminBusinessDetail';
import AdminDigitalCard from './Admin/AdminDigitalCard';
import AdminDigitalCardDetail from './Admin/AdminDigitalCardDetails';
import AdminUsers from './Admin/AdminUsers';
import AdminUsersDetail from './Admin/AdminUsersDetail';
import AdminForgotPassword from './Admin/AdminForgotPassword';
import AdminChangePassword from './Admin/AdminChangePassword';
import AdminLogOut from './Admin/AdminLogOut';

// user modules
import BusinessLogin from './Business/BusinessLogin';
import BusinessForgotPassword from './Business/BusinessForgotPassword';
import BusinessRegister from './Business/BusinessRegister';
import BusinessYourCard from './Business/BusinessYourCard';
import BusinessCardForm from './Business/BusinessCardForm';
import BusinessCreateCard from './Business/BusinessCreateCard';
import BusinessChangePassword from './Business/BusinessChangePassword';
import BusinessLogOut from './Business/BusinessLogOut';
import UserCardView from './Business/UserViewCard';
import BusinessEditCard from './Business/BusinessEditCard';
import UserRegister from './Business/UserRegister';

import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));


function MyRouter2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/business-login' element={<BusinessLogin />} />
                <Route path='/business-forgot-password' element={<BusinessForgotPassword />} />
                <Route path='/business-register' element={<BusinessRegister />} />
                <Route path='/user-register' element={<UserRegister />} />
                <Route path='/business-your-card' element={<BusinessYourCard />} />
                <Route path='/business-card-form' element={<BusinessCardForm />} />
                <Route path='/business-create-card' element={<BusinessCreateCard />} />
                <Route path='/business-change-password' element={<BusinessChangePassword />} />
                <Route path='/user-view-card/:id' element={<UserCardView />} />
                <Route path='/business-edit-card/:card_id' element={<BusinessEditCard />} />
                <Route path='/business-log-out' element={<BusinessLogOut />} />
                <Route path='/admin-login' element={<AdminLogin />} />
                <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
                <Route path='/admin-home' element={<AdminHome />} />
                <Route path='/admin-digital-card' element={<AdminDigitalCard />} />
                <Route path='/admin-digital-card-detail/:card_id' element={<AdminDigitalCardDetail />} />
                <Route path='/admin-users' element={<AdminUsers />} />
                <Route path='/admin-users-detail/:userid' element={<AdminUsersDetail />} />
                <Route path='/admin-businesses' element={<AdminBusinesses />} />
                <Route path='/admin-business-detail/:businessid' element={<AdminBusinessDetail />} />
                <Route path='/admin-change-password' element={<AdminChangePassword />} />
                <Route path='/admin-logout' element={<AdminLogOut />} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(<MyRouter2 />);
