import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately without smooth behavior to avoid conflict with transitions
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
