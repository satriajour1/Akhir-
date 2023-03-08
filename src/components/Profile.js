import axios from 'axios';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";

function UserProfile() {
  const baseURL = "http://167.172.69.47:5000/api/user/profile";
  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    const response = await axios.get(`${baseURL}`);

    setProfile(response.data.userProfile);
  }

  useEffect( () => {
    getProfile()
  }, [])

  
  

  const theme = createTheme({
    palette: {
      text: {
        primary: {
          main: '#603C6D'
        },
        secondary: {
          main: '#FFAF00',
        },
      },
    },
  });

  const Item = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    alignContent: 'center',
    textAlign: 'left',
    fontSize: '24px',
    color: theme.palette.text.secondary.main,
  }));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box
          sx={{
              marginTop: 10,
              marginBottom: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
          }}
        >
          <Typography variant="h2" gutterBottom color={'text.primary.main'}>
            username {/*GET FROM API*/}
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <Item>
              First Name
            </Item>
          </Grid>
          <Grid xs={5}>
            <TextField
              fullWidth
              name="firstname"
              id="firstname"
              defaultValue="firstname"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <Item>
              Last Name
            </Item>
          </Grid>
          <Grid xs={5}>
            <TextField
              fullWidth
              name="lastname"
              id="lastname"
              defaultValue="lastname"
              InputProps={{
                readOnly: true,
              }}
              />
          </Grid>

          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <Item>
              Region
            </Item>
          </Grid>
          <Grid xs={5}>
            <TextField
              fullWidth
              name="region"
              id="region"
              defaultValue="region"
              InputProps={{
                readOnly: true,
              }}
              />
          </Grid>

          <Grid xs={2}>
          </Grid>
          <Grid xs={5}>
            <Item>
              Bio
            </Item>
          </Grid>
          <Grid xs={5}>
            <TextField
              fullWidth
              name="bio"
              id="bio"
              defaultValue="this is bio"
              multiline
              rows={3}
              InputProps={{
                readOnly: true,
              }}
              />
          </Grid>

          <Grid xs={8}>            
          </Grid>
          <Grid xs={4}> 
          
          </Grid>

        </Grid>

      </Container>
    </ThemeProvider>
    );
    
}
  
export default UserProfile;
