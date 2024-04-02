import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';
import AdminCategory from './Admin/AdminCategory';
import AdminAddCategory from './Admin/AdminAddCategory';
import AdminEditCategory from './Admin/AdminEditCategory';
import AdminBusinesses from './Admin/AdminBusinesses';
import AdminBusinessDetail from './Admin/AdminBusinessDetail';
import AdminDigitalCard from './Admin/AdminDigitalCard';
import AdminDigitalCardDetail from './Admin/AdminDigitalCardDetails';
import AdminUsers from './Admin/AdminUsers';
import AdminUsersDetail from './Admin/AdminUsersDetail';
import AdminForgotPassword from './Admin/AdminForgotPassword';
import AdminChangePassword from './Admin/AdminChangePassword';
import AdminLogOut from './Admin/AdminLogOut';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogin />} />
                <Route path='/forgot-password' element={<AdminForgotPassword />} />
                <Route path='/home' element={<AdminHome />} />
                <Route path='/category' element={<AdminCategory />} />
                <Route path='/add-category' element={<AdminAddCategory />} />
                <Route path='/edit-category' element={<AdminEditCategory />} />
                <Route path='/digital-card' element={<AdminDigitalCard />} />
                <Route path='/digital-card-detail' element={<AdminDigitalCardDetail />} />
                <Route path='/users' element={<AdminUsers />} />
                <Route path='/users-detail/:userid' element={<AdminUsersDetail />} />
                <Route path='/businesses' element={<AdminBusinesses />} />
                <Route path='/business-detail/:businessid' element={<AdminBusinessDetail />} />
                <Route path='/change-password' element={<AdminChangePassword />} />
                <Route path='/log-out' element={<AdminLogOut />} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(<MyRouter />);
