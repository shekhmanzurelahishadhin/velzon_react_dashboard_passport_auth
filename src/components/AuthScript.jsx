import React, {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function AuthScript() {
 const location = useLocation();
    useEffect(() => {
    const scripts = [
    //   "/assets/libs/bootstrap/js/bootstrap.bundle.min.js",
      "/assets/libs/simplebar/simplebar.min.js",
      "/assets/libs/node-waves/waves.min.js",
      "/assets/libs/feather-icons/feather.min.js",
      "/assets/js/pages/plugins/lord-icon-2.1.0.js",
      // "/assets/js/plugins.js",
      //  "/assets/js/app.js",
      "/assets/libs/apexcharts/apexcharts.min.js",
      "/assets/libs/jsvectormap/js/jsvectormap.min.js",
      "/assets/libs/jsvectormap/maps/world-merc.js",
      "/assets/libs/swiper/swiper-bundle.min.js",
      "/assets/js/pages/dashboard-ecommerce.init.js",
      "/assets/libs/particles.js/particles.js",
      "/assets/js/pages/particles.app.js",
      "/assets/js/pages/password-addon.init.js",
      "/assets/js/pages/form-validation.init.js",
    ];

    const loadedScripts = [];

    function generateId(src) {
      // Creates a unique ID from the script src
      return `script-${btoa(src).replace(/=/g, "")}`;
    }

    async function loadScript(src) {
      const id = generateId(src);
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove(); // Remove any existing script with the same ID
        
      }

      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        document.body.appendChild(script);
        loadedScripts.push(id); // Track the ID for cleanup
        
      });
    }

    (async () => {
      for (const src of scripts) {
        await loadScript(src);
      }
    })();

    return () => {
      loadedScripts.forEach((id) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [location.pathname]);
  

  return null;
}
