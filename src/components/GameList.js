import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bg from '../assets/istockphoto-1174871534-170667a.jpg'
import Home from "./Home"
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlicer';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(
    () => {
      getUserData()
    },
    []
  )

  const getUserData = async () => {
    const getData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    
    dispatch(
      setUser({
        name: getData.data.name,
        address: getData.data.address
      })
    )
  }
  
  return (
    <div className="App">
      <p>Nama: {user.name}</p>
      <p>Alamat: {user.address}</p>

    </div>
  );
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#603C6D'
    },
    secondary: {
      main: '#FFBF00',
    }
  },
});

function GameList() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            display: 'flex',
            pt: 30,
            pb: 15,
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
              FUN PORTAL
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Choose your game and prove you are the best!
            </Typography>
            <Stack
              sx={{ pt: 10 }}
              justifyContent="center"
            >
              <Button color="secondary" variant="contained" className='buttonplayrekomendasi'>
                <Link style={{ textDecoration: "none", color: "white" }} to="/game">
                  Play Our Recommendation
                </Link>
              </Button>

              <Button variant="contained" color='secondary' className='buttonscore' 
              style={{textDecoration: "none",color:"white"}} >Score</Button>

              <h3 variant="contained" color='secondary' className='textscore' 
              style={{textDecoration: "none",color:"white"}}>score:</h3>
            </Stack>
          </Container>
        </Box>
        
          <Home/>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6, }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.primary"
          component="p"
        >
          Courtesy of Team 2 Binar Wave 26!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default GameList;