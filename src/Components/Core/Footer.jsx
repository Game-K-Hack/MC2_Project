import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CONSTANTES from "../../Utils/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";
import PropTypes from "prop-types";






export default function Footer({ children }) {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  
  const handleClickOpen = (title) => {
    setDialogTitle(title);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {children}
      <Box
        sx={{
          background: CONSTANTES.HEADER_BACKGROUND_COLOR,
          bottom: 0,
          position: "fixed",
          width: "1280px",
          color: "white",
          borderTopLeftRadius: CONSTANTES.BORDER_RADIUS,
          borderTopRightRadius: CONSTANTES.BORDER_RADIUS,
          mt: "auto",
          height: "70px",
        }}
      >
        <Container maxWidth="lg">
          <Grid borderTop={5} solid margin={1} borderRadius={16}>

          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={4} >
              <Typography
                variant="body1"
                fontSize={14} style={{ textDecoration: "none" }}
              >
                <Link  color="inherit" onClick={() => handleClickOpen('Privacy Policy')} style={{ textDecoration: "none" }}>
                  Rules
                </Link>{" "}
                • 
                <Link color="inherit" onClick={() => handleClickOpen('Privacy Policy')} style={{ textDecoration: "none" }}>
                  Terms of Service
                </Link>
                <br></br>
                <Typography sx={{ fontStyle: "oblique", fontSize: 12 }}>
                  Copyright © {new Date().getFullYear()}
                </Typography>
              </Typography>
              <Dialog open={open} onClose={handleClose}>
              <DialogTitle >Bienvenue dans "Tu préfères" !</DialogTitle>
              <DialogContent>
                  <DialogContentText>
Dans ce jeu divertissant, vous allez devoir faire des choix difficiles entre deux options.<br></br> Voici comment jouer :

<br /><strong>1. Choisir entre deux photos :</strong> À chaque tour, vous serez présenté avec deux photos représentant deux situations différentes, parfois drôles, parfois étonnantes, parfois sérieuses.

<br></br>Faire votre choix : Après avoir regardé attentivement les deux photos, vous devez choisir celle qui correspond le mieux à votre préférence ou à votre opinion.

<br/><strong>2. Cliquer pour voter :</strong> Une fois que vous avez pris votre décision, cliquez sur la photo que vous préférez.

<br/><br/>Prêt à jouer à "Tu préfères" ? Cliquez sur "<strong>Jouer</strong>" et lancez-vous dans l'aventure des choix impossibles !
              </DialogContentText>
              </DialogContent>
              <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Jouer !
          </Button>
        </DialogActions>
            </Dialog>
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="h10" style={{ textDecoration: 'underline', fontFamily: "LeoRoundedBold" }}>
                Tu préfères ?
              </Typography>
              <Typography variant="body1">
                React | Material UI | React Router
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Link
                href="https://github.com/Game-K-Hack/MC2_Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: "white" }} />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
    </>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
}