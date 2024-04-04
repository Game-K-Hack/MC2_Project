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
      <Box sx={{ background: CONSTANTES.HEADER_BACKGROUND_COLOR, bottom: 0,position: 'fixed', width: '1280px',  color: "white", borderTopLeftRadius: CONSTANTES.BORDER_RADIUS,borderTopRightRadius: CONSTANTES.BORDER_RADIUS, mt: 'auto', height: '80px' }}>
        <Container maxWidth="sm">
        <Grid container  alignItems="flex-start" justifyContent="space-between" >
            <Grid >
                <Typography variant="body1">
                <Link href="/privacy-policy" color="inherit">Privacy Policy</Link> • 
                    <Link href="/terms-of-service" color="inherit">Terms of Service</Link>
                </Typography>
                <Typography variant="body1">Copyright © {CONSTANTES.NAME_APP} 2024</Typography>
            </Grid>
            <Grid sx={{}}>
                <Link href="https://github.com/Game-K-Hack/MC2_Project" target="_blank"  rel="noopener noreferrer"
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