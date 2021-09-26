import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    //price 
    let price = 0;
    price.toFixed(2);
    for(const product of cart){
        price = price + product.price;
    }

    //shipping cost 
    let shipping = 0;
    shipping.toFixed(2);
    for(const product of cart){
        shipping = shipping + product.shipping;
    }

    //total before tax
    let totalBeforeTax = price + shipping;
    totalBeforeTax = totalBeforeTax.toFixed(2)

    //estimate tax
    const estimateTax = (totalBeforeTax * 10) / 100;
    const estimateTaxFloat = estimateTax.toFixed('2');

    //order total 
    let totalOrderPrice = parseFloat(totalBeforeTax) + parseFloat(estimateTaxFloat);
    let totalOrderPriceFloat = totalOrderPrice.toFixed(2);


    // console.log(price);
    return (
        <div>
            <div className="order-header">
                <h2>Order Details</h2>
                <h4>Items ordered: {cart.length}</h4>
            </div>

            <br/>
            <table>
                <tr>
                    <td>Total Price </td>
                    <td>$ {price}</td>
                </tr>
                <tr>
                    <td>Shipping and Handling </td>
                    <td>$ {shipping}</td>
                </tr>
                <tr>
                    <td>Total Before Tax</td>
                    <td>$ {totalBeforeTax}</td>
                </tr>
                <tr>
                    <td>Estimated Tax</td>
                    <td>$ {estimateTaxFloat}</td>
                </tr>
                <tr>
                    <td className="order_total" >Order Total</td>
                    <td className="order_total" >$ {totalOrderPriceFloat}</td>
                </tr>
            </table>
        </div>
    );
};

export default Cart;