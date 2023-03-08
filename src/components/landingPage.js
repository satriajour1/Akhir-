import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bg from '../assets/bg.jpeg'


const theme = createTheme({
  palette: {
    primary: {
      light: '#b28900',
      main: '#ffc400',
      dark: '#ffcf33',
    },
  },
});;

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box 
          sx={{
            bgcolor: 'background.paper',
            backgroundImage: `url(${bg})`,
            width : '100vw',
            height : '100vh',
            backgroundPosition: 'cover',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              Team 2
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Enjoy the gaming universe in front of you and compete with other player too proof you are the best among them.
              <br />
              Feel free to login or regist if you are a new player.
            </Typography>

            <Stack
              sx={{ pt: 8 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              <Button 
              variant="contained">
                <Link style={{textDecoration: "none",color:"Black"}} to="/register">
                  REGISTER
                </Link>
              </Button>
              
              <Button  variant="contained">
                <Link style={{textDecoration: "none",color:"Black"}} to="/login">
                  LOGIN
                </Link>
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
