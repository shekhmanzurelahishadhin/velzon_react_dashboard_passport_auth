import { useEffect } from "react";

function useRightSideResponsive() {
  useEffect(() => {
    function handleResize() {
      const e = document.querySelector(".layout-rightside-col");
      const layout = document.documentElement.getAttribute("data-layout");

      if (!e) return;

      const width = window.outerWidth;

      // Reset visibility
      e.classList.remove("d-block", "d-none");

      if (layout === "semibox") {
        e.classList.add("d-none");
      } else if (width < 1699 || width > 3440) {
        e.classList.remove("d-block");
      } else {
        e.classList.add("d-block");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Trigger once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export default useRightSideResponsive;
