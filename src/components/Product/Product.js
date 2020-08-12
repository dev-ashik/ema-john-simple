import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to = {"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>

                <p>${price}</p>
                <p><small>Only: {stock} left in stock - Order soon</small></p>
                {props.showAddToCard === true && <button className="product-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;