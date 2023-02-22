import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { Button, Menu, MenuItem } from "@mui/material";

const Appointments = ({ drawerWidth }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
   console.log('test');
    if (e.currentTarget.localName !== "ul"&&e.currentTarget===undefined) {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  return (
    <div
      style={{
        width: `calc(100vw - ${drawerWidth + 10}px)`,
        position: "relative",
        left: drawerWidth,
        marginLeft: "10px",
      }}
    >
      <Header title={"Appointments"} />
      <Button
          id="menubutton1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
         <button onClick={()=>handleClose()}> Menu</button>
         
          <br />
          Items
        </Menu>
    </div>
  );
};

export default Appointments;
