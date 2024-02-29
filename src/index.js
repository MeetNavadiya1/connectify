import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminHome from './AdminHome';
import AdminCategory from './AdminCategory';
import AdminAddCategory from './AdminAddCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminBusinesses from './AdminBusinesses';
import AdminBusinessDetail from './AdminBusinessDetail';
import AdminDigitalCard from './AdminDigitalCard';
import AdminDigitalCardDetail from './AdminDigitalCardDetails';
import AdminUsers from './AdminUsers';
import AdminUsersDetail from './AdminUsersDetail';
import AdminForgotPassword from './AdminForgotPassword';
import AdminChangePassword from './AdminChangePassword';
import AdminLogOut from './AdminLogOut';

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
                <Route path='/users-detail' element={<AdminUsersDetail />} />
                <Route path='/businesses' element={<AdminBusinesses />} />
                <Route path='/business-detail' element={<AdminBusinessDetail />} />
                <Route path='/change-password' element={<AdminChangePassword />} />
                <Route path='/log-out' element={<AdminLogOut />} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(<MyRouter />);
