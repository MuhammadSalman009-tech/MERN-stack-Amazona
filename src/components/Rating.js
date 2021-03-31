import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function Rating({rating}) {
    return (
        <React.Fragment>
            {rating>=1?<StarIcon fontSize="small"/>:rating>=0.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>} 
            {rating>=2?<StarIcon fontSize="small"/>:rating>=1.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
            {rating>=3?<StarIcon fontSize="small"/>:rating>=2.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
            {rating>=4?<StarIcon fontSize="small"/>:rating>=3.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
            {rating>=5?<StarIcon fontSize="small"/>:rating>=4.5?<StarHalfIcon fontSize="small"/>:<StarOutlineIcon fontSize="small"/>}
        </React.Fragment>
    )
}

export default Rating
