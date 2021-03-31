import React from 'react'
import {Container, Typography, Grid, Button} from "@material-ui/core";
import useStyles from "../styles";
function HeroContent() {
    const classes=useStyles();
    return (
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Product Catalogue
            </Typography>
            <Typography align="center">
                This is a little bit description about our Photo Gallery app. That describes what our
                photo gallery app can do fo you.
            </Typography>
            <div>
                <Grid container spacing={2} justify="center" className={classes.heroButtons}>
                    <Grid item>
                        <Button variant="contained" color="primary">Buy Products</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary">Sell Products</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default HeroContent
