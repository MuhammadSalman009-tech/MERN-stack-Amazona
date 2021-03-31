import {Container, CssBaseline, Grid} from '@material-ui/core';
import React from 'react';
import products from "./Products"
import Product from "./components/Product";
import useStyles from "./styles";
import Topnav from "./components/Topnav";
import Footer from './components/Footer';
import HeroContent from './components/HeroContent';


function App() {
    const classes=useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            {/*Rendering Topnav Component*/}
            <Topnav/>
            <main>
                <div className={classes.heroContent}>
                    {/*Rendering HeroContent Component*/}
                    <HeroContent/>
                </div>
                <Container maxWidth="md" className={classes.cardGrid}>
                    <Grid container spacing={3}>
                        {products.map(product=>(
                         //Rendering Product Component   
                        <Product product={product} key={product._id}/>
                        ))}
                        
                    </Grid>
                </Container>
            </main>
            {/* Rendering Footer Component */}
            <Footer/>
        </React.Fragment>
    )
}

export default App
