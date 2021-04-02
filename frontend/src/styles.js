import {makeStyles} from "@material-ui/core/styles";
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
        display:'flex',
        justifyContent:'space-between'
    },
    ratingStars:{
        color:'#ff8000'
    },
    ratingReview:{
        color:'#000'
    },
    productPrice:{
        fontSize:'24px'
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'48px'
    },
    center:{
        textAlign:'center'
    },
    //Product Details page
    detailImage:{
        width:'100%',
        paddingTop:'76.25%',
    },
    detailContainer:{
        backgroundColor:theme.palette.background.paper,
        marginTop:'32px',
        marginBottom:'32px'
    },
    helperText:{
        marginLeft:'0px'
    },
    success:{
        color:theme.palette.success.main
    },
    error:{
        color:theme.palette.error.main
    },
}))
export default useStyles;