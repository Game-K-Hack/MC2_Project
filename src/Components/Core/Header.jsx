import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CONSTANTES from '../../Utils/constants';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ButtonAppBar({
  children
}) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{borderRadius: CONSTANTES.BORDER_RADIUS, background: CONSTANTES.HEADER_BACKGROUND_COLOR}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, background: CONSTANTES.BUTTON_BACKGROUND_COLOR } } onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link to="/statistiques">Statistiques</Link></MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "LeoRoundedBold" }}>
            {CONSTANTES.NAME_APP}
          </Typography>
          <a href="/"><img src="src\assets\logo_prefere.png" style={{ width: '80px', height: '80px', margin: 3 }}  /></a>
        </Toolbar>
      </AppBar>
    </Box>
    {children}
    </>
  );
}

ButtonAppBar.propTypes = {
  children: PropTypes.node,
}