import React, {useEffect} from 'react'
import LoadScript from '../components/LoadScript'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    useEffect(() => {
    document.documentElement.setAttribute("data-theme", "default");
    document.documentElement.setAttribute("data-sidebar", "dark");
    document.documentElement.setAttribute("data-layout", "vertical");
    document.documentElement.setAttribute("data-sidebar-size", "lg");
    }, []);
    useEffect(() => {
         if (window._scriptsLoaded) return;
        window._scriptsLoaded = true;
        const scripts = [
            "/assets/libs/bootstrap/js/bootstrap.bundle.min.js",
            "/assets/libs/simplebar/simplebar.min.js",
            "/assets/libs/node-waves/waves.min.js",
            "/assets/libs/feather-icons/feather.min.js",  // feather must load before app.js
            "/assets/js/pages/plugins/lord-icon-2.1.0.js",
            // "/assets/js/plugins.js",
            "/assets/libs/apexcharts/apexcharts.min.js",
            "/assets/libs/jsvectormap/js/jsvectormap.min.js",
            "/assets/libs/jsvectormap/maps/world-merc.js",
            "/assets/libs/swiper/swiper-bundle.min.js",
            "/assets/js/pages/dashboard-ecommerce.init.js",

            "assets/libs/particles.js/particles.js",
            "assets/js/pages/particles.app.js",
            "assets/js/pages/password-addon.init.js",
            "assets/js/pages/form-validation.init.js"

        ];
    
      function loadScript(src) {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve();
          document.body.appendChild(script);
        });
      }
    
      (async () => {
        for (const src of scripts) {
          await loadScript(src);
        }
      })();
    
      return () => {
        scripts.forEach(src => {
          const script = document.querySelector(`script[src="${src}"]`);
          if (script) document.body.removeChild(script);
        });
      };
    }, []);
    return (
        <div>
            <Outlet/>
        </div>
    )
}
