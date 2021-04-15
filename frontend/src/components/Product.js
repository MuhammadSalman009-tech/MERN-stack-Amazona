import React from 'react'
import { Card, CardActions, CardContent, CardMedia,Grid, Typography, Button} from "@material-ui/core";
import useStyles from "../styles";
import Rating from './Rating';
import { Link } from 'react-router-dom';
function Product({product}) {
    const classes=useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card className={classes.card}>
                <Link to={`/products/${product._id}`}>
                    <CardMedia
                    image={product.image}
                    title={product.name}
                    className={classes.cardMedia}
                    />
                </Link>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        <Link to={`/products/${product._id}`} className={classes.productTitle}>{product.name}</Link> 
                    </Typography>
                    <Typography color="textSecondary">
                        {product.shortDescription}
                    </Typography>
                    
                    {/*Rendin Rating Component*/}
                    <Rating rating={product.rating} reviews={product.numReviews}/>
                    
                    <Typography className={classes.productPrice}>
                        ${product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" component={Link} to={`/products/${product._id}`}>View</Button>
                    <Button size="small" color="primary">Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
