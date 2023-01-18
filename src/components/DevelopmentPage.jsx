import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Link, useNavigate } from "react-router-dom";

const DevelopmentPage = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  return (
    <>

      <div className="ofsPage-container" style={{ padding: "3rem" }}>
        <ConstructionIcon sx={{ fontSize: "15rem", color: "var(--purple)" }} />
        <h2
          style={{
            fontSize: "4rem",
            color: "var(--purple)",
            fontFamily: "var(--text-font)",
          }}
        >
          This page is under development
        </h2>
        <h3
          style={{
            fontSize: "3rem",
            fontFamily: "var(--primary-font)",
            color: "var(--light-gray)",
          }}
        >
          Sorry for the inconvinience, head back later.
        </h3>
      </div>
      <br />
      <h3 className="text-center">
        Head to{" "}
        <Link to="/">
          <span style={{ textDecoration: "underline" }}>home page</span>
        </Link>
      </h3>
      <h3 className="text-center">
        Head{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleBack}
        >
          back
        </span>
      </h3>
    </>
  );
};

export default DevelopmentPage;
