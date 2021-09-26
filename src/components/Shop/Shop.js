import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart , setCart] = useState([]);


    useEffect( () => {
        fetch('./products.JSON')
        .then( res => res.json())
        .then( data => setProducts(data))
    },[]);

    
    const addToCartHandle = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    

    return (
        <div className="shop-details">
            <div className="item-container">
                {
                    products.map(product => 
                    <Product 
                        key={product.key}
                        product={product}
                        addToCartHandle={addToCartHandle}
                    >
                    </Product>)
                }
            </div>
            <div className="order-details">

                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;