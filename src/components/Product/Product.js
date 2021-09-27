import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const {name , seller , img , price , stock , star} = props.product;

    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    

    return (
        <div className="product-details" >
            <img src={img} alt="" />
            <div>
                <h3 className="product-name">{name}</h3>
                <h5>By : {seller}</h5>
                <h4>${price}</h4>
                <p>only <span>{stock}</span> left in stock - order soon</p>
                <div>
                <Rating className="icon-color"
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star fa-2x"
                    fullSymbol="fas fa-star fa-2x"
                > </Rating>
                
                </div>
                <br />
                <button onClick={() => props.addToCartHandle(props.product)} className="btn-regular">{icon}add to cart</button>
            </div>
        </div>
    );
};

export default Product;