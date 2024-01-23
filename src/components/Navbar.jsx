import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { ArrowBack } from '@mui/icons-material';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar elevation={10}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h6" component="div">
              MochaSteve
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
              <ArrowBack />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Home" onClick={() => window.location.href = "/"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" onClick={() => window.location.href = "/about"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" onClick={() => window.location.href = "/contact"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
