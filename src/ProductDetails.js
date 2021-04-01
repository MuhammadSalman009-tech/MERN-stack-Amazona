import { Button, CardMedia, Container, CssBaseline, Grid, TextField, Typography, MenuItem } from '@material-ui/core'
import React from 'react'
import Rating from './components/Rating';
import Topnav from './components/Topnav';
import useStyles from "./styles";

const quantities=[1,2,3,4,5,6];
function ProductDetails({product}) {
    const [quantity,setQuantity]=React.useState(1);
    const classes=useStyles();

    const handleChange=(e)=>{
        setQuantity(e.target.value);
    }
    return (
        <React.Fragment>
            <Topnav/>
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

                        <Typography variant="h5" component="h2" gutterBottom>Quantity</Typography>
                        <TextField
                        id={classes.helperText}
                        select
                        label="Qty. "
                        value={quantity}
                        onChange={handleChange}
                        helperText="Please select your Quantity"
                        variant="outlined"
                        size="small"
                        >
                        {quantities.map((quantity) => (
                            <MenuItem key={quantity} value={quantity}>
                                {quantity}
                            </MenuItem>
                        ))}
                        </TextField>
                        <Typography variant="h5" component="h2">
                            Status
                        </Typography>
                        {product.quantity>0?<Typography className={classes.success}>In Stock</Typography>:<Typography className={classes.error}>Out of STock</Typography>}
                        <Typography className={classes.productPrice} gutterBottom>
                            ${product.price}
                        </Typography>
                        <Typography>
                            <Button variant="contained" color="primary" size="large">
                                Add to Cart
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default ProductDetails
