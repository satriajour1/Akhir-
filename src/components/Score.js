import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import swit from '../assets/swit.png';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

export default function GameList() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',

                        backgroundPosition: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        display: 'flex',
                        pt: 30,
                        pb: 15,
                    }}
                >
                    <Container maxWidth="sm">

                        <Stack
                            sx={{ pt: 10 }}
                            justifyContent="center"
                        >

                        </Stack>
                    </Container>
                </Box>
                <Container sx={{}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="40%"
                                            src={swit}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Swit
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang.
                                                Di Indonesia sendiri, permainan jari
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" color="secondary">
                                            <Link style={{ textDecoration: "none" }} to="/game">Play</Link>

                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            <Link style={{ textDecoration: "none" }} to="/gamedetail">Detail</Link>

                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
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
