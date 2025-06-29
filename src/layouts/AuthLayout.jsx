import React, {useEffect} from 'react'
import LoadScript from '../components/LoadScript'
import { Outlet, useLocation } from 'react-router-dom'
import AuthScript from '../components/AuthScript';
import useAuth from '../auth/useAuth';

export default function AuthLayout() {
    const { user } = useAuth(); 
    useEffect(() => {
    document.documentElement.setAttribute("data-theme", "default");
    document.documentElement.setAttribute("data-sidebar", "dark");
    document.documentElement.setAttribute("data-layout", "vertical");
    document.documentElement.setAttribute("data-sidebar-size", "lg");
    }, []);

    return (
        <div>
             {!user && <AuthScript/>}
            <Outlet/>
        </div>
    )
}
