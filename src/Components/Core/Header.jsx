import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CONSTANTES from '../../Utils/constants';
import PropTypes from 'prop-types';

export default function ButtonAppBar({
  children
}) {
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
            sx={{ mr: 2, background: CONSTANTES.BUTTON_BACKGROUND_COLOR}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {CONSTANTES.NAME_APP}
          </Typography>
          <Button color="inherit">Statistiques</Button>
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