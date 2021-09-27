import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [displaySearchProduct , setDisplaySearchProduct] = useState([])
    const [cart , setCart] = useState([]);


    useEffect( () => {
        fetch('./products.JSON')
        .then( res => res.json())
        .then( data => {
            setProducts(data);
            setDisplaySearchProduct(data);
        })
    },[]);

    
    const addToCartHandle = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }

    const handleSearchProduct = event => {
        
        const searchText = event.target.value;
        const searchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplaySearchProduct(searchProducts);
        
    }
    

    return (
        <div>
            <div className="search-product">
                <input onChange={handleSearchProduct} type="text" placeholder="Search Your Product" />
            </div>
            <div className="shop-details">
                <div className="item-container">
                    {
                        displaySearchProduct.map(product => 
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
        </div>
    );
};

export default Shop;