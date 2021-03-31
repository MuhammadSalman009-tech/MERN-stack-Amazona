import React from 'react'
import { Card, CardActions, CardContent, CardMedia,Grid, Typography, Button} from "@material-ui/core";
import useStyles from "../styles";
import Rating from './Rating';
function Product({product}) {
    const classes=useStyles();
    return (
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
                        <span className={classes.ratingStars}>
                            {/*Rendin Rating Component*/}
                            <Rating rating={product.rating}/>
                        </span>
                        <span className={classes.ratingReviews}>10 Reviews</span>
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
    )
}

export default Product
