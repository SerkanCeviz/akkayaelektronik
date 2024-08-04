import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src={logo}
          alt="Akkaya Elektronik Logo"
          style={{ height: 75, width: 150, marginRight: "auto" }}
        />
        <Button color="inherit" component={Link} to="/">
          ANA SAYFA
        </Button>
        <Button color="inherit" component={Link} to="/about">
          HAKKIMIZDA
        </Button>
        {/* <Button color="inherit" component={Link} to="/products">
          ÜRÜNLERİMİZ
        </Button>
        <Button color="inherit" component={Link} to="/lighting">
          DIŞ CEPHE AYDINLATMA
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          REFERANSLAR/PROJELER
        </Button> */}
        <Button color="inherit" component={Link} to="/contact">
          İLETİŞİM
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
