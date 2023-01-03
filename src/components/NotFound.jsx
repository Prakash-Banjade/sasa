import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }, []);

  return <div>
    <h1 className="text-center" style={{fontFamily: 'var(--primary-font)', marginTop: '1rem', padding: '20px', fontSize: '5rem', fontWeight: '500'}}>404! Page Not Found</h1>
  </div>;
};

export default NotFound;
