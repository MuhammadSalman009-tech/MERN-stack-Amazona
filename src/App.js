import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import {makeStyles} from "@material-ui/core/styles"
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import products from "./Products"

const useStyles=makeStyles(theme=>({
    icon:{
        marginRight: theme.spacing(2)
    },
    heroContent:{
        backgroundColor:theme.palette.background.paper,
        padding: '40px'
    },
    heroButtons:{
        marginTop:'32px'
    },
    cardGrid:{
        padding: '64px 0px'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%' //16:9
    },
    cardContent:{
        flexGrow:'1'
    },
    productTitle:{
        color:'#3f51b5',
        textDecoration:'none',
        '&:hover':{
            color:'#ff8000'
        }
    },
    productRating:{
        color:'#ff8000'
    },
    productPrice:{
        fontSize:'24px'
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'48px'
    }
}))

function App() {
    const classes=useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <CameraAltIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit">
                        Product Gallery
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>
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
                </div>
                <Container maxWidth="md" className={classes.cardGrid}>
                    <Grid container spacing={3}>
                        {products.map(product=>(
                        <Grid item xs={12} sm={6} md={4} key={product._id}>
                        <Card className={classes.card}>
                            <a href="/">
                                <CardMedia
                                image={product.image}
                                title={product.name}
                                className={classes.cardMedia}
                                />
                            </a>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                   <a href={`/product/${product._id}`} className={classes.productTitle}>{product.name}</a> 
                                </Typography>
                                <Typography color="textSecondary">
                                    {product.description}
                                </Typography>
                                <Typography className={classes.productRating}>
                                    <StarIcon fontSize="small"/>
                                    <StarIcon fontSize="small"/>
                                    <StarIcon fontSize="small"/>
                                    <StarIcon fontSize="small"/>
                                    <StarIcon fontSize="small"/>
                                </Typography>
                                <Typography className={classes.productPrice}>
                                    ${product.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                        ))}
                        
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography align="center" variant="h6" color="textPrimary" gutterBottom>
                    Footer
                </Typography>
                <Typography align="center">
                    Something here to give the footer a purpose! and description about footer
                </Typography>
            </footer>
        </React.Fragment>
    )
}

export default App
