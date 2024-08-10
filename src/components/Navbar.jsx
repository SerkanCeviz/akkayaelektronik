import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TranslateIcon from "@mui/icons-material/Translate";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { i18n, t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:600px)");

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#F8F8F8",
      },
      primary: {
        main: "#1976d2",
      },
      text: {
        primary: "#000",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#303030",
      },
      primary: {
        main: "#90caf9",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary={t('Home')} />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
        <ListItemText primary={t('About')} />
      </ListItem>
      <ListItem button component={Link} to="/projects" onClick={toggleDrawer(false)}>
        <ListItemText primary={t('Projects')} />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        <ListItemText primary={t('Contact')} />
      </ListItem>
      <ListItem>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>
          <TranslateIcon />
        </IconButton>
      </ListItem>
    </List>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <img src={logo} alt="Akkaya Elektronik Logo" style={{ height: 75, width: 150 }} />
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList()}
              </Drawer>
            </>
          ) : (
            <div>
              <Button color="inherit" component={Link} to="/">
                {t('Home')}
              </Button>
              <Button color="inherit" component={Link} to="/about">
                {t('About')}
              </Button>
              <Button color="inherit" component={Link} to="/projects">
                {t('Projects')}
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                {t('Contact')}
              </Button>
            </div>
          )}
          {!isMobile && (
            <Box>
              <IconButton edge="end" color="inherit" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton edge="end" color="inherit" onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}>
                <TranslateIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
