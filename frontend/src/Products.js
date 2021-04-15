import {Container, Grid} from '@material-ui/core';
import React from 'react';
import Product from "./components/Product";
import useStyles from "./styles";
import HeroContent from './components/HeroContent';
import LoadingComponent from './components/LoadingComponent';


function Products(props) {
    const classes=useStyles();
    if(props.productsError){
        return (
            <React.Fragment>
            `    <main>
                    <div className={classes.heroContent}>
                        {/*Rendering HeroContent Component*/}
                        <HeroContent/>
                    </div>
                    <Container maxWidth="md" className={classes.cardGrid}>
                        <h1 className={classes.center}>{props.productsError}</h1>
                    </Container>
                </main>
            </React.Fragment>
        )
    }else if(!props.productsLoaded){
        return (
            <React.Fragment>
            `    <main>
                    <div className={classes.heroContent}>
                        {/*Rendering HeroContent Component*/}
                        <HeroContent/>
                    </div>
                    <Container maxWidth="md" className={classes.cardGrid}>
                        <div className={classes.center}>
                            <LoadingComponent/>
                        </div>
                    </Container>
                </main>
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <main>
                    <div className={classes.heroContent}>
                        {/*Rendering HeroContent Component*/}
                        <HeroContent/>
                    </div>
                    <Container maxWidth="md" className={classes.cardGrid}>
                        
                        <Grid container spacing={3}>
                            {props.products.map(product=>(
                            //Rendering Product Component   
                            <Product product={product} key={product._id}/>
                            ))}
                            
                        </Grid>
                    </Container>
                </main>
            </React.Fragment>
        )
    }
}

export default Products
