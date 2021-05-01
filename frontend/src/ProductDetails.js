import { Button, CardMedia, Container, CssBaseline, Grid, TextField, Typography, MenuItem } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
import Rating from './components/Rating';
import useStyles from "./styles";
import {fetchSingleProduct} from "./redux/actions/singleProductActions"
import LoadingComponent from './components/LoadingComponent';

function ProductDetails({match}) {
    const id=match.params.id;
    const [quantity,setQuantity]=React.useState(1);
    const history=useHistory();
    const classes=useStyles();
    const disptach=useDispatch();
    const {singleProductError,singleProductLoaded,product} = useSelector(state => state.SingleProduct);

    useEffect(()=>{
        disptach(fetchSingleProduct(id))
    },[disptach,id])
    const handleQuantityChange=(e)=>{
        setQuantity(e.target.value);
    }
    const handleAddToCart=()=>{
        history.push(`/cart/${product._id}?qty=${quantity}`);
    }
    if(singleProductError){
        return (
            <Container maxWidth="md" className={classes.cardGrid}>
                <h1 className={classes.center}>{singleProductError}</h1>
            </Container>
        )
    }else if(!singleProductLoaded){
        return (
            <Container maxWidth="md" className={classes.cardGrid}>
                <LoadingComponent/>
            </Container>
        )
    }else{
    return (
        <React.Fragment>
            <Container className={classes.detailContainer}>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6} className={classes.detailCol1}>
                        <CssBaseline/>
                        <CardMedia
                        image={product.image}
                        title={product.name}
                        className={classes.detailImage}
                        />
                    </Grid>
                    <Grid item sm={12} md={6} className={classes.detailCol}>
                        <Typography variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography color="textSecondary">
                            {product.description}
                        </Typography>
                        
                        <Rating rating={product.rating} reviews={product.numReviews}/>

                        
                        <Typography variant="h5" component="h2">
                            Status
                        </Typography>
                        {product.quantity>0?
                        <React.Fragment>
                            <Typography className={classes.success}>In Stock</Typography>
                            <Typography variant="h5" component="h2" gutterBottom>Quantity</Typography>
                            <TextField
                            id={classes.helperText}
                            select
                            label="Qty. "
                            value={quantity}
                            onChange={handleQuantityChange}
                            helperText="Please select your Quantity"
                            variant="outlined"
                            size="small"
                            >
                            {[...Array(product.quantity).keys()].map((x) => (
                                <MenuItem key={x+1} value={x+1}>
                                    {x+1}
                                </MenuItem>
                            ))}
                            </TextField>
                            <Typography>
                                <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                            </Typography>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Typography className={classes.error}>Out of STock</Typography>
                            <Typography>
                                <Button variant="contained" color="primary" size="large" disabled>
                                    Add to Cart
                                </Button>
                            </Typography>
                        </React.Fragment>
                        }
                        <Typography className={classes.productPrice} gutterBottom>
                            ${product.price}
                        </Typography>
                        
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )}
}

export default ProductDetails
