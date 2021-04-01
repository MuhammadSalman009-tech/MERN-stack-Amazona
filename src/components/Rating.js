import React from 'react'
import {Typography} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import useStyles from "../styles";

function Rating({rating,reviews}) {
    const classes=useStyles();
    return (
        <Typography className={classes.productRating}>
            <span className={classes.ratingStars}>
                {rating>=1?<StarIcon fontSize="small"/>:rating>=0.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>} 
                {rating>=2?<StarIcon fontSize="small"/>:rating>=1.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
                {rating>=3?<StarIcon fontSize="small"/>:rating>=2.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
                {rating>=4?<StarIcon fontSize="small"/>:rating>=3.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
                {rating>=5?<StarIcon fontSize="small"/>:rating>=4.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
            </span>
            <span className={classes.ratingReviews}> {reviews} Reviews</span>
        </Typography>
    )
}

export default Rating
