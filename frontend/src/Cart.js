import React from 'react'

function Cart(props) {
    const productID=props.match.params.id;
    const quantity=props.location.search?Number(props.location.search.split("=")[1]) : 1;
    return (
        <div>
            <h1>Cart</h1>
            <p>
                Product ID: {productID} <br></br>
                Quantity: {quantity}
            </p>
        </div>
    )
}

export default Cart
