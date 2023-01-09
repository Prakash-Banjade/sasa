import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/context";

const ServiceCard = (props) => {
  const {dark} = useContext(ThemeContext)
  return (
    <div className="service-card dflex dflex-column gap-1" style={{background: dark? 'var(--primary-background)' : 'var(--service-card-color)'}}>
      <h3 className="heading-title">{props.title}</h3>

      <p className="description">{props.description}</p>

      <Button
        sx={{
          background: "rgb(30 144 255 / .1)",
          color: dark? 'var(--white)' : "#787878",
          "&:hover": {
            backgroundColor: "rgb(30 144 255 / .5)",
            boxShadow: "none",
            color: dark? 'white' : "#454545",
          },
        }}
        variant="contained"
      >
        <Link to={props.link}>Explore</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
