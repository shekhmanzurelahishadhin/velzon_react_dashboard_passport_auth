
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import LoadScript from '../components/LoadScript'
import React, { useEffect } from 'react'
import SiteSettignOptions from '../components/SiteSettignOptions'

export default function MainLayout() {
useEffect(() => {
document.documentElement.setAttribute("data-theme", "default");
document.documentElement.setAttribute("data-sidebar", "dark");
document.documentElement.setAttribute("data-layout", "vertical");
document.documentElement.setAttribute("data-sidebar-size", "lg");
}, []);
 const O = () => {
    const e = document.documentElement.clientWidth;
    const layout = document.documentElement.getAttribute("data-layout");
    const sidebarSize = document.documentElement.getAttribute("data-sidebar-size");

    const hamburger = document.querySelector(".hamburger-icon");
    if (e > 767 && hamburger) hamburger.classList.toggle("open");

    if (layout === "horizontal") {
      document.body.classList.toggle("menu");
    }

    if (layout === "vertical") {
      if (e <= 1025 && e > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", sidebarSize === "sm" ? "" : "sm");
      } else if (e > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", sidebarSize === "lg" ? "sm" : "lg");
      } else if (e <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    if (layout === "semibox") {
      if (e > 767) {
        const visibility = document.documentElement.getAttribute("data-sidebar-visibility");
        if (visibility === "show") {
          document.documentElement.setAttribute("data-sidebar-size", sidebarSize === "lg" ? "sm" : "lg");
        } else {
          const showBtn = document.getElementById("sidebar-visibility-show");
          if (showBtn) showBtn.click();
        }
      } else {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    if (layout === "twocolumn") {
      document.body.classList.toggle("twocolumn-panel");
    }
  };
    return (
        <div>
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

            <LoadScript />
        </div>
    )
}
