
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import LoadScript from '../components/LoadScript'
import React, { useEffect } from 'react'
import SiteSettignOptions from '../components/SiteSettignOptions'
import useAuth from '../auth/useAuth';


export default function MainLayout() {
const { user } = useAuth(); 

useEffect(() => {
document.documentElement.setAttribute("data-theme", "default");
document.documentElement.setAttribute("data-sidebar", "dark");
document.documentElement.setAttribute("data-layout", "vertical");
document.documentElement.setAttribute("data-sidebar-size", "lg");
}, []);

 
    return (
        
        <div>
            {user && <LoadScript />}
            <Header />
            <Sidebar />
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">
                        
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>

            <SiteSettignOptions/>

            
        </div>
    )
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}