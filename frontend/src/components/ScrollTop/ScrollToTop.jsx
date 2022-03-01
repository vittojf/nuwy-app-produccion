import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const location = useLocation();
 
  useEffect(() => {
    if(location.pathname==='/sobre-nosotros'||location.pathname==='/'){

      window.scrollTo(0, 0);
    }else{
      return
    }
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;