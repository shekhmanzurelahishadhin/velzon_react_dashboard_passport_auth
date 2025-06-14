import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import React, { useEffect } from "react";
import PrivateRoute from './auth/PrivateRoute';
import GuestRoute from './auth/GuestRoute';
import Test from './pages/Test';
import useRightSideResponsive from './hooks/useRightSideResponsive';
function App() {
  useRightSideResponsive();


  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
        />
        <Route path='test' element={
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        }
        />
      </Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
        />
        <Route path='register' element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        } />
        <Route path='reset-password' element={<ResetPassword />} />

      </Route>
      <Route path='*' element={<NotFound />} />

    </Routes>
  );
}

export default App;
