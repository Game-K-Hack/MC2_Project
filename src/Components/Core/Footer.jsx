import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CONSTANTES from "../../Utils/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';

export default function Footer({ children }) {
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
                <Link href="/privacy-policy" color="inherit" style={{ textDecoration: "none" }}>
                  Privacy Policy
                </Link>{" "}
                • 
                <Link href="/terms-of-service" color="inherit" style={{ textDecoration: "none" }}>
                  Terms of Service
                </Link>
                <br></br>
                <Typography sx={{ fontStyle: "oblique", fontSize: 12 }}>
                  Copyright © {new Date().getFullYear()}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography  variant="h10" style={{ textDecoration: 'underline' }}>
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
