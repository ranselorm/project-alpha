import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);

    const scrollableDiv = document.getElementById("scrollable-content");
    if (scrollableDiv) {
      console.log("DIV FOUND");
      scrollableDiv.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
