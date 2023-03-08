import React from "react";
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import game from '../assets/swit.png';
import Home from "./Home"
import Grid from "@mui/material/Grid";


function Detail() {
    return (
        <div>
            <div>
                <Grid container columns={12}>
                    <Grid
                        container
                        item
                        xs={3}
                        alignItems="left"
                        justifyContent="center"
                        paddingLeft={20}
                    >
                        <div>
                            <Card sx={{ mt: 15, maxWidth: 750 }}>
                                <CardActionArea>
                                    <h1>Game Swit</h1>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={game}
                                        alt="game image"
                                    />
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={5}
                        textAlign="justify"
                        justifyContent="start"
                    >
                        <div>
                            <Card sx={{ ml: 15, mt: 15, maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Apa itu game Swit?
                                        </Typography>
                                        <Typography variant="body1" color="text.primer">
                                            Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang.
                                            Di Indonesia sendiri, permainan jari dalam permainan ini, ada tiga gestur yang dapat dipilih, yaitu gunting, batu, dan kertas.


                                            Cara bermain game Swit sendiri cukup simple, player 1 akan memilih opsi gunting/batu/kertas, lalu player 2 akan juga akan memilih opsi tersebut,
                                            setelah kedua pemain memilih maka akan ditentukan pemenang berdasarkan pilihan kedua pemain tersebut? penasaran? langsung saja mainkan game swit!!


                                        </Typography>

                                        <Button
                                            type="submit"
                                            size="small"
                                            variant="contained"
                                            textAlign="left"
                                            sx={{ mt: 2, mb: 2 }}
                                        >
                                            Play Now!

                                            <Link to="/game" variant="body2">

                                            </Link>
                                        </Button>

                                    </CardContent>


                                </CardActionArea>


                            </Card>
                        </div>

                        <div>

                        </div>
                    </Grid>



                </Grid>

                <br />
                <br />

                <br />
            </div>
            <div>

                <Grid container columns={12}>
                    <Grid
                        container
                        item
                        xs={3}
                        alignItems="left"
                        justifyContent="center"
                        paddingLeft={20}
                    >
                        <div>
                            <Card sx={{ mt: 10, maxWidth: 750 }}>
                                <CardActionArea>
                                    <h1>Game Swit</h1>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={game}
                                        alt="game image"
                                    />
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={5}
                        textAlign="justify"
                        justifyContent="start"
                    >
                        <div>
                            <Card sx={{ ml: 15, mt: 10, maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Apa itu game Swit?
                                        </Typography>
                                        <Typography variant="body1" color="text.primer">
                                            Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang.
                                            Di Indonesia sendiri, permainan jari dalam permainan ini, ada tiga gestur yang dapat dipilih, yaitu gunting, batu, dan kertas.


                                            Cara bermain game Swit sendiri cukup simple, player 1 akan memilih opsi gunting/batu/kertas, lalu player 2 akan juga akan memilih opsi tersebut,
                                            setelah kedua pemain memilih maka akan ditentukan pemenang berdasarkan pilihan kedua pemain tersebut? penasaran? langsung saja mainkan game swit!!


                                        </Typography>

                                        <Button
                                            type="submit"
                                            size="small"
                                            variant="contained"
                                            textAlign="left"
                                            sx={{ mt: 2, mb: 2 }}
                                        >
                                            Play Now!

                                            <Link to="/game" variant="body2">

                                            </Link>
                                        </Button>

                                    </CardContent>


                                </CardActionArea>


                            </Card>
                        </div>

                        <div>

                        </div>
                    </Grid>



                </Grid>

                <br />
                <br />

                <br />
            </div>

        </div>
    );
}

export default Detail;