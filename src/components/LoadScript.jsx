
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function LoadScript() {
  const location = useLocation();

  useEffect(() => {
    // if (window._scriptsLoaded) return;
    // window._scriptsLoaded = true;
    const scripts = [
    
      "/assets/libs/simplebar/simplebar.min.js",
      "/assets/libs/node-waves/waves.min.js",
      "/assets/libs/feather-icons/feather.min.js",
      "/assets/js/pages/plugins/lord-icon-2.1.0.js",
    
      "/assets/libs/apexcharts/apexcharts.min.js",
      "/assets/libs/jsvectormap/js/jsvectormap.min.js",
      "/assets/libs/jsvectormap/maps/world-merc.js",
      "/assets/libs/swiper/swiper-bundle.min.js",
      "/assets/js/pages/dashboard-ecommerce.init.js",
      "/assets/js/app.js",
    
      "/assets/js/pages/password-addon.init.js",
      "/assets/libs/prismjs/prism.js",
      "/assets/js/pages/form-validation.init.js",
    ];

    const scriptIds = scripts.map(src => `script-${btoa(src)}`); // Unique IDs

    // Remove all scripts with our IDs
    const removeExisting = () => {
      scriptIds.forEach((id) => {
        const old = document.getElementById(id);
        if (old) {
          old.remove();
        }
      });
    };

    // Load scripts fresh
    const loadScripts = async () => {
      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i];
        const id = scriptIds[i];

        const existing = document.getElementById(id);
        if (existing) existing.remove(); // extra safety

        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.async = false;
        document.body.appendChild(script);
      }
    };

    removeExisting();
    loadScripts();
    return () => {
      removeExisting(); // Cleanup on unmount
    };
  }, [location.pathname]);
}
