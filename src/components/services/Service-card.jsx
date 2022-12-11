import React from "react";
import Button from "@mui/material/Button";

const ServiceCard = (props) => {
  return (
    <div className="service-card dflex dflex-column gap-1">
      <h3 className="heading-title">{props.title}</h3>

      <p className="description">{props.description}</p>

      <Button
        sx={{
          background: "rgb(30 144 255 / .1)",
          color: "#787878",
          "&:hover": {
            backgroundColor: "rgb(30 144 255 / .5)",
            boxShadow: "none",
            color: '#454545'
          },
        }}
        variant="contained"
      >
        Explore
      </Button>
    </div>
  );
};

export default ServiceCard;
